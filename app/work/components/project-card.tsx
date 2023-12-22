function Badge(props: any) {
  return (
    <div
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

export default function ProjectCard({
  desc,
  title,
  link,
  items,
  gradient,
}: {
  desc: string;
  title: string;
  link: string;
  items: string[];
  gradient: string;
}) {
  console.log(items);

  return (
    <a
      href={link}
      target="_blank"
      className={`transform hover:scale-[1.01] transition-all rounded-xl w-full bg-gradient-to-r p-1 ${gradient}`}
    >
      <div className="flex flex-col justify-between h-full dark:bg-[#111010] rounded-lg p-4">
        <div className="flex flex-col justify-between">
          <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-5 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
          <p className="prose prose-neutral dark:prose-invert mb-8">{desc}</p>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 w-full text-gray-800 dark:text-gray-200 capsize">
          {items?.map((item) => {
            return (
              <Badge key={item} href={link}>
                {item}
              </Badge>
            );
          })}
        </div>
      </div>
    </a>
  );
}
