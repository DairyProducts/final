import React, {Component} from 'react'

export default class Factorial extends React.Component{
    factorial(){
        this.setState({counter: 1})
        var size = document.getElementById('factorial').value
        var ret = 1
        for(var i = 0;i<size;i++ ){
            ret = ret * (i+1)
        }
        this.setState({flag: true, counter: ret})
    }

    render(){
        return(
            <div className = 'function'>
                <input id='factorial'/>
            </div>
            
        )
    }
}