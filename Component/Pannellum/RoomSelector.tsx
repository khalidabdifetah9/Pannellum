"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { Room } from "../../lib/rooms";

interface RoomSelectorProps {
  rooms: Room[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function RoomSelector({ rooms, activeId, onSelect }: RoomSelectorProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(rooms.map((r) => r.category)))],
    [rooms]
  );
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? rooms : rooms.filter((r) => r.category === filter);

  return (
    <div className="rounded-2xl bg-white p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              filter === c
                ? "bg-[#243D35] text-white"
                : "bg-[#F7F6F2] text-[#243D35]/70 hover:text-[#243D35]"
            }`}
          >
            {c === "All" ? "Show All" : c}
          </button>
        ))}
      </div>

      <ul className="flex snap-x gap-3 overflow-x-auto p-1 pb-3">
        {visible.map((room) => {
          const active = room.id === activeId;
          return (
            <li key={room.id} className="shrink-0 snap-start">
              <button
                type="button"
                onClick={() => onSelect(room.id)}
                aria-pressed={active}
                className={`group relative block h-24 w-40 overflow-hidden rounded-xl transition sm:h-28 sm:w-48 ${
                  active
                    ? "ring-2 ring-[#243D35] ring-offset-2"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={room.thumb}
                  alt=""
                  fill
                  sizes="192px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent"
                />
                <span className="absolute inset-x-0 bottom-0 p-3 text-left text-xs font-medium text-white sm:text-sm">
                  {room.name}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}