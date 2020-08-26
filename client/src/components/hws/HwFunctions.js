import axios from 'axios'

export const hwRegister = newHw => {
  console.log("???");
  return axios
    .post('http://localhost:3004/homeworks/homeworkRegister', {
      bangCode: newHw.bangCode,
      title: newHw.title,
      contents: newHw.contents
    })
    .then(response => {
      console.log('Registered')
    })
    .catch(err => {
        console.log(err)
      })
}
