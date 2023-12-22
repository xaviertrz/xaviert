export default async function NotFoundPage() {
  return (
    <section>
      <h1 className="text-2xl mb-8 font-medium tracking-tighter">
        error 404: page not found
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        what are you looking for? 🤨
      </p>
    </section>
  );
}
