import axios from 'axios'

export const qnaRegister = newQna => {
  console.log("???");
  return axios
    .post('http://localhost:3004/qnas/qnaRegister', {
      bangCode: newQna.bangCode,
      title: newQna.title,
      contents: newQna.contents
    })
    .then(response => {
      console.log('Registered')
    })
    .catch(err => {
        console.log(err)
      })
}
