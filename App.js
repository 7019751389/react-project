import React , {Component} from "react";

import Header from "./header";
import Navbar from "./navbar";
import Content from "./content";
import Footer from "./footer";
import classes from "./App.module.css"

const headers = {
  header: "Welcome to the react js",
  desc: "where you find more opurtufffffffffffnitees",
};
const links = [ "Active","Link","forms","home", "recruitment", "cotact us",
 "helpline", "more"];
 

class App extends Component {
  constructor(props){
    super();
    this.state = {
      headerState : headers,
      navBarState : links
    }
  }
   handleButton = () => {
     const newstate = {...this.state};
     newstate.headerState ={ header: "modified headerusing state",
     desc: "you learn diffret things"}
     
     newstate.navBarState.push("myProfile", "lists");
     this.setState(newstate);
   
  }

  render(){
    return (
      <div className = {classes.App} >
        <button onClick={this.handleButton } >press here</button>
        <Header {...this.state.headerState} />
  
        <Navbar links = {this.state.navBarState} />
  
        <Content />
  
        <Footer />
      </div>
    );
  }
}

export default App;