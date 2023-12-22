import Image from "next/image";
import { ArrowIcon } from "./components/icons";
import { name, avatar, about, bio } from "./info";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section>
      <h1 className="text-2xl mb-8 font-medium tracking-tighter">hey 👋</h1>

      <div className="flex flex-col-reverse md:flex-row justify-between gap-10 prose prose-neutral dark:prose-invert">
        <div className="flex flex-col p-0 items-start ">
          <p className="-mt-5">{about()}</p>
          <p>{bio()}</p>
        </div>
        <div className="flex flex-shrink-0 items-start">
          <Image
            alt={name}
            className="rounded-full hover:grayscale h-auto grayscale-0 transition-all duration-500"
            src={avatar}
            placeholder="blur"
            height={115}
            width={115}
            priority
          />
        </div>
      </div>

      <ul className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/xavier-tarazona-a52489216/"
          >
            <ArrowIcon />
            <p className="h-7">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/xaviertrz"
          >
            <ArrowIcon />
            <p className="h-7">github</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
