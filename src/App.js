import React from "react";
import "./App.css";
import imgsrc from './walid.jpg'

class App extends React.Component {
  state = {
    Person: {
      fullName: "Walid SOUSSI",
      bio: " I am a Senior Civil Engineer And Junior Web Developer .",
      img:imgsrc,
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1 className="fullName">{this.state.Person.fullName}</h1>
            <h1 className="bio">{this.state.Person.bio}</h1>
            <img src={this.state.Person.img} alt="walid"></img>          
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}

export default App;
