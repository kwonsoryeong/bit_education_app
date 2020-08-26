import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

class BangList extends Component {
    state = {
        bangList: [
        ]
    }
    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token);
    
        try {

            axios.post('http://localhost:3004/bangs/selectBang',{adminId:decoded.id})
                .then(res => {
                    res.data.forEach(bang => {
                        this.setState({
                            bangList: this.state.bangList.concat({...bang })
                        });
                    });
                })
                
        }
        catch (e) {
            console.log(`error : `+e);
        }
        
        
      }
    render() {
        
        return (
            <div className="banglist">
                {
                    this.state.bangList.map((row,index) =>
                        (
                        <li className="bang-item" key={index}>
                        <Link to={`list/notice/${row.code}`}>
                        {row.title}
                        </Link>
                        </li>)
                    )
                }
                <button>
                    <Link to='/bang/createBang' className="list-link">
                        방만들기
                    </Link>
                </button>
            </div>
        )
    }
}

export default BangList