import React, { Component } from 'react';

// const header = {
//   headers: {
//     authorization: `TOKEN ${localStorage.getItem('token')}`
//   }
// }
// axios.get('https://muddy-screams.herokuapp.com/api/adv/init/', header)
// .then( response => {
//   console.log(response)
// })
// .catch(e => console.log(e))

class Login extends Component {
  state = {
    username:'',
    password: '',
  }

  onFieldNameChange = (e) => {
    console.log({[e.target.name]: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogin = () => {
    
  }

  redirectToLogin = () => {
    this.props.history.push('/login')
  }

  render(){
    return (
      <form>
        <input type="text" onChange={this.onFieldNameChange} name="username" />
        <input type="text" onChange={this.onFieldNameChange} name="password" />
        <input type="submit" onClick={this.handleLogin} value="Submit" />
      </form>
    )
  }
}

export default Login