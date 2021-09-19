import React from "react";

class Button extends React.Component {

    render() {
        const {change ,abc} = this.props;
        return (
            <button type="button" onClick={()=>change(abc)}>Click Hear atik123</button>
        );
    }
}

export default Button;