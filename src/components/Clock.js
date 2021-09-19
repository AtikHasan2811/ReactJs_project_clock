import React from "react";
import Button from "./Button";

class Clock extends React.Component {

    state = {data: new Date(), locale: 'bn-BD'};

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            data: new Date(),
        })
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    }

    render() {
        console.log('colck component rander');
        return (
            <div>
                <h1>
                    <span>{new Date().toLocaleTimeString(this.state.locale)}</span>
                </h1>
                <Button change={this.handleClick.bind(this, 'en-US')}>Click Hear</Button>
            </div>
        );
    }
}

export default Clock;
