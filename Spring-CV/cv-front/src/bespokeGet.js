import React from 'react';


class BespokeGetComp extends React.Component {

    state = {

        target:"http://localhost:8080/bespoke/"
       
        };

    changeTarget = () => {

var newTarget = "http://localhost:8080/bespoke/"+this.props.name;

this.setState({target:newTarget});

console.log(this.state.target);

console.log(newTarget);

    }

    render(){
      return (
  
  <div>
  <form method="get" action={this.state.target}>
  <button type="submit" onClick={this.changeTarget}>Download CV!</button>
</form>
  </div>);
  
    }
  }
  
  export default BespokeGetComp;