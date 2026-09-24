interface BillingToggleProps {
  isBusiness: boolean;
  onToggle: () => void;
}

export default function BillingToggle({ isBusiness, onToggle }: BillingToggleProps) {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <span
        className={`text-sm font-medium ${!isBusiness ? "text-black" : "text-black/50"}`}
      >
        Personal
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={isBusiness}
        onClick={onToggle}
        className="relative h-8 w-14 shrink-0 rounded-full bg-black transition-colors"
      >
        <span
          className={`absolute top-1 h-6 w-6 rounded-full bg-white transition-all ${
            isBusiness ? "left-7" : "left-1"
          }`}
        />
      </button>
      <span
        className={`text-sm font-medium ${isBusiness ? "text-black" : "text-black/50"}`}
      >
        Business
      </span>
    </div>
  );
}
