import React, { Component } from 'react';

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
            <tr>
                <td><a onClick={this.handleSelectRow}>{this.props.row.title}</a></td>
                <td>{this.props.row.contents}</td>
                
                <td><button onClick={this.handleRemove}>X</button></td>
            </tr>
        );
    }
}

export default BoardRow;