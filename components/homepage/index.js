import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../layouts/index';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  
  setName(e){
    const value = e.target.value;
    this.setState({ name: value })
  }

  setUser(){
    const name = this.state.name;
    this.props.addUser({id: 1, name: name});
  }

  render() {
    console.log('props', this.props);
    return (
      <Layout>
        <h1>Sawatdee { this.props.users.name  && this.props.users.name } Next.js</h1>

        <input type="text" onChange={e => this.setName(e)} />
        <button type="button" onClick={() => this.setUser()}>SET USER</button>
      </Layout>
    )
  }
};

Index.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default Index;