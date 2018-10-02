import React from 'react';
import axios from 'axios';

class DeleteComp extends React.Component {

    state = {
        target:"http://localhost:8080/"+this.props.firstName+"/"+this.props.lastName
        };

        changeTarget = () => {

            axios.delete(this.state.target);

                }

    render(){
      return (
  
  <div>
  <button  onClick={this.changeTarget}>Delete CV!</button>
  </div>);
  
    }
  }
  
  export default DeleteComp;