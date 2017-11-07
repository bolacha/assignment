import React, { Component } from 'react';

export default class Nav extends Component {

    constructor() {
        super();

        this.state = {
            clicked: false
        }

        this.clickSearch = this.clickSearch.bind(this);
    }

    clickSearch() {
        this.setState({clicked: true})
    }


    renderSearchBar() {
        if(!this.state.clicked) {
            return(
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 search-field" type="search" placeholder="Search" aria-label="Search"></input>
                </form>
            );
        } else {
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2 search-field" type="search" placeholder="Search" aria-label="Search"></input>
            </form>
        }
    }

    render() {
        return(
            <nav className="carre-navbar navbar navbar-expand-lg">
                <a className="navbar-brand">
                    <img src="/assets/logo.png" width="212" height="54" alt=""></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav mr-auto">
                </div>
                { this.renderSearchBar() }
                </div>
            </nav>
        );
    }
}
