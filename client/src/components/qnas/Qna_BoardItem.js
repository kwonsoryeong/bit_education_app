import React, { Component } from 'react';
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import BoardItem from './QnaComment_BoardItem';
import {BoardWithComments} from '../BoardStyles';

import Grid from '@material-ui/core/Grid';

class BoardRow extends Component {
    state = {
        comments: [
        ]
    }
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.idx);
    }    
    handleCommentRemove = (idx) => {

        this.setState({
            comments: this.state.comments.filter(row => row.idx !== idx)
        })

        axios.post('http://localhost:3004/qnas/deleteQnaComment',{idx:idx})
                .then(res => {
                    res.data.forEach(comment => {
                        this.setState({
                            comments: this.state.comments.concat({ ...comment })
                        });
                    });
                })
    }

    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }    
    handleSaveData = (data) => {
        if (!data.idx) {            // new : Insert
            this.setState({
                comments: this.state.comments.concat({idx: data.idx, qnaidx: this.props.row.idx ,...data }),
            });
        } else {                                                        // Update
            this.setState({
                comments: this.state.comments.map(row => data.idx === row.idx ? {...data }: row),
            })            
        }

    }
    handleSubmit = (e) => {
        const { row } = this.props;
        e.preventDefault();
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        let data = {
            qnaidx: this.props.row.idx,
            id : decoded.id,
            comment: this.in_comment.value
        }
        
            
        axios.post('http://localhost:3004/qnas/registerQnaComment', 
        {qnaidx : this.props.row.idx , id : decoded.id , comment: data.comment}
        )
            .then(res => {
                this.setState({
                    comments: this.state.comments.concat({idx: res.data.idx, /*brddate: new Date(),*/ ...res.data })
                });
            })
        this.in_comment.value = "";
    }
    componentDidMount() {
        try {
            
            const { row, onSelectRow } = this.props;
            axios.post('http://localhost:3004/qnas/selectQnaComment', {qnaId : this.props.row.idx})
                .then(res => {
                    res.data.forEach(comment => {
                        this.setState({
                            comments: this.state.comments.concat({...comment })
                        });
                    });
                })
        }
        catch (e) {
            console.log(`error : `+e);
        }
     }
    constructor(props){
        super(props);
        this.in_comment = null;
        this.inputComment = com => {
            this.in_comment = com;
        };
    }

    render() {
        return(
            <div>
                <form noValidate autoComplete="off">
                <BoardWithComments title={this.props.row.title} contents={this.props.row.contents} 
                handleSelectRow={this.handleSelectRow} handleRemove={this.handleRemove}
                comments={this.state.comments} handleCommentRemove={this.handleCommentRemove} 
                handleSubmit={this.handleSubmit} inputComment={this.inputComment}
                />
                </form>
                <br></br><br></br>
            </div>
                
            
        );
    }
}

export default BoardRow;