import React, { Component } from 'react';

class BoardCommentRow extends Component {
   
    handleCommentRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(this.props.idx);
    }

    
    render() {
        return(
            <p><h6><h5>{this.props.row.id}</h5>{this.props.row.comment}</h6><td><button onClick={this.handleCommentRemove}>X</button></td></p>
        );
    }
}

export default BoardCommentRow;