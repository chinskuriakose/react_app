import React from "react";

const HelloNoJsx = () => {
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement(
            'h1',
            null,
            'Hello Chins'
        )
    )
}

export default HelloNoJsx;