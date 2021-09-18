import React from "react";
class Clock extends React.Component {

    state = {data: new Date()};

    componentDidMount() {
       this.clockTimer= setInterval(()=>this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick(){
        this.setState({
            data: new Date(),
        })
    }

    render(){
        return(
       <h1>
           <span>{ new Date().toLocaleTimeString(this.state.date)}</span>
       </h1>
        );
    }
}

export default Clock;
