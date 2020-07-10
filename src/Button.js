import React, {Component} from 'react'

export default class Button extends React.Component{

    constructor(props){
        super(props);
        this.state={
            counter:0,
            flag:false
        };
    }

    Increment(){
        this.setState({
            flag:true
        });
    };

    render(){
        return(
            <div>
                <button onClick={(e)=>this.Increment(e)}>
                .
                </button>
                <p>
                {(this.state.flag)?<a className='App-link' href="https://bit.ly/weebcrft">PLEASE GO HERE PLEASE AAAH</a>:""}
                </p>
                    

            </div>
        );
    }s
}
