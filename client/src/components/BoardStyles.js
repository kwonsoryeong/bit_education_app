import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import OutlinedInput from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';
import BoardItem from './qnas/QnaComment_BoardItem';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  div:{
    '& > *': {
      margin: theme.spacing(2),
    },
    border: '2px solid #ced4da',
    paddingRight: theme.spacing(5),
  },
  TextField:{
    fullWidth:true,
    margin: theme.spacing(1),
  },
  root: {
    '& > *': {
      margin: theme.spacing(2),
      flexGrow: 1,
    },
  },
  listDiv:{
    //border: '1px solid #ced4da',
    borderBottom: '2px solid #ced4da',
  },
  listGrid:{
    // margin:theme.spacing(2),
    paddingInlineStart: 100,
    width: '100%',
    minWidth: 300,
  }
}));

function createData(title, content) {
  return { title, content};
}

const rows = [
  createData('notice1sdddddddddddddddddddddddddddddddddd', 'aaaaaaaaaaaaaaa'),
  createData('notice2', 'bbbbbbbbbbbbbbb'),
  createData('notice3', 'ccccccccccccccc'),
  createData('notice4', 'ddddddddddddddd'),
  createData('notice5', 'eeeeeeeeeeeeeee'),
];

function Btn(props) {
    const classes = useStyles();
      return (
          <Button type="submit" variant="contained" color="primary"> Save</Button>
    )
  }

function Board(props){
    const classes = useStyles();
    return(
        <div className={classes.div}>
        <Grid container justify="flex-end">
            <Button onClick={props.handleRemove} variant="contained" color="primary" width='10px'>x</Button>
        </Grid>
          <TextField 
            onClick={props.handleSelectRow}
            className={classes.TextField} 
            disabled
            fullWidth={true}
            defaultValue={props.title} />
        
            <br></br><br></br>
            
          <TextField 
            className={classes.TextField} 
            defaultValue={props.contents}
            disabled 
            fullWidth={true}
            multiline 
            rows={5}/><br></br>
        
        </div>
    )
}

function BoardWithComments(props){
    const classes = useStyles();
    return(
      <div className={classes.div}>
        <Grid container justify="flex-end">
            <Button onClick={props.handleRemove} variant="contained" color="primary" width='10px'>x</Button>
        </Grid>
          <TextField 
            onClick={props.handleSelectRow}
            className={classes.TextField} 
            disabled
            fullWidth={true}
            defaultValue={props.title} />
        
            <br></br><br></br>
            
          <TextField 
            className={classes.TextField} 
            defaultValue={props.contents}
            disabled 
            fullWidth={true}
            multiline 
            rows={5}/><br></br>
          <div>
                <p>
                        {
                            props.comments.map(row =>
                                (<BoardItem idx={row.idx} row={row} onRemove={props.handleCommentRemove}/>)
                            )
                        }
                </p>
                <form onSubmit={props.handleSubmit} className={classes.root} noValidate autoComplete="off">
                    <Grid container spacing={3}>
                    <Grid item xs={8}>
                      <OutlinedInput
                        className={classes.TextField}
                        fullWidth={true}
                        label="comment"
                        id="mui-theme-provider-standard-input"
                        inputRef={props.inputComment} />
                    </Grid>
                    <Grid item xs={4} justify="flex-end">
                      <Button type="submit" variant="contained" color="primary" > Save</Button>
                    </Grid>
                  </Grid>
                   
                </form>
              </div>
        </div>
    )
}

function ViewComments(props){
  const classes = useStyles();
  return(
    <div className="contents">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
        <TableBody>
              <TableRow key={props.id}>
                <TableCell component="th" scope="row">{props.id}</TableCell>
                <TableCell align="left">{props.comment}</TableCell>
                <Button onClick={props.click} variant="contained" color="primary" > X</Button>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </div>
  )
}
function BangL(props){
  const classes = useStyles();
  return(
    <div>
      <ListItem button component={Link} to={`/list`} onClick={props.click} >
        <ListItemText primary={props.title} />
      </ListItem>
      <div className={classes.listDiv}/>
    </div>
  )
}

function InputPost(props){
  const classes = useStyles();
  return(
    <form onSubmit={props.handleSubmit} className={classes.root} noValidate autoComplete="off">
        <OutlinedInput
          className={classes.TextField}
          fullWidth={true}
          label="title"
          id="mui-theme-provider-standard-input"
          inputRef={props.inputTitle} /><br></br>
        <OutlinedInput
          className={classes.TextField}
          fullWidth={true}
          label="content"
          variant="outlined"
          id="mui-theme-provider-standard-input"
          inputRef={props.inputContents} />
        <br></br>
        <Grid container justify="flex-end">
          <Button type="submit" variant="contained" color="primary" > Save</Button>
        </Grid>
      </form>
  )
}
export {Btn, Board, BoardWithComments, ViewComments, BangL, InputPost};