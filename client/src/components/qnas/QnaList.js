import React, { Component } from 'react';
import BoardForm from './Qna_BoardForm';
import BoardItem from './Qna_BoardItem';
import axios from 'axios'
/*
    component files.
*/
class qnaList extends Component {
    state = {
        maxNo: 3,
        boards: [
        ],
         selectedBoard:{}
    }
    componentDidMount() {
        try {
            axios.post('http://localhost:3004/qnas/selectQna/'+this.props.code)
                .then(res => {
                    res.data.forEach(post => {
                        this.setState({
                            boards: this.state.boards.concat({...post })
                        });
                    });
                })
        }
        catch (e) {
            console.log(`error : `+e);
        }
        
        
      }
    handleSaveData = (data) => {
        //if (!data.idx) {            // new : Insert
            this.setState({
                maxNo: this.state.maxNo+1,
                boards: this.state.boards.concat({idx: data.idx, ...data }),
                selectedBoard: {}
            });
        /*} else {                                                 // Update
            this.setState({
                boards: this.state.boards.map(row => data.idx === row.idx ? {...data }: row),
                selectedBoard: {}
            })           
        }*/ 

    }
    
    handleRemove = (idx) => {
        this.setState({
            boards: this.state.boards.filter(row => row.idx !== idx)
        })

        axios.post('http://localhost:3004/qnas/deleteQna',{idx:idx})
                .then(res => {
                    res.data.forEach(post => {
                        this.setState({
                            boards: this.state.boards.concat({ ...post })
                        });
                    });
                })
    }
    
    handleSelectRow = (row) => {
        this.setState({selectedBoard:row});
    }

    componentDidUpdate(){
    }
    
    render() {
        const { boards, selectedBoard } = this.state;

        return (
            <div>
                <BoardForm selectedBoard={selectedBoard} onSaveData={this.handleSaveData} code={this.props.code}/>
                    
                    {
                        boards.map(row =>
                            (<BoardItem key={row.idx} row={row} onLoadComments={this.loadComments} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                        )
                    }
            </div>
        );
    }
}

export default qnaList;