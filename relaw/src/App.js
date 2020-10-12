import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Routers from './route';
import Header from './components/header';
import Loading from './components/loading/loading';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routers/>
      <Loading/>
    </div>
  );
}

export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(App);
