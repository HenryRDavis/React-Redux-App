import React, { useEffect } from 'react';
import './App.css';
import ThePeople from './components/Ghiblis'
import {connect} from 'react-redux'
import {fetchPeeps} from './Store/actions'

function App({fetchPeeps, loadingPeople, errorMessage}) {
  
  useEffect(() => {
    fetchPeeps();
  }, [fetchPeeps])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Studio Ghibli</h1>
        <h2>The People of Ghibli</h2>
          {!loadingPeople ? <ThePeople/> : <div>... Fetching people</div>} 
          {errorMessage !== "" ? <div>{errorMessage}</div> : null}
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingPeople: state.loadingPeople,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, {fetchPeeps}) (App);
