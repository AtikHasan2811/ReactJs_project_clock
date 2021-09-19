import React from "react";
import Button from "./Button";

class Clock extends React.Component {

    state = {date: new Date(), abc: 'en-US'};

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    handleClick = (abc) => {
        this.setState({
            abc,
        });
    }

    render() {
        const { date, abc } = this.state;
        let button;

        if(abc === 'bn-BD'){
            button =(
                <Button change={this.handleClick} abc="en-US">Click Hear</Button>
            );

        }else {
            button=(
            <Button change={this.handleClick} abc="bn-BD">Click Hear</Button>
            );
        }



        return (
            <div>
                <h1>
                    <span>{date.toLocaleTimeString(abc)}</span>
                </h1>
                {button}
            </div>
        );
    }
}

export default Clock;
