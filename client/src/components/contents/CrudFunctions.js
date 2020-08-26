import axios from 'axios'

export const postRegister = newPost => {
  console.log("???");
  return axios
    .post('http://localhost:3004/bulletins/postRegister', {
      bangCode: newPost.bangCode,
      title: newPost.title,
      contents: newPost.contents
    })
    .then(response => {
      console.log('Registered')
    })
}
