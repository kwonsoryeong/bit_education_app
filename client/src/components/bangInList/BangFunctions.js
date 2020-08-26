import axios from 'axios'

export const createBang = newBang => {
  return axios
    .post('http://localhost:3004/bangs/createBang', {
      title: newBang.title, adminId: newBang.adminId
    })
    .then(response => {
      console.log('Registered')
      return response.data
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