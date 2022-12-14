import React  from "react";

class Counter extends React.Component{

    constructor(props){
        super(props)

        this.state={
            count:props.count,
        }
    }

    inc=()=>{
        const current=this.state.count;
        this.setState({count:current+1})
    }

    dec=()=>{
        const current=this.state.count;
        this.setState({count:current-1})
    }
    
    render=()=>{
        return <div>
            <hr/>
            <button onClick={this.inc}>++</button>
            <h1>Counter {this.state.count}</h1>
            <button onClick={this.dec}>--</button>

            <hr/>

        </div>
    }

}

export default Counter;