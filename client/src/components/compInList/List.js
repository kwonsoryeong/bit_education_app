import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Notice from './Notice'
import Vedio from './Vedio'
import Homework from './Homework'
import Question from './Question'
import BangHome from './BangHome'
import Grid from '@material-ui/core/Grid';

import { BrowserRouter as Router} from 'react-router-dom'

/*
const useStyles = makeStyles({
  /*root: {
    width: 200,
  },
});

function bangOut() {
  localStorage.removeItem('bangtoken');
  //history.push(`/profile`);
}

function Listt(match) {
  const classes = useStyles();

  return (
    
  );
}

export default withRouter(Listt)


*/


class Listt extends Component {
  
  bangOut() {
    localStorage.removeItem('bangtoken');
    //history.push(`/profile`);
  }

  render() {
    return (
        
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
    
    <div>
    <Grid container spacing={3} direction="row" justify="flex-start" alignItems="flex-start">
      <Grid item xs={3}>
      <Paper elevation={0}>
        <List aria-label="secondary mailbox folders">
          <ListItem button component={Link} to={`/list`}>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to={`/list/notice`}>
            <ListItemText primary="Notice" />
          </ListItem>
          <ListItem button component={Link} to={`/list/video`}>
            <ListItemText primary="Vedio" />
          </ListItem>
          <ListItem button component={Link} to={`/list/homework`}>
            <ListItemText primary="Homework" />
          </ListItem>
          <ListItem button component={Link} to={`/list/question`}>
            <ListItemText primary="Question" />
          </ListItem>
          <Divider />
          <ListItem button component="a" onClick={this.bangOut} href={`/profile`}>
            <ListItemText primary="나가기" />
          </ListItem>
        </List>
        
      </Paper>
      </Grid>
      <Grid item xs={7}>
        { <Route exact path="/list" component={BangHome} /> }
        { <Route exact path="/list/notice" component={Notice} />}
        { <Route exact path="/list/video" component={Vedio} />}
        { <Route exact path="/list/homework" component={Homework} />}
        { <Route exact path="/list/question" component={Question} />}
      </Grid>
      </Grid>
      </div>
      
      
    
  </MemoryRouter>
    )
  }
}

export default withRouter(Listt)