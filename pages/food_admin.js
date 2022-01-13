import React, { Component } from "react"
import web3 from "./config/web3";
import disney from "./config/disney";
import Select from 'react-select'
import Layout from '../components/Layout'
import { Form, Button, Input, Message } from 'semantic-ui-react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

class UserAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = { comidasDisponibles: "", value: "", numTokens: 0, comidaSelected: "", dropDownOpt: [], errorMessage: "",errorMessage2: "", message: "", precioToken: 0 , 
        loading: false, loading2: false};
    }

    // Function to by the number of tokens requested
    buyTokens = async (event) => {
        //prevent default behavior
        this.setState({errorMessage: ""});
        this.setState({errorMessage2: ""});
        this.setState({message: ""});
        this.setState({loading: true});

        event.preventDefault();

        const accounts = await web3.eth.getAccounts();
        const data = new FormData(event.target);
        const tokens = data.get('numToken');

        disney.methods.compraToken(tokens).send({
            from: accounts[0],
            value: web3.utils.toWei(tokens, 'ether') //Suponemos que los ethers dados para comprar los tokens van justos , ether por token

        }).then(async (res) => {
            console.log('Success', res);
            this.setState({loading: false});

            await this.loadNumTokens();

        })
            .catch(err => {
                console.log(err);
                this.setState({loading: false});

                this.setState({ errorMessage: err.message });
            })

    };

    //Function to select a ride on the dropdown
    onChange(event) {
        console.log('comidaSelected selected : ', event.value);
        this.setState({ comidaSelected: event.value });
    }

    //Method to enjoy the ride and pay it.
    enjoyRide = async () => {
        event.preventDefault();
        this.setState({errorMessage: ""});
        this.setState({message: ""});
        this.setState({errorMessage2: ""});
        this.setState({loading2: true});

        const accounts = await web3.eth.getAccounts();

        disney.methods.comprarComida(this.state.comidaSelected).send({
            from: accounts[0],
            gasLimit: '0x3d0900',
        }).then(async (res) => {
            console.log('Success', res);
            this.setState({loading2: false});
            this.setState({ message: "Disfruta de " + this.state.comidaSelected + "!!!!!"});

            await this.loadNumTokens();

        })
            .catch(err => {
                console.log(err)
                this.setState({loading2: false});
                this.setState({ errorMessage2: err.message });

            });

    };




    async componentDidMount() {
        const precioToken = await disney.methods.getPrecioToken().call();

        this.setState({ precioToken: web3.utils.fromWei(precioToken, 'ether') });

        await this.loadAvailableRides();

        await this.loadNumTokens();

    }

    async loadNumTokens() {
        const numTokens = await disney.methods.getMisTokens().call();
        this.setState({ numTokens });
    }

    async loadAvailableRides() {
        const comidasDisponibles = await disney.methods.comidasDisponibles().call();
        this.setState({ comidasDisponibles });

        const dropDownValue = comidasDisponibles.map((response) => ({
            "value": response,
            "label": response
        }));


        this.setState({ dropDownValue });
    }

    render() {
        return (
            <Layout>
                <div>

                    <p>You have:  {this.state.numTokens} tokens</p>
                    <Form onSubmit={this.buyTokens} error={!!this.state.errorMessage}>
                        <Form.Field>
                            <h4>Do you want to buy some tokens? The token price is : {this.state.precioToken} ethers </h4>

                            <label htmlFor="numToken">Please, enter the amount of token to buy </label>
                            <Input id="numToken" name="numToken" type="number" />

                            <Message error header="Oops!" content={this.state.errorMessage} />
                        </Form.Field>
                        <Button loading={this.state.loading} primary>Buy</Button>
                    </Form>

                    <hr />


                    <Form onSubmit={this.enjoyRide} error={!!this.state.errorMessage2} >
                        <Form.Field>
                            <label>Ready to enjoy the food? Select the one you want to enjoy</label>
                            <Select
                                options={this.state.dropDownValue}
                                onChange={this.onChange.bind(this)}
                            />

                            <Message error header="Oops!"  content={this.state.errorMessage2} />
                        </Form.Field>
                        <Button loading={this.state.loading2} primary>Enjoy the food!</Button>
                    </Form>
                    <h3>{this.state.message} </h3>

                </div>
            </Layout>
        );
    }
}
export default UserAdmin;