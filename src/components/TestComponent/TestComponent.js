import React from "react";

const TestComponent = ({match}) => {
    return (
        <div>
            <h2>Hello there!</h2>
            <p>{match.params.catId}</p>
        </div>
    );
}

export default TestComponent;