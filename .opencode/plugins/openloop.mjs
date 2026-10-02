// openloop — OpenCode plugin.
// Injects AGENTS.md into every chat's system prompt, and registers the
// bundled skills + slash command. Single source of truth: ../../AGENTS.md.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');

function readRules() {
  try {
    return fs.readFileSync(path.join(repoRoot, 'AGENTS.md'), 'utf8');
  } catch (e) {
    return 'openloop: plan first, use skills, prove it before claiming done.';
  }
}

function parseCommandFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;
  const description = match[1].match(/description:\s*(.+)/)?.[1]?.trim();
  return { description, template: match[2].trim() };
}

export default async () => {
  const skillsDir = path.join(repoRoot, 'skills');
  const commandDir = path.join(repoRoot, '.opencode', 'command');

  return {
    config: async (config) => {
      if (!config.command) config.command = {};
      try {
        for (const file of fs.readdirSync(commandDir).filter((f) => f.endsWith('.md'))) {
          const parsed = parseCommandFile(path.join(commandDir, file));
          if (parsed) config.command[path.basename(file, '.md')] = parsed;
        }
      } catch (e) {}

      config.skills = config.skills || {};
      config.skills.paths = config.skills.paths || [];
      if (!config.skills.paths.includes(skillsDir)) {
        config.skills.paths.push(skillsDir);
      }
    },

    'experimental.chat.system.transform': async (_input, output) => {
      output.system.push(readRules());
    },
  };
};
