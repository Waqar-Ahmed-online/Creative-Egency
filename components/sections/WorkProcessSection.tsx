import { WORK_STEPS } from "@/data/workProcess";

export default function WorkProcessSection() {
  return (
    <section className="bg-[#ececec] py-20 text-black sm:py-28">
      {/* Heading */}
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-black/70">
          <span className="h-1.5 w-1.5 bg-black" />
          Our Work Process
        </span>
        <h2 className="mt-4 text-3xl font-black uppercase leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          Our Step-by-Step Process
          <br />
          To Build Success
        </h2>
      </div>

      {/* Timeline */}
      <div className="mx-auto mt-20 max-w-7xl overflow-x-auto px-4 sm:px-6">
        <div className="grid min-w-[900px] grid-cols-5 gap-6">
          {WORK_STEPS.map((step) => (
            <div
              key={step.id}
              className="flex flex-col"
              style={{ marginTop: `${step.offset}px` }}
            >
              {/* Label box */}
              <div className="w-fit rounded-md bg-white px-5 py-4 shadow-sm">
                <span className="text-sm font-bold uppercase tracking-wide">
                  {step.title}
                </span>
              </div>

              {/* One continuous dashed line — dates + tasks together */}
              <div className="ml-1 mt-2 border-l border-dashed border-black/30 pl-4">
                <div className="flex gap-8 py-4">
                  {step.dates.map((date) => (
                    <span
                      key={date}
                      className="text-xs font-medium text-black/50 sm:text-sm"
                    >
                      {date}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 pb-4">
                  {step.tasks.map((task) => (
                    <li key={task} className="flex items-center gap-2">
                      <span className="h-3 w-3 shrink-0 rounded-full border border-black/30" />
                      <span className="text-xs font-semibold uppercase tracking-wide text-black/80 sm:text-sm">
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
