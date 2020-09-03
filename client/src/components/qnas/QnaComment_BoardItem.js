import React, { Component } from 'react';
import { ViewComments } from '../BoardStyles';

class BoardCommentRow extends Component {
   
    handleCommentRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(this.props.idx);
    }

    
    render() {
        return(
            <ViewComments id={this.props.row.id} comment={this.props.row.comment} 
            click={this.handleCommentRemove}
            
            />
        );
    }
}

export default BoardCommentRow;