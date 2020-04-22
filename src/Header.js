import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageHeading: 'Notifications'
        };
    }

    clearAll() {
        alert('Clearing all the notifications');
    }

    menuToggle() {
        alert('Toggle Menu');
    }

    render() {
        return (
            <header className="App-header">
                <div className="toggle-btn" onClick={() => this.menuToggle()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 28" width="40">
                        <g>
                            <path d="M-5.4-10.9h50v50h-50V-10.9z" fill="none"/>
                            <path d="M0.9,26.6h37.5v-4.2H0.9V26.6z M0.9,16.2h37.5V12H0.9V16.2z M0.9,1.6v4.2h37.5V1.6H0.9z" fill="#42210B"/>
                        </g>
                    </svg>
                </div>
                <div className="page-title">
                    <h1>{this.state.pageHeading}</h1>
                </div>
                <div className="clear-btn"> <a href="/#" onClick={() => this.clearAll()}>Clear all</a> </div>
            </header>
        );
    }
}

export default Header;