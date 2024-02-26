class Api::V1::Admin::ArticlesController < Api::V1::BaseController
  before_action :authenticate_user!

  def index
    articles = Article.all.order(created_at: :desc)
    render json: Admin::ArticleSerializer.new(articles)
  end

  def new
    # NOTE: 記事編集画面でリアルタイム編集ができるようにnewの時点で下書き記事を作成する
    draft_article = Article.find_or_create_by!(title: '', status: 'draft', body: '', user: current_user)
    render json: Admin::ArticleSerializer.new(draft_article)
  end

  def show
    article = Article.find(params[:id])
    render json: Admin::ArticleSerializer.new(article)
  end

  def update
    article = Article.find(params[:id])

    if article.update(article_params)
      render json: Admin::ArticleSerializer.new(article)
    else
      render json: article.errors, status: :unprocessable_entity
    end
  end

  private

    def article_params
      params.require(:article).permit(:title, :body, :status, :published_at)
    end
end
