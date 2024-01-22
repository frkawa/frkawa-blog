class AddIndexToEmailOnAdminUser < ActiveRecord::Migration[7.1]
  def change
    change_column_null :admin_users, :email, false
    add_index :admin_users, :email, unique: true
  end
end
