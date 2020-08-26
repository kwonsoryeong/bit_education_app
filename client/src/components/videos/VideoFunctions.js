import axios from 'axios'

export const videoRegister = newVideo => {
  console.log("???");
  return axios
    .post('http://localhost:3004/videos/videoRegister', {
      bangCode: newVideo.bangCode,
      title: newVideo.title,
      contents: newVideo.contents
    })
    .then(response => {
      console.log('Registered')
    })
    .catch(err => {
        console.log(err)
      })
}
