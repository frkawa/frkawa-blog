class AddUrlToArticles < ActiveRecord::Migration[7.1]
  def change
    add_column :articles, :url, :string, after: :admin_user_id, null: false, default: '', comment: 'URL'
    set_url_from_id
    add_index :articles, :url, unique: true
    change_column_default :articles, :url, nil
  end

  def set_url_from_id
    return unless Article.exists?

    Article.update_all('url = id')
  end
end
