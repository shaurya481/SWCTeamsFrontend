import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: 'black', height: '100%' }}>
            <div style={{marginTop: "1rem"}, {color: 'white'}}>
                 <div className="example-terminal">
                 <p>
                     <h2>Connection successful</h2>
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
        </Typography>
      </Container>
    </React.Fragment>
  );
}