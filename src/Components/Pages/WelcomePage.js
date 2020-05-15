import React, { Component } from 'react'
import Login from "./Login";
import MainPage from "./MainPage";

export default class WelcomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            authenticated:false,
            isLoading:false,
        }
    }
    
    render() {
        return (
            <div>
                {this.state.authenticated ? (
                    <MainPage />
                ) : (
                    <Login />
                    )}
            </div>
        )
    }
}
