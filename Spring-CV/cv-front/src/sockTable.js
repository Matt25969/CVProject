
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import axios from 'axios';
import BespokeGetComp from './bespokeGet';
import DeleteComp from './DeleteComp';

class ExtraDataColumnFormatTable extends React.Component {

    state = {

        message : [],
        messageMeta : [],
        cvs : []
        };

    constructor(){
        super();
        this.popWorkingList();              
            
    }

   



popWorkingList(){

    var temp =  [];

    for (let i = 0; i < this.state.message.length; i++) {
 
      var secondNumb = (i*2)+1;

      

      temp.push({
        id: 0,
        fileName: this.state.message[i],
        firstName: this.state.messageMeta[2*i],
        lastName: this.state.messageMeta[secondNumb],
        quality: <BespokeGetComp name={this.state.message[i]}/>,
        delete: <DeleteComp firstName = {this.state.messageMeta[2*i]} lastName = {this.state.messageMeta[2*i+1]}/>
      
      });
    
    }

    this.setState({cvs:temp})

}


deleteFormatter(cell, row, enumObject) {

    return (<div>{cell}</div>);
   
  }

  componentWillMount(){
       
  }


render() {

    return (
      <BootstrapTable data={ this.state.cvs } >
        <TableHeaderColumn dataField='id' isKey={ true }>Delegate ID</TableHeaderColumn>
        <TableHeaderColumn dataField='fileName'>File Name</TableHeaderColumn>
        <TableHeaderColumn dataField='firstName'>First Name</TableHeaderColumn>
        <TableHeaderColumn dataField='lastName'>Last Name</TableHeaderColumn>
        <TableHeaderColumn dataField='quality' dataFormat={ this.deleteFormatter.bind(this) }>Download</TableHeaderColumn>
        <TableHeaderColumn dataField='delete' dataFormat={ this.deleteFormatter.bind(this) }>Delete</TableHeaderColumn>
      </BootstrapTable>
    );
  }

}

export default ExtraDataColumnFormatTable;
  
