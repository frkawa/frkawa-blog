user = Admin::User.first

user.articles.create!(
  [
    {
      title: '公開済み記事タイトル1',
      body: '公開済み記事本文1',
      status: Article.status.published,
      published_at: Time.current,
    },
    {
      title: '下書き記事タイトル2',
      body: '下書き記事本文2',
      status: Article.status.draft,
      published_at: Time.current,
    },
    {
      title: 'アーカイブ記事タイトル3',
      body: 'アーカイブ記事本文3',
      status: Article.status.archived,
      published_at: Time.current,
    },
  ],
)
