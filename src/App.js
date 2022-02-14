import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPosts } from './apis/post';
import AppRouting from './route';
import { Grid } from '@mui/material';
import { getAllComments } from './apis/comment';
import { getAllTodos } from './apis/todo';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllPosts(dispatch)
    getAllComments(dispatch)
    getAllTodos(dispatch)
  }, [])

  return (
    <div className="App">
      <Grid item sm={12} xs={12} md={8} style={{ margin: "0 auto" }}>
        <AppRouting />
      </Grid>

    </div >
  );
}

export default App;
