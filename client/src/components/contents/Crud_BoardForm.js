import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { postRegister } from './CrudFunctions'
import {InputPost} from '../BoardStyles';

class crud_BoardForm extends Component {
    
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

        postRegister(data).then(res => {
            //this.props.history.push(`/list/notice/${data.bangCode}`);
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

export default withRouter(crud_BoardForm);