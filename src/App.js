import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { RoutesConfig } from './routes/';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            NY Times most popular articles
          </Typography>
        </Toolbar>
      </AppBar>
      <RoutesConfig />
    </div>
  );
}

export default App;
