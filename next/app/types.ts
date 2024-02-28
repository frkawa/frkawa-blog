export type Article = {
  id: string
  url: string
  title: string
  body: string
  status: string
  published_at: string
  updated_at: string
}

export type SignInFormData = {
  email: string
  password: string
}

export type SessionItems = {
  uid: string
  accessToken: string
  client: string
}

export type ArticleFormData = {
  url: string
  title: string
  body: string
  status: string
}
