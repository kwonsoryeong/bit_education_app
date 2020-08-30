import React, { Component } from 'react';
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import BoardItem from './QnaComment_BoardItem';

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

    render() {


        return(
            <tr>
                    <td><a onClick={this.handleSelectRow}>{this.props.row.title}</a></td>
                    <td>{this.props.row.contents}</td>
               
                    <td><button onClick={this.handleRemove}>X</button></td>
                    <td>
                        <p>
                        {
                            this.state.comments.map(row =>
                                (<BoardItem idx={row.idx} row={row} onRemove={this.handleCommentRemove}/>)
                            )
                        }
                        </p>
                        <p>
                        <form onSubmit={this.handleSubmit}>
                            <input placeholder="comment" ref={node => this.in_comment = node} />
                            <button type="submit">Save</button>
                        </form>
                        </p>
                    </td>
                    
            </tr>
                
            
        );
    }
}

export default BoardRow;