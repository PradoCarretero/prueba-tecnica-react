import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class App extends Component {
  render() {
    return (
      <div >
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Test React
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{
            width: '60%',
            margin: '0 auto',
            marginTop: 50,
          }}>
          <Paper>
            <div style={{
              minHeight: 200,
              padding: 25
            }}>
            <Typography variant="title" color="inherit" style={{display: 'inline'}}>Listado de usuarios</Typography>
            {' '}
            <Button variant="fab" color="primary" aria-label="Add" style={{ width: 35, height: 30}}>
              <AddIcon />
            </Button>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default App;
