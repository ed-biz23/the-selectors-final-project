import React from 'react';
import { Container } from 'reactstrap';

function Layout(props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default Layout;