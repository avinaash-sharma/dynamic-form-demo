import React, { Component } from 'react'
import NavBar from "../NavBar";

export default class FormDemoOne extends Component {
    render() {
        menus:[{
            id:1,
            text:"Home",
            url:'/',
        },{
            id:2,
            text:"About Me",
            url:'/about',
        },{
            id:3,
            text:"Projects",
            url:'/projects',
        },{
            id:4,
            text:"Contact",
            url:'/contact',
        }]
        return (
            <div>
                <NavBar menu={menus}/>
                <div className="container">
                    <h3>Page One Demo</h3>
                </div>
            </div>
        )
    }
}
