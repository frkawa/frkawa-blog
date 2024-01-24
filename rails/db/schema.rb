# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_01_24_140745) do
  create_table "admin_users", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", comment: "管理者ユーザー", force: :cascade do |t|
    t.string "provider", default: "email", null: false, comment: "認証プロバイダー"
    t.string "uid", default: "", null: false, comment: "UID"
    t.string "encrypted_password", default: "", null: false, comment: "暗号化されたパスワード"
    t.string "email", null: false, comment: "メールアドレス"
    t.text "tokens", comment: "トークン"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
  end

  create_table "articles", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", comment: "記事", force: :cascade do |t|
    t.bigint "admin_user_id", comment: "管理者ユーザーID"
    t.string "title", null: false, comment: "タイトル"
    t.text "body", null: false, comment: "本文"
    t.string "status", null: false, comment: "ステータス"
    t.datetime "published_at", comment: "公開日時"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["admin_user_id"], name: "index_articles_on_admin_user_id"
  end

  add_foreign_key "articles", "admin_users"
end
