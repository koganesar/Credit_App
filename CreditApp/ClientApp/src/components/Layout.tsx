import React from 'react';
import {Container} from 'reactstrap';

export const Layout = (props: any) => {
    return (
        <div>
            <Container>
                {props.children}
            </Container>
        </div>
    );
}
