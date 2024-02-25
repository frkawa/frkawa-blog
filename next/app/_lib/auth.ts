import { SessionItems, SignInFormData } from '@/types'

export const signIn = async (formData: SignInFormData): Promise<void> => {
  const headers = { 'Content-Type': 'application/json' }
  const res = await fetch('http://localhost:3000/api/v1/auth/sign_in', {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(formData),
    credentials: 'include',
  })

  if (res.status === 401) {
    throw new Error('Invalid email or password.')
  } else if (!res.ok) {
    throw new Error('Failed to sign in.')
  }
}

export const signOut = async (token: string): Promise<void> => {
  const parsedToken = JSON.parse(token) as SessionItems
  const headers = {
    uid: parsedToken.uid,
    'access-token': parsedToken.accessToken,
    client: parsedToken.client,
  }

  const res = await fetch('http://localhost:3000/api/v1/auth/sign_out', {
    headers: headers,
    method: 'DELETE',
  })

  if (!res.ok) {
    throw new Error('Failed to sign out.')
  }
}
