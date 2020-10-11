// Import modules
import React from "react";

// Import styles
import './Header.scss';

// Import components
import { Jumbotron } from 'reactstrap';


class Header extends React.Component {
    render(): JSX.Element  {
        return (
            <header className="text-center">
                <Jumbotron>
                    <h1>App with React + Django</h1>
                </Jumbotron>
            </header>
        );
    }
}

export default Header;
