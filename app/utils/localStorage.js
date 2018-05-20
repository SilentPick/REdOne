export function getToken() {
  return localStorage.getItem('access_token')
}

export function saveToken(access_token){
  localStorage.setItem('access_token', access_token)
}
