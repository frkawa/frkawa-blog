return if Admin::User.count.positive?

Admin::User.create!(
  email: 'test@example.com',
  password: 'password',
  password_confirmation: 'password',
)
