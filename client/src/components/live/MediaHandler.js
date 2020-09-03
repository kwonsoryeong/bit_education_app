export default class MediaHandler {
	getPermissions() {
		return new Promise((res, rej) => {
			navigator.mediaDevices.getUserMedia({video: { facingMode: 'user' }, audio: true})
				.then((stream) => {
					res(stream)
				})
				.catch(err => {
					alert(`Unable to fetch stream ${err}`)
				}) 
		})
	}
}