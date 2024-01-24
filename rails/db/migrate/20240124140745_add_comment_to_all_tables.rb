class AddCommentToAllTables < ActiveRecord::Migration[7.1]
  def change
    change_table_comment :admin_users, '管理者ユーザー'
    change_column_comment :admin_users, :provider, '認証プロバイダー'
    change_column_comment :admin_users, :uid, 'UID'
    change_column_comment :admin_users, :encrypted_password, '暗号化されたパスワード'
    change_column_comment :admin_users, :email, 'メールアドレス'
    change_column_comment :admin_users, :tokens, 'トークン'

    change_table_comment :articles, '記事'
    change_column_comment :articles, :admin_user_id, '管理者ユーザーID'
    change_column_comment :articles, :title, 'タイトル'
    change_column_comment :articles, :body, '本文'
    change_column_comment :articles, :status, 'ステータス'
    change_column_comment :articles, :published_at, '公開日時'
  end
end
