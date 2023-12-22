import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description: "A summary of my education historial.",
};

const education = {
  "Systems Engineering": {
    institution: "Universidad de Investigación y Desarrollo",
    date: "2019 — 2024",
  },
};

export default function EducationPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        my education
      </h1>

      {Object.entries(education).map(([title, { institution, date }]) => {
        return (
          <div key={title} className="w-full flex flex-col">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              {`${institution}`}
            </p>

            <p className="text-neutral-600 dark:text-neutral-400">{`${date}`}</p>
          </div>
        );
      })}
    </section>
  );
}
