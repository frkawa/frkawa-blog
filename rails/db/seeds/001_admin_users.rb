return if Admin::User.count.positive?

Admin::User.create!(
  email: 'test1@example.com',
  password: 'password',
  password_confirmation: 'password',
)
