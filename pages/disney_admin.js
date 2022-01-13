import React, { Component } from "react"
import web3 from "./config/web3";
import disney from "./config/disney";
import Layout from '../components/Layout'
import { List, Form, Button, Input, Message } from 'semantic-ui-react'

class DisneyAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: "", numTokens: 0, foodSelected:"" ,rideSelected: "", listaDisponibleFood: "",
    message: "", messageFood: "", precioToken: 0, listaDisponibleRides: "",  loader : false, loaderFood : false };
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

   //Include new food
   addFood = async (event) => {

    event.preventDefault();
    this.setState({loaderFood: true});
    const accounts = await web3.eth.getAccounts();
    
    const data = new FormData(event.target);
    var foodName = data.get('foodName');
    var price = data.get('price');

    disney.methods.crearMenus(foodName, data.get('price')).send({
      from: accounts[0],
      gasLimit: '0x3d0900',
    }).then(async (res) => {
      console.log('Success', res);
      await this.loadAvailableFood();
      this.setState({loaderFood: false});
    })
      .catch(err => {
        console.log(err);
        this.setState({loaderFood: false});
        this.setState({ messageFood: err.message });
      })

  };




  async componentDidMount() {

    web3.eth.getAccounts().then(e => console.log(e));

    await this.loadAvailableRides();
    await this.loadAvailableFood();

  }



  async loadAvailableRides() {
   const atraccionesDisponibles = await disney.methods.atraccionesDisponibles().call();
  
    const listaDisponibleRides = atraccionesDisponibles.map((response) => ({
      "content": response,
      "icon": 'child'
    }));
    this.setState({ listaDisponibleRides });

  }

  async loadAvailableFood() {
    const comidaDisponible = await disney.methods.comidasDisponibles().call();
   
     const listaDisponibleFood = comidaDisponible.map((response) => ({
       "content": response,
       "icon": 'food'
     }));
     this.setState({ listaDisponibleFood });
 
   }

  render() {
    return (
      <Layout>
        <div>
          <h2>Disney Contract</h2>
          <h4>The available rides are:</h4>
          <List celled animated items={this.state.listaDisponibleRides}/>
          <h4>The available food are:</h4>
          <List celled animated items={this.state.listaDisponibleFood}/>


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

          <Form onSubmit={this.addFood} error={!!this.state.messageFood}>
            <h4>Add new food</h4>
            <p>**This is restricted to the smart contract owner (Disney)**</p>
            <Form.Field>
              
                <label htmlFor="foodName">Please, enter the new food </label>
                <Input id="foodName" name="foodName" type="string" />
             
                <label htmlFor="price">Please, enter the price </label>
                <Input id="price" name="price" type="number" />
                <Message error header="Oops!" content={this.state.messageFood} />

            </Form.Field>
            <Button loading={this.state.loaderFood}  primary>Add food</Button>
          </Form>
        </div>
      </Layout>
    );
  }
}
export default DisneyAdmin;