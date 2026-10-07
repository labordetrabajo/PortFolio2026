"use client";

import { FormEvent, useMemo, useState } from "react";

const COMMANDS: Record<string, string[]> = {
  help: [
    "available commands:",
    "about  stack  systems  experience  contact  clear",
  ],
  about: [
    "Lucas Laborde — Software Engineer & Systems Builder",
    "Building complete software systems from interface to infrastructure.",
  ],
  stack: [
    "frontend: React, Next.js, TypeScript",
    "backend: Node.js, Express, REST APIs, Webhooks",
    "data: Prisma, SQLite, SQL Server",
    "desktop: Electron",
    "3d: Three.js",
    "infra: Linux, Nginx, PM2, Cloudflare",
  ],
  systems: [
    "selected systems:",
    "corporate platforms / ecommerce / desktop apps / kiosks / 3D experiences",
  ],
  experience: [
    "end-to-end delivery: architecture → build → deployment → production support",
  ],
  contact: [
    "contact channel ready — wire this command to your email / LinkedIn / form.",
  ],
};

type Line = { type: "cmd" | "out"; text: string };

export default function Terminal() {
  const initial = useMemo<Line[]>(
    () => [
      { type: "out", text: "> system.boot()" },
      { type: "out", text: "> initializing environment..." },
      { type: "out", text: "> mounting systems..." },
      { type: "out", text: "> status: online" },
      { type: "out", text: "> type \"help\" to inspect profile" },
    ],
    []
  );

  const [lines, setLines] = useState<Line[]>(initial);
  const [value, setValue] = useState("");

  function runCommand(e: FormEvent) {
    e.preventDefault();
    const cmd = value.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setLines([]);
      setValue("");
      return;
    }

    const output = COMMANDS[cmd] ?? [`command not found: ${cmd}`, `type \"help\"`];
    setLines((prev) => [
      ...prev,
      { type: "cmd", text: `lucas@laborde:~$ ${cmd}` },
      ...output.map((text) => ({ type: "out" as const, text })),
    ]);
    setValue("");
  }

  return (
    <div className="terminal-shell" aria-label="Interactive developer terminal">
      <div className="terminal-topbar">
        <div className="terminal-dots" aria-hidden="true">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="terminal-title">lucas@laborde.dev: ~</div>
        <div className="terminal-bars">▮▮▮</div>
      </div>

      <div className="terminal-body">
        <div className="terminal-output" aria-live="polite">
          {lines.map((line, i) => (
            <div className={line.type === "cmd" ? "terminal-command" : "terminal-line"} key={`${line.text}-${i}`}>
              {line.text}
            </div>
          ))}
        </div>

        <form className="terminal-input-row" onSubmit={runCommand}>
          <span className="prompt">lucas@laborde:~$</span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="terminal-input"
            aria-label="Terminal command"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="cursor-block" aria-hidden="true" />
        </form>
      </div>
    </div>
  );
}
