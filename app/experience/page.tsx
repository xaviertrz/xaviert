import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "A summary of my professional experience as a full-stack developer.",
};

const experience = {
  "Observatorio Mexicano de la Crisis": {
    position: "Front End Developer",
    description:
      "Observatorio Mexicano de la Crisis (OMEC), is a reference center that rigorously gathers, processes, and assesses information about critical processes in Mexico and around the world. During my time at OMEC, I gained my first production experience  with React, building a product that links companies across Mexico.",
    date: "2023",
  },
};

export default function ExperiencePage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        my experience
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Here is a overview of the diverse experiences and achievements I have
          garnered over the course of my career so far.
        </p>
        {Object.entries(experience).map(
          ([company, { position, description, date }]) => {
            return (
              <div key={company}>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">
                  {company}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {position}, {date}
                </p>
                <p>{description}</p>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
