import React, { Component } from 'react';
import BoardForm from './Crud_BoardForm';
import BoardItem from './Crud_BoardItem';
import jwt_decode from 'jwt-decode'
import axios from 'axios'
/*
    component files.
*/
let InputForm;
class crud extends Component {
    state = {
        maxNo: 3,
        bangOwner: '',
        boards: [
        ],
         selectedBoard:{}
    }
    componentDidMount() {
        try {
            
            axios.post('http://localhost:3004/bulletins/selectPost/'+this.props.code, {
                
              })
                .then(res => {
                    res.data.forEach(post => {
                        this.setState({
                            boards: this.state.boards.concat({...post })
                        });
                    });
                })   
                axios.post('http://localhost:3004/bangs/findBangOwner/'+this.props.code)
                  .then(res => {
                    

                    this.setState({
                        bangOwner: res.data
                    });
            });      
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

        axios.post('http://localhost:3004/bulletins/deletePost',{idx:idx})
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
        const { boards, selectedBoard, bangOwner } = this.state;
        const saveData = this.handleSaveData;
        const pro = this.props;
        const token = localStorage.usertoken
        const decoded = jwt_decode(token);
       
        function showOrNot(){
            if(decoded.id === bangOwner){
                return <BoardForm selectedBoard={selectedBoard} onSaveData={saveData} code={pro.code}/>
            }
            else{
                
            }
        }
        return (
            <div>
                {
                    showOrNot()
                }
                    <table border="1">
                    <tbody>
                    <tr align="center">
                        <td width="100">Title</td>
                        <td width="500">Contents</td>
                    </tr>
                    {
                        boards.map(row =>
                            (<BoardItem key={row.idx} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default crud;