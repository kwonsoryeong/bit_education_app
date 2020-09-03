import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {BangL} from '../BoardStyles';
import Button from '@material-ui/core/Button';

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

    saveCode(bangCode){
        localStorage.setItem('bangtoken', bangCode)
    }

    render() {
        
        return (
            <div className="banglist">
                {
                    this.state.bangList.map((row,index) =>
                        (
                        <BangL click={e => this.saveCode(row.code)}
                        title={row.title}
                        />
                        )
                    )
                }
                <Button type="submit" variant="contained" color="primary">
                    <Link to='/bang/createBang' style={{ color : `white`}}>
                        방만들기
                    </Link>
                </Button>
            </div>
        )
    }
}

export default BangList