export function getToken() {
  return localStorage.getItem('access_token')
}

export function getUserId() {
  return localStorage.getItem('userId')
}

export function saveToken(access_token, id){
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('userId', id)
}
