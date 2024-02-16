import { SessionItems, SignInFormData } from '@/types'

export const signIn = async (
  formData: SignInFormData,
): Promise<SessionItems> => {
  const headers = { 'Content-Type': 'application/json' }
  const res = await fetch('http://localhost:3000/api/v1/auth/sign_in', {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(formData),
  })

  if (res.status === 401) {
    throw new Error('Invalid email or password.')
  } else if (!res.ok) {
    throw new Error('Failed to sign in.')
  }

  const uid = res.headers.get('uid') || ''
  const accessToken = res.headers.get('access-token') || ''
  const client = res.headers.get('client') || ''

  return { uid, accessToken, client }
}
