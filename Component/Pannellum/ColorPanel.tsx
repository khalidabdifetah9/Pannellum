"use client";

import { palette } from "../../lib/colors";

interface ColorPanelProps {
  color: string | null;
  strength: number; // 0..1
  disabled?: boolean;
  onColorChange: (color: string | null) => void;
  onStrengthChange: (strength: number) => void;
}

export default function ColorPanel({
  color,
  strength,
  disabled = false,
  onColorChange,
  onStrengthChange,
}: ColorPanelProps) {
  const selectedName = color
    ? palette.find((p) => p.hex.toLowerCase() === color.toLowerCase())?.name ?? "Custom"
    : "Original";

  return (
    <aside className="h-fit rounded-2xl bg-white p-5 sm:p-6 xl:sticky xl:top-8">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">Wall color</h2>
        <span className="font-mono text-xs uppercase tracking-wide text-[#243D35]/50">
          {selectedName}
        </span>
      </div>

      {disabled && (
        <p className="mt-3 rounded-lg bg-[#F7F6F2] px-4 py-3 text-sm text-[#243D35]/70">
          Color preview isn&apos;t available for this room yet.
        </p>
      )}

      <fieldset disabled={disabled} className="mt-5 space-y-6 disabled:opacity-50">
        <legend className="sr-only">Choose a wall color</legend>

        {/* Original */}
        <button
          type="button"
          onClick={() => onColorChange(null)}
          aria-pressed={color === null}
          className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
            color === null
              ? "border-[#243D35] bg-[#F7F6F2]"
              : "border-[#243D35]/15 hover:border-[#243D35]/40"
          }`}
        >
          <span
            className={`flex h-4 w-4 items-center justify-center rounded-full border ${
              color === null ? "border-[#243D35]" : "border-[#243D35]/40"
            }`}
          >
            {color === null && <span className="h-2 w-2 rounded-full bg-[#243D35]" />}
          </span>
          Original (no color)
        </button>

        {/* Swatches */}
        <div className="grid grid-cols-4 gap-3">
          {palette.map((p) => {
            const active = color?.toLowerCase() === p.hex.toLowerCase();
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => onColorChange(p.hex)}
                aria-label={p.name}
                aria-pressed={active}
                title={p.name}
                style={{ backgroundColor: p.hex }}
                className={`relative aspect-square rounded-lg transition-transform hover:scale-105 ${
                  active ? "ring-2 ring-[#243D35] ring-offset-2" : "ring-1 ring-black/10"
                }`}
              >
                {active && (
                  <svg
                    className="absolute inset-0 m-auto mix-blend-difference"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8.5l3.5 3.5L13 4.5" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>

        {/* Custom */}
        <label className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-[#243D35]/15 px-4 py-3 text-sm transition-colors hover:border-[#243D35]/40">
          <span>Pick custom color</span>
          <input
            type="color"
            value={color ?? "#a8b5a0"}
            onChange={(e) => onColorChange(e.target.value)}
            aria-label="Custom color"
            className="h-8 w-12 cursor-pointer rounded border-0 bg-transparent p-0"
          />
        </label>

        {/* Strength */}
        <div>
          <div className="mb-3 flex items-center justify-between text-sm">
            <label htmlFor="strength" className="font-medium">
              Color strength
            </label>
            <span className="font-mono text-[#243D35]/70">
              {Math.round(strength * 100)}%
            </span>
          </div>
          <input
            id="strength"
            type="range"
            min={10}
            max={100}
            step={1}
            value={Math.round(strength * 100)}
            onChange={(e) => onStrengthChange(Number(e.target.value) / 100)}
            className="w-full accent-[#243D35]"
          />
        </div>
      </fieldset>
    </aside>
  );
}