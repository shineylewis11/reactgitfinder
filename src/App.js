import React, { Fragment } from 'react';
import Navbar from './components/Navbar.js';
import User from './components/User';
import axios from 'axios';
import Search from './components/Search';
import Alert from  './components/Alert';
import About from './components/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component{
  state={
    users:[],
    alert:null
  }
  
  
//   async componentDidMount(){
//   //axios.get('https://api.github.com/users').then(res=>console.log(res.data));
//  const res= await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
//  console.log(res.data);
//  this.setState({users:res.data})
//   }
searchUser=async(text)=>
{
  const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
 console.log(res.data);
 this.setState({users:res.data.items})

}

clearUser=async()=>{

  this.setState({users:[]})

}
setAlert=(msg,type)=>{
  this.setState({alert:{msg,type}})
 setTimeout(()=>
 {
   this.setState({alert:null})
 },3000)
}
  render(){
    return(
    <Router><div> <Navbar name='Github Finders' iconClassNames='fa fa-github'/>
    <Alert alert={this.state.alert}></Alert>
    <Switch>
      <Route exact path='/' render={props=>(
        <Fragment>
      <Search searchUser={this.searchUser} setAlert={this.setAlert} clearUser={this.clearUser} showClear={this.state.users.length>0?true:false}/>
      <User users={this.state.users}/>
      
      </Fragment>
    )}/>
    <Route exact path='/about' component={About}/>
    </Switch>
   
    </div>
   
    </Router>
    )
  }
}

export default App;