import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { qnaRegister } from './QnaFunctions';
import {InputPost} from '../BoardStyles';
import axios from 'axios';


class qna_BoardForm extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        let selectedBoard = nextProps.selectedBoard;
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
        
        data.bangCode=this.props.code;
        
        axios.post('http://localhost:3004/qnas/qnaRegister', {
          bangCode: data.bangCode,
          title: data.title,
          contents: data.contents
        }).then(res => {
            data.idx = res.data.idx;
            
            this.props.onSaveData(data, true);
            //this.props.history.push(`/list/question/${data.bangCode}`);
        })
    }
    constructor(props){
        super(props);
        this.in_title = null;
        this.in_contents = null;
        this.inputTitle = com => {
            this.in_title = com;
        };
        this.inputContents = com => {
            this.in_contents = com;
        };
    }
    render() {
        return (
            <InputPost handleSubmit={this.handleSubmit} inputTitle={this.inputTitle} inputContents={this.inputContents} />
            
        );
    }
}

export default withRouter(qna_BoardForm);