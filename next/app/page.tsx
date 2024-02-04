import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ArticleCard from "./(components)/ArticleCard";
import TagCards from "./(components)/TagCards";
import authorIcon from "/public/author_icon.png";

export default function Home() {
  return (
    <>
      <main className="col-span-7">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </main>
      <aside className="col-span-3 bg-my-dark-blue p-6 rounded-3xl mb-8 min-w-full">
        <section className="text-center">
          <Image src={authorIcon} alt="author icon" width={100} height={100} className="mx-auto mb-3" />
          <div className="mb-1">AUTHOR: frkawa</div>
          <div className="flex gap-1 justify-center mb-8">
            <Link href="https://github.com/frkawa" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="h-4" />
            </Link>
            <Link href="https://x.com/frkawa_" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} className="h-4" />
            </Link>
          </div>
        </section>
        <h2 className="text-xl font-bold mb-2">ARCHIVES</h2>
        <ul className="list-disc pl-4">
          <li>2024年1月</li>
          <li>2023月12月</li>
          <li>2023年11月</li>
        </ul>
        <h2 className="text-xl font-bold mb-2 mt-7">TAGS</h2>
        <TagCards />
      </aside>
    </>
  );
}
