const AUTH_KEY = 'campusconnect_auth'

export function saveAuth(user) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user))
}

export function getAuth() {
  const raw = localStorage.getItem(AUTH_KEY)
  return raw ? JSON.parse(raw) : null
}

export function clearAuth() {
  localStorage.removeItem(AUTH_KEY)
}

export function logout() {
  clearAuth()
}

export function isLoggedIn() {
  return getAuth() !== null
}
