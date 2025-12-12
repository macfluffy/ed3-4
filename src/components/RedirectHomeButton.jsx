import React from "react";
import { Navigate } from "react-router-dom";

class RedirectHomeButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shouldRedirect: false
        }
    }

    changedRedirectStatus = () => {
        this.setState({shouldRedirect: true})
    }

    render() {
        return (
            <div>
                <button onClick = {this.changedRedirectStatus}>
                    Return Home
                </button>
                {/*<---- Conditional rendering happening here! */}
                {this.state.shouldRedirect && <Navigate to = "/" />}
            </div>
        )
    }
}

export default RedirectHomeButton;