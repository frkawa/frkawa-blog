import ArticleCard from "./(components)/ArticleCard";

export default function Home() {
  return (
    <>
      <main className="col-span-7">
        <ArticleCard />
        <ArticleCard />
      </main>
      <aside className="col-span-3 bg-white min-w-full">
        aaa
      </aside>
    </>
  );
}
