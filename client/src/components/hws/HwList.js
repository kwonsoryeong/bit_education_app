import React, { Component } from 'react';
import BoardForm from './Hw_BoardForm';
import BoardItem from './Hw_BoardItem';
import axios from 'axios'
/*
    component files.
*/
class hwList extends Component {
    state = {
        maxNo: 3,
        boards: [
        ],
         selectedBoard:{}
    }
    componentDidMount() {
        try {
            console.log( this.props.code );
            axios.post('http://localhost:3004/homeworks/selectHomework/'+this.props.code)
                .then(res => {
                    res.data.forEach(hw => {
                        this.setState({
                            boards: this.state.boards.concat({...hw })
                        });
                    });
                })
                .catch(err => {
                    console.log(err)
                  })
              
                
        }
        catch (e) {
            console.log(`error : `+e);
        }
        
        
      }
    handleSaveData = (data) => {
        if (!data.idx) {            // new : Insert
            this.setState({
                maxNo: this.state.maxNo+1,
                boards: this.state.boards.concat({idx: this.state.maxNo/*, brddate: new Date()*/, ...data }),
                selectedBoard: {}
            });
        } else {                                                        // Update
            this.setState({
                boards: this.state.boards.map(row => data.idx === row.idx ? {...data }: row),
                selectedBoard: {}
            })            
        }

    }
    
    handleRemove = (idx) => {
        this.setState({
            boards: this.state.boards.filter(row => row.idx !== idx)
        })

        axios.post('http://localhost:3004/homeworks/deleteHomework',{idx:idx})
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
                            (<BoardItem key={row.idx} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                        )
                    }
            </div>
            

        );
    }
}

export default hwList;