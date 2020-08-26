import axios from 'axios'

export const register = newUser => {
  console.log("???");
  return axios
    .post('http://localhost:3004/users/register', {
      id: newUser.id,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('http://localhost:3004/users/login', {
      id: user.id,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}