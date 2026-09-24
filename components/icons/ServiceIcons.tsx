import type { ServiceIconKey } from "@/types";

function BowtieIcon({ className = "h-7 w-7" }: { className?: string }) {
  // 4 "leaf" shapes in a 2x2 grid: one sharp outer corner each, 3 rounded corners
  return (
    <svg viewBox="0 0 60 60" fill="#1d1d1d" className={className}>
      <path d="M0 0H15A14 14 0 0 1 29 14V15A14 14 0 0 1 15 29H14A14 14 0 0 1 0 15Z" />
      <path d="M60 0V15A14 14 0 0 1 46 29H45A14 14 0 0 1 31 15V14A14 14 0 0 1 45 0Z" />
      <path d="M0 60V46A14 14 0 0 1 14 31H15A14 14 0 0 1 29 45V46A14 14 0 0 1 15 60Z" />
      <path d="M60 60H46A14 14 0 0 1 31 46V45A14 14 0 0 1 45 31H46A14 14 0 0 1 60 45Z" />
    </svg>
  );
}
function DotClusterIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="black" className={className}>
      <circle cx="12" cy="4.5" r="2.2" />
      <circle cx="5" cy="12" r="2.2" />
      <circle cx="19" cy="12" r="2.2" />
      <circle cx="9" cy="19.5" r="1.7" />
      <circle cx="16" cy="19.5" r="1.7" />
    </svg>
  );
}
function SparkleIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="black" className={className}>
      <path d="M12 2c0 5.523 4.477 10 10 10-5.523 0-10 4.477-10 10 0-5.523-4.477-10-10-10 5.523 0 10-4.477 10-10z" />
    </svg>
  );
}
function CheckerIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="2" width="9" height="9" fill="black" />
      <rect x="13" y="13" width="9" height="9" fill="black" />
      <rect
        x="13"
        y="2"
        width="9"
        height="9"
        stroke="black"
        strokeWidth="1.5"
      />
      <rect
        x="2"
        y="13"
        width="9"
        height="9"
        stroke="black"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function BurstIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="black" className={className}>
      <path d="M12 0c0 4.5 1 6.5 3 8.5S19.5 11 24 12c-4.5 0-6.5 1-8.5 3S12 19.5 12 24c0-4.5-1-6.5-3-8.5S4.5 13 0 12c4.5 0 6.5-1 8.5-3S12 4.5 12 0z" />
    </svg>
  );
}
export function CubeGraphic({ className = "h-24 w-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z" fill="#E9E9E9" />
      <path d="M50 5L90 27.5L50 50L10 27.5L50 5Z" fill="#F6F6F6" />
      <path d="M50 50L90 27.5V72.5L50 95V50Z" fill="#DADADA" />
      <path d="M50 50L10 27.5V72.5L50 95V50Z" fill="#CFCFCF" />
    </svg>
  );
}

const SERVICE_ICONS: Record<
  ServiceIconKey,
  (props: { className?: string }) => React.JSX.Element
> = {
  bowtie: BowtieIcon,
  dotCluster: DotClusterIcon,
  sparkle: SparkleIcon,
  checker: CheckerIcon,
  burst: BurstIcon,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconKey;
  className?: string;
}) {
  const Icon = SERVICE_ICONS[name];
  return <Icon className={className} />;
}
