import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import VideoItem from './VideoItem';
import MediaHandler from './MediaHandler';

import './style.css'

class Video extends Component {

	// state 설정
	constructor(){
	    super()
	    
	    this.state = {
	      // 미디어 권한 여부
	      hasMedia: false,
	      btnAllow : "Allow cam/mic",
	      allowState: false,
	      otherUserId: null
	    }
	    this.mediaHandler = new MediaHandler()
  	}
	// 페이지 로딩이 될때 
	// 참고 - React LifeCycle 부분 확인
	componentWillMount() {
		// 미디어 권한 확인 후 영상 재생
	}
	
	// 버튼을 클릭해서 권한 부여 및 캠 확인
	getPermissions() {
		// Cam/Mic 권한 부여
		if (!this.state.allowState) {
			this.mediaHandler.getPermissions()
				.then((stream) => {
					// childNode로 보낼 _myVideo라는 ref 객체 생성
					this._myVideo = React.createRef()
					// state를 변경하고
					this.setState({
						hasMedia: true,
						allowState: true,
						btnAllow: "Let's join to chat"
					})
					// _myVideo 속성 값들을 설정한다.
					try{
						this._myVideo.current.srcObject = stream
					}
					catch (e){
						this._myVideo.current.src = URL.createObjectURL(stream)
					}
					this._myVideo.current.play()
				})
				.catch(err => {
					this.setState({
						hasMedia: false,
						allowState: true,
						btnAllow: "Join without cam/mic"
					})
					alert(`Cannot find cam/mic`)
				}) 	
		}
		// Join to chat
		else{
			alert(`채팅방 입장시 구현`)
		}
		
		
	}
  	render() {
    	return (
      		<div className="HomePage">
      			<p className="title">화상 채팅</p>
      			{/* VideoItem 컴포넌트에 props로 ref 객체를 넘긴다. */}
			  	<VideoItem video={this._myVideo}/>	
			  	<button bsStyle="info" onClick={() => this.getPermissions()}>
					{this.state.btnAllow}
				</button>
      		</div>
    	);
  	}
}

export default Video;
