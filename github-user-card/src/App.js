import React from 'react';
// import Head, FollowerCard, and PersonalGitCard Component from components folder
import Head from './components/Head';
import FollowerCard from './components/FollowerCard';
import PersonalGitCard from './components/UserCard';
import './App.css';
// set up class called App that extends React.Component
class App extends React.Component{
  // establish state to hold data
  state = {
    data: [],
    followers: []
  };
  
// CDM - fetch github personal data, set that data to state
  componentDidMount(){
    fetch('https://api.github.com/users/toosdaiotte')
      .then(res => res.json())
      // .then(res => console.log({ res }))
      .then(res => this.setState({ data: res }))
      .catch(err => console.log('BUG', err))
  }

  // CDU - if personal data rendered, fetch personal users followers, set that data to state
  componentDidUpdate(prevState){
    if(this.state.data){
      fetch('https://api.github.com/users/toosdaiotte/followers')
      .then(res => res.json())
      // .then(res => console.log({ res }))
      .then(res => this.setState({ followers: res }))
      .catch(err => console.log('BUG', err));
    }
  }

// Render/return jsx to DOM
  render(){
    return(
      <div className="App">
        {/* import Head component to jsx */}
        <Head />
        <PersonalGitCard data={this.state.data} />
        <FollowerCard data={this.state.data} followers={this.state.followers} />
      </div>
    )
  }
}

// export App component
export default App;
