class CreateArticles < ActiveRecord::Migration[7.1]
  def change
    create_table :articles do |t|
      t.references :admin_user, foreign_key: true
      t.string :title, null: false
      t.text :body, null: false
      t.string :status, null: false
      t.datetime :published_at

      t.timestamps
    end
  end
end
