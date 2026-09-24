export default function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="mt-14 flex flex-wrap items-center justify-between gap-6 sm:mt-20">
      {tags.map((tag) => (
        <span key={tag} className="text-sm font-medium text-black/60 sm:text-base">
          [ {tag} ]
        </span>
      ))}
    </div>
  );
}
