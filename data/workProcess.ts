import type { WorkStep } from "@/types";

export const WORK_STEPS: WorkStep[] = [
  {
    id: "discovery",
    title: "Discovery",
    offset: 0,
    dates: ["09/06/2026", "20/06/2026"],
    tasks: [
      "Client consultation",
      "Business analysis",
      "Project objectives",
      "Brand review",
      "Content audit",
      "Scope definition",
    ],
  },
  {
    id: "planning",
    title: "Planning",
    offset: 48,
    dates: ["03/07/2026", "12/07/2026"],
    tasks: [
      "Wireframing",
      "Content strategy",
      "Technology stack",
      "Resource allocation",
    ],
  },
  {
    id: "design",
    title: "Design",
    offset: 96,
    dates: ["29/07/2026", "14/08/2026"],
    tasks: ["UI design", "Creative direction", "Responsive design"],
  },
  {
    id: "development",
    title: "Development",
    offset: 144,
    dates: ["01/09/2026", "16/09/2026"],
    tasks: ["Project setup", "Scope definition"],
  },
  {
    id: "launch",
    title: "Launch",
    offset: 192,
    dates: ["17/09/2026", "18/09/2026"],
    tasks: [
      "Quality assurance",
      "Client handover",
      "Deployment",
      "Speed optimization",
    ],
  },
];
