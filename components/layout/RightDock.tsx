import { DOCK_ICONS } from "@/data/navigation";

export default function RightDock() {
  return (
    <div className="fixed right-2 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 sm:right-4 sm:gap-3">
      {DOCK_ICONS.map((Icon, i) => (
        <button
          key={i}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md shadow-black/10 transition-colors hover:bg-black hover:text-white sm:h-11 sm:w-11"
        >
          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </button>
      ))}
    </div>
  );
}
