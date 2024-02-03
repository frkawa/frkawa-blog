import Image from "next/image";
import ArticleCard from "./(components)/ArticleCard";
import authorIcon from "/public/author_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="col-span-7">
        <ArticleCard />
        <ArticleCard />
      </main>
      <aside className="col-span-3 bg-my-middle-blue p-6 rounded-3xl mb-8 min-w-full">
        <div className="text-center">
          <Image src={authorIcon} alt="author icon" width={100} height={100} className="mx-auto mb-3" />
          <div className="mb-1">AUTHOR: frkawa</div>
          <div className="flex gap-1 justify-center">
            <Link href="https://github.com/frkawa" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="h-4" />
            </Link>
            <Link href="https://x.com/frkawa_" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} className="h-4" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
