import React from "react";

function Navigation() {
    return (
        <div>
            <button onclick={this.props.history.goback}>Back</button>
        </div >
    )
}

export default Navigation();