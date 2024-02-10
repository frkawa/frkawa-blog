import ArticleCard from './(components)/ArticleCard'
import SideBar from './(components)/SideBar'

export default function Home() {
  return (
    <>
      <main className='col-span-7 mr-5'>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </main>
      <SideBar />
    </>
  )
}
