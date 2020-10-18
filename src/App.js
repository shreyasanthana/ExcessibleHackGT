import React, {Component} from 'react';
import './App.css';
import firebase, { auth, provider } from './firebase.js';

class App extends Component {
  
  constructor() {
    super()

    this.state = {
      role: "",
      request: false,
      donate: false,
      items: "",
      donor_receiver_name: "",
      location: "",
      user: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRequestSubmit = this.handleRequestSubmit.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }

  handleRequestSubmit() {
    if (this.state.user !== null) {
      const requestRef = firebase.database().ref("request_or_donation/" + this.state.user.uid)
      requestRef.set({
        items: this.state.items,
        request: this.state.request,
        donate: this.state.donate,
        location: this.state.location,
        request_name: this.state.donor_receiver_name
      })
    }


  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === 'checkbox' ? this.setState({[name]: checked}): this.setState({[name]: value})
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.user !== null) {
      const userRef = firebase.database().ref("user/" + this.state.user.uid)
      userRef.set({
        name: this.state.user.displayName,
        role: this.state.role
      })
    }
    if (this.state.role === "Donor") {
      this.setState({
        donate: true
      })
    } else if (this.state.role === "Receiver") {
      this.setState({
        request: true
      })
    }
    
  }

  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  render() {

    return (
      <div className="App">
        {this.state.user !== null ?
        <h2>Welcome, {this.state.user.displayName}</h2>:""
        }
        <h1></h1>
        <div className="wrapper">
            {this.state.user ?
            <a onClick={this.logout}>Log Out</a>                
            :
            <a onClick={this.login}>Log In</a>              
          }
        </div>
        <br/>

        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type='radio'
                name='role'
                value='Donor'
                checked={this.state.role === "Donor"}
                onChange={this.handleChange}
              /> Donor
            </label>
            <br />

            <label>
              <input
                type='radio'
                name='role'
                value='Receiver'
                checked={this.state.role === "Receiver"}
                onChange={this.handleChange}
              /> Receiver
            </label>
            <h3>You are a {this.state.role}</h3>
            <button className="wrapper">Submit</button>
          </form>
          <br />
          <br />
          <form onSubmit={this.handleRequestSubmit}>

            <input 
                    type="text" 
                    value={this.state.donor_receiver_name}
                    name="donor_receiver_name"
                    placeholder="Name"
                    onChange={this.handleChange} 
            />
            <br />

            <input 
                    type="text" 
                    value={this.state.location}
                    name="location"
                    placeholder="Location"
                    onChange={this.handleChange} 
            />
            <br />
            {this.state.request ?
            <input 
                    type="text" 
                    value={this.state.items}
                    name="items"
                    placeholder="Request Items"
                    onChange={this.handleChange} 
            />
            
            : 

            <input 
                    type="text" 
                    value={this.state.items}
                    name="items"
                    placeholder="Donate Items"
                    onChange={this.handleChange} 
            />
            }
            <br />
            <br />
            
            
            
            <button className="wrapper">Submit</button>
          </form>

          <h3>You are requesting/donating: {this.state.items}</h3>

        </div>
    </div>
    );
  }
}

export default App;
