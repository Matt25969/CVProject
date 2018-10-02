import React, { Component } from 'react';
import './App.css';


import ExtraDataColumnFormatTable from './sockTable'

class App extends Component {
state = {

getTarget:"http://localhost:8080/",
temp:1

}

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGet = this.handleGet.bind(this);
    this.handleUpload = this.handleUpload.bind(this);

    axios.get("http://localhost:8080/getAllMeta").then(response => {
	
      this.setState({messageMeta: response.data},() => {

          axios.get("http://localhost:8080/getAll").then(response => {
  
              this.setState({message: response.data},() => {

                  
  
              })
  
      
              })

      })

      })
  
  }


  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;

    fetch("http://localhost:8080/"+first+"/"+last, {
      method: 'POST',
      body: data,
    });
  }


  handleGet(){
    var last = document.getElementById("lastName").value;
    this.state.getTarget = "http://localhost:8080/"+last;
  }

  handleUpload(){
    this.setState({temp:0});
  }

  
  render() {
    return (
      <div className="App">
        <form method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit}>
        <input id = "firstName"/>
        <p>FirstName</p>
        <input id = "lastName" onChange={this.handleGet}/>
        <p>LastName</p>
		
				<input type="file" name="file" />
        <br/>   
				<input type="submit" value="Upload" onClick = {this.handleUpload}/>
			
		</form>
    

<ExtraDataColumnFormatTable/>
      </div>
    );
  }
}

export default App;
