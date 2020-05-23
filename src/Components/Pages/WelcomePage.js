import React, { Component } from 'react'
import Login from "./Login";
import MainPage from "./MainPage";

export default class WelcomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            authenticated:true,
            isLoading:false,
        }
    }
    
    render() {
        console.log("Hello From WelcomePage");
        return (
            <div>
                {this.state.authenticated && !this.state.isLoading ? (
                    <MainPage />
                ) : (
                    <Login />
                    )}
            </div>
        )
    }
}
