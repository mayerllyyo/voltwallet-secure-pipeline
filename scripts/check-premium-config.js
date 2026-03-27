const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const envFiles = [".env", ".env.local", ".env.development", ".env.production"];

function readFile(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
}

function ensureNoBypassFlag(issues) {
  envFiles.forEach((file) => {
    const content = readFile(path.join(projectRoot, file));
    if (/PREMIUM_BYPASS\s*=\s*true/.test(content)) {
      issues.push(`el archivo ${file} contiene PREMIUM_BYPASS=true`);
    }
  });
}

function ensureGuardUsed(issues) {
  const apiPath = path.join(projectRoot, "pages/api/premium/redeem.ts");
  const content = readFile(apiPath);
  if (!/enforcePremiumAccess/.test(content)) {
    issues.push("el endpoint premium no importa/enlaza enforcePremiumAccess");
  }
}

function ensureNoClientRole(issues) {
  const watchPaths = [
    path.join(projectRoot, "pages/api/premium/redeem.ts"),
    path.join(projectRoot, "components/dashboard/PremiumBonusCard.tsx"),
  ];

  watchPaths.forEach((file) => {
    const content = readFile(file);
    if (/\"role\"/.test(content) || /\.role/.test(content)) {
      issues.push(`el archivo ${file.replace(projectRoot + path.sep, "")}: detectado acceso a \"role\" desde input`);
    }
  });
}

function run() {
  const issues = [];

  ensureNoBypassFlag(issues);
  ensureGuardUsed(issues);
  ensureNoClientRole(issues);

  if (issues.length) {
    console.error("Premium security checks fallaron:");
    issues.forEach((item) => console.error(`  • ${item}`));
    process.exitCode = 1;
    return;
  }

  console.log("Premium security checks pasaron");
}

run();
