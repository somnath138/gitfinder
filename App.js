// import React from'react'
// function App() {
//   return (
//     <div className="name">
//         <h1>hello world</h1>
//       <p>hello hosssssee</p>
//       <h1>hello world</h1>
//     </div>
//   );
// }

// export default App;
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

import axios from "axios";
import Search from "./components/users/Search";
//import PropTypes from 'prop-types';
export class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   //console.log(res);
  //   this.setState({ users: res.data, loading: false });
  // }
  //name = "guddu";
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    //console.log(res);
    this.setState({ users: res.data.items, loading: false });
  };
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  render() {
    //const loading = true; //for loading er jonnoini eta local ee declear kora holo
    return (
      <div>
        <Navbar title="GitHuBfIndeR" icon="fab fa-github" />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
