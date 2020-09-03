import React, { Component } from 'react';
import { Board } from '../BoardStyles';

class BoardRow extends Component {
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.idx);
    }    
    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }    
    render() {
        return(
            <div>
                <form noValidate autoComplete="off">
                <Board title={this.props.row.title} contents={this.props.row.contents} 
                handleSelectRow={this.handleSelectRow} handleRemove={this.handleRemove}
                />
                </form>
                <br></br><br></br>
            </div>
        );
    }
}

export default BoardRow;