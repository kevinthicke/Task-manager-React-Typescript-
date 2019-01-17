import * as React from 'react';
import { Navbar } from 'react-bootstrap';

interface HeaderProps {
    title: string,
    link: string
}

export default class Header extends React.Component <HeaderProps,any> {
    render() {
        const { title, link } = this.props;

        return (
            <Navbar inverse staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href={link}>{title}</a>
                    </Navbar.Brand>
                </Navbar.Header>
            +</Navbar>
            )
    }
}