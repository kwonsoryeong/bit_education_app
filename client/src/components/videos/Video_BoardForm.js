import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { videoRegister } from './VideoFunctions'

class video_BoardForm extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        let selectedBoard = nextProps.selectedBoard;
        console.log(selectedBoard);
        if (!selectedBoard.idx) {
            this.in_title.value = "";
            this.in_contents.value = "";        
            return true;
        }
        
        this.in_title.value = selectedBoard.title;
        this.in_contents.value = selectedBoard.contents;        
        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let selectedBoard = this.props.selectedBoard;
        let data = {
            title: this.in_title.value,
            contents: this.in_contents.value
        }
        if (selectedBoard.idx) {
            data.idx = selectedBoard.idx
        }  
        data.bangCode=this.props.code;
        this.props.onSaveData(data);

        videoRegister(data).then(res => {
            this.props.history.push(`/list/video/${data.bangCode}`);
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="title" ref={node => this.in_title = node}/>
                <input placeholder="contents" ref={node => this.in_contents = node}/>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default withRouter(video_BoardForm);