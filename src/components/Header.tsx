import * as React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBarStyle: React.CSSProperties = {
    marginTop: '20px',
    marginBottom: '20px',
    paddingLeft: '5%',
    height: '70px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center' 
}

const TitleStyle: React.CSSProperties = {  
    fontSize: '20pt'
}

interface HeaderProps {
    title: string,
    link: string
}

const Header: React.SFC<HeaderProps> = ({ title, link }) => (
    <Navbar style={NavBarStyle}>
        <Navbar.Header>
            <Navbar.Brand>
                <a href={link} style={TitleStyle}>{title}</a>
            </Navbar.Brand>
        </Navbar.Header>
    </Navbar>
)

export default Header;