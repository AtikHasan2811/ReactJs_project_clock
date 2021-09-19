import React from "react";
class Button extends React.Component {


    shouldComponentUpdate(nextProps, nextState, nextContext) {
                const {change: currentChbge} = this.props;
                const {change: nextChange} = this.props;
                if (currentChbge === nextChange){
                    return false;
                }else {
                    return true;
                }

    }

    render() {
        console.log('button component render');
        const {change} = this.props;
        return(
            <button type="button" onClick={change}>Click Hear atik</button>
        );
    }
}

export default Button;