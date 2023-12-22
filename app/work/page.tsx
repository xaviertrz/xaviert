import type { Metadata } from "next";
import ProjectCard from "./components/project-card";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of the products I made.",
};

const work = {
  "ECOSYSVAL - Value Chain Ecosystem": {
    desc: "Empowering Mexican businesses to thrive through strategic connections, Value Chain Ecosystem is a sector-focused platform fostering collaboration and growth.",
    link: "https://ecosistemaencadena.com/",
    items: ["Front End", "React.js", "Tailwind CSS", "Redux"],
    gradient: "from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]",
  },
  "UCL App - Results, Fixtures, Groups & Live Scores": {
    desc: "Built with fans in mind, this dynamic UCL app offers a seamless experience for following scores, tracking team progress, and staying up-to-date with the latest tournament news.",
    link: "https://xaviertrz.github.io/ucl-app/",
    items: [
      "Front End",
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "Open source",
    ],
    gradient: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]",
  },
  "Restaurants Reservetion System": {
    desc: "Ensuring data integrity and business logic, this Restaurants Reservation System incorporates comprehensive validations and restrictions within its backend, preventing errors and safeguarding essential reservation data.",
    link: "https://github.com/xaviertrz/restaurants-system/tree/main",
    items: ["Back End", "Node.js", "Express.js", "MongoDB", "Open source"],
    gradient: "from-[#D8B4FE] to-[#818CF8]",
  },
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div>
        <p className="prose prose-neutral dark:prose-invert">
          Visual appeal + problem-solving = success. Check out some of the
          projects I've worked on.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <div className="flex gap-6 flex-col">
          {Object.entries(work).map(
            ([title, { desc, link, items, gradient }]) => {
              return (
                <ProjectCard
                  key={title}
                  desc={desc}
                  title={title}
                  link={link}
                  items={items}
                  gradient={gradient}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
