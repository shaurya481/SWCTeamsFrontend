import React from 'react';

export const WebTerminal = () => {
    return(
        <div>
            <div className="example-terminal">
            <p>
                Connection successful.
            </p>
            <p>
                DISCLAIMER: This is not a real terminal, you would pass your own terminal component into the children of the WebTerminal component.
            </p>
            <p>
                Please see the docs of this component for more information.
            </p>
            <p>
                joebob:~$
            </p>
            </div>
        </div>
    )
};