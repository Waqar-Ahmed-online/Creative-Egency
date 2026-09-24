export default function BracketBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-flex items-center px-4 py-2.5 sm:px-6 sm:py-3">
      <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t-2 border-black sm:h-3 sm:w-3" />
      <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r-2 border-t-2 border-black sm:h-3 sm:w-3" />
      <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b-2 border-l-2 border-black sm:h-3 sm:w-3" />
      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-black sm:h-3 sm:w-3" />
      {children}
    </div>
  );
}
