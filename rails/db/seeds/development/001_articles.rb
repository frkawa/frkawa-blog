user = Admin::User.first

user.articles.create!(
  [
    {
      url: 'article-1',
      title: '公開済み記事タイトル1',
      body: '公開済み記事本文1',
      status: Article.status.published,
    },
    {
      url: 'article-2',
      title: '下書き記事タイトル2',
      body: '下書き記事本文2',
      status: Article.status.draft,
    },
    {
      url: 'article-3',
      title: 'アーカイブ記事タイトル3',
      body: 'アーカイブ記事本文3',
      status: Article.status.archived,
    },
  ],
)
