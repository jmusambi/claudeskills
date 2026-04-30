#!/usr/bin/env node

const https = require("https");
const fs = require("fs");
const path = require("path");

const REPO_BASE =
  "https://raw.githubusercontent.com/joelmusambi/growthskills/main/skills/joelmusambi";

const SKILLS = {
  "demand-gen-engine": "Growth",
  "lead-scoring": "Analytics",
  "marketing-attribution": "Analytics",
  "abm-program": "ABM",
  "acquisition-channels": "Growth",
  "web-experiments": "CRO",
  "web-scraping": "Scraping",
  "custom-audiences": "Paid Media",
  "google-ads-optimization": "Paid Media",
  "facebook-ads-mastery": "Paid Media",
  "email-marketing-engine": "Email",
  "seo-technical-audit": "SEO",
  "seo-content-strategy": "SEO",
  "cro-playbook": "CRO",
  "growth-hacking-toolkit": "Growth",
  "marketing-data-infrastructure": "Marketing Ops",
  "ai-marketing-automation": "AI & Agents",
  "webinar-growth-engine": "Lead Gen",
  "b2b-linkedin-ads": "Paid Media",
  "marketing-tech-stack": "Marketing Ops",
  "pricing-strategy": "Strategy",
  "revenue-intelligence": "AI & Agents",
};

const args = process.argv.slice(2);
const command = args[0];
const skillName = args[1];

function printHelp() {
  console.log(`
  \x1b[33mgrowthskills\x1b[0m — AI marketing skills installer

  \x1b[1mUsage:\x1b[0m
    npx growthskills add <skill-name>    Install a skill
    npx growthskills list                List all available skills
    npx growthskills help                Show this help message

  \x1b[1mExamples:\x1b[0m
    npx growthskills add demand-gen-engine
    npx growthskills add email-marketing-engine
    npx growthskills list
`);
}

function listSkills() {
  console.log("\n  \x1b[33mAvailable skills:\x1b[0m\n");
  Object.entries(SKILLS).forEach(([name, category], i) => {
    const num = String(i + 1).padStart(2, " ");
    console.log(
      `  ${num}. \x1b[1m${name}\x1b[0m \x1b[90m(${category})\x1b[0m`
    );
  });
  console.log(
    `\n  ${Object.keys(SKILLS).length} skills available. Run \x1b[33mnpx growthskills add <name>\x1b[0m to install.\n`
  );
}

function fetchFile(url) {
  return new Promise((resolve, reject) => {
    const get = (u) => {
      https
        .get(u, (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            get(res.headers.location);
            return;
          }
          if (res.statusCode !== 200) {
            reject(new Error(`HTTP ${res.statusCode}`));
            return;
          }
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => resolve(data));
        })
        .on("error", reject);
    };
    get(url);
  });
}

async function addSkill(name) {
  if (!SKILLS[name]) {
    console.error(
      `\n  \x1b[31mError:\x1b[0m Unknown skill "${name}". Run \x1b[33mnpx growthskills list\x1b[0m to see available skills.\n`
    );
    process.exit(1);
  }

  const url = `${REPO_BASE}/${name}/SKILL.md`;
  const destDir = path.join(process.cwd(), "skills", name);
  const destFile = path.join(destDir, "SKILL.md");

  console.log(`\n  Installing \x1b[33m${name}\x1b[0m...`);

  try {
    const content = await fetchFile(url);
    fs.mkdirSync(destDir, { recursive: true });
    fs.writeFileSync(destFile, content);
    console.log(
      `  \x1b[32m✓\x1b[0m Installed \x1b[1m${name}\x1b[0m \x1b[90m(${SKILLS[name]})\x1b[0m to ./skills/${name}/SKILL.md\n`
    );
  } catch (err) {
    console.error(
      `\n  \x1b[31mError:\x1b[0m Failed to download skill. ${err.message}\n`
    );
    process.exit(1);
  }
}

if (!command || command === "help") {
  printHelp();
} else if (command === "list") {
  listSkills();
} else if (command === "add") {
  if (!skillName) {
    console.error(
      '\n  \x1b[31mError:\x1b[0m Please specify a skill name. Example: npx growthskills add demand-gen-engine\n'
    );
    process.exit(1);
  }
  addSkill(skillName);
} else {
  console.error(
    `\n  \x1b[31mError:\x1b[0m Unknown command "${command}". Run \x1b[33mnpx growthskills help\x1b[0m for usage.\n`
  );
  process.exit(1);
}
