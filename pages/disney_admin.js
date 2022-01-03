import React, { Component } from "react"
import web3 from "./config/web3";
import disney from "./config/disney";
import Layout from '../components/Layout'
import { List, Form, Button, Input, Message } from 'semantic-ui-react'

class DisneyAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.state = { atraccionesDisponibles: "", value: "", numTokens: 0, rideSelected: "", dropDownOpt: [], message: "", precioToken: 0, listaDisponible: "", loader : false };
  }




  //Include new rides
  addRides = async (event) => {

    event.preventDefault();
    this.setState({loader: true});
    const accounts = await web3.eth.getAccounts();
    
    const data = new FormData(event.target);
    var rideName = data.get('rideName');
    var price = data.get('price');

    disney.methods.nuevaAtraccion(rideName, data.get('price')).send({
      from: accounts[0],
      gasLimit: '0x3d0900',
    }).then(async (res) => {
      console.log('Success', res);
      await this.loadAvailableRides();
      this.setState({loader: false});
    })
      .catch(err => {
        console.log(err);
        this.setState({loader: false});
        this.setState({ message: err.message });
      })

  };



  async componentDidMount() {

    web3.eth.getAccounts().then(e => console.log(e));

    await this.loadAvailableRides();


  }



  async loadAvailableRides() {
   const atraccionesDisponibles = await disney.methods.atraccionesDisponibles().call();
    this.setState({ atraccionesDisponibles });

    const dropDownValue = atraccionesDisponibles.map((response) => ({
      "value": response,
      "label": response
    }));
    const listaDisponible = atraccionesDisponibles.map((response) => ({
      "content": response,
      "icon": 'child'
    }));
    this.setState({ listaDisponible });
    this.setState({ dropDownValue });
  }

  render() {
    return (
      <Layout>
        <div>
          <h2>Disney Contract</h2>
          <h4>The available rides are:</h4>
          <List celled animated items={this.state.listaDisponible}/>


          <Form onSubmit={this.addRides} error={!!this.state.message}>
            <h4>Add new rides</h4>
            <p>**This is restricted to the smart contract owner (Disney)**</p>
            <Form.Field>
              
                <label htmlFor="rideName">Please, enter the new ride </label>
                <Input id="rideName" name="rideName" type="string" />
             
                <label htmlFor="price">Please, enter the price </label>
                <Input id="price" name="price" type="number" />
                <Message error header="Oops!" content={this.state.message} />

            </Form.Field>
            <Button loading={this.state.loader}  primary>Add ride</Button>
          </Form>
        </div>
      </Layout>
    );
  }
}
export default DisneyAdmin;