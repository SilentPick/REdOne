export function getToken() {
  console.log(localStorage.access_token_expires, Date.now())
  if(+localStorage.access_token_expires > Date.now()){
    return localStorage.getItem('access_token')
  }else{
    return
  }
}

export function getUserId() {
  return localStorage.getItem('userId')
}



export function saveToken(access_token, id){
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('userId', id)
  localStorage.setItem('access_token_expires', Date.now() + (1000 * 60 * 60 * 24))
}
