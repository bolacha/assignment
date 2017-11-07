import React, { Component } from 'react';

export default class Nav extends Component {

    constructor() {
        super();

        this.state = {
            clicked: false,
            value: ''
        }

        this.clickSearch = this.clickSearch.bind(this);
        this.leaveSearch = this.leaveSearch.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.renderSearchBar = this.renderSearchBar.bind(this);
    }

    clickSearch() {
        this.setState({clicked: true})
    }

    leaveSearch() {
        if (this.state.value.length === 0) {
            this.setState({clicked: false})
        }
    }

    changeValue(evt) {
        this.setState({value: evt.target.value});
    }


    renderSearchBar() {
        //clickSearch
        if (!this.state.clicked) {
            return(
                <form className="search-bar-mobile-top form-inline">
                    <input className="form-control mr-auto search-field-small" onClick={this.clickSearch}  onBlur={this.leaveSearch} onChange={this.changeValue} type="button" aria-label="Search" value={this.state.value}></input>
                </form>
            );
        } else {
            return(
                <form className="search-bar-mobile-top form-inline">
                    <input className="form-control mr-auto search-field" onClick={this.clickSearch} onBlur={this.leaveSearch} onChange={this.changeValue} type="search" placeholder="Search" value={this.state.value} aria-label="Search"></input>
                </form>
            );
        }

    }

    render() {
        return(
            <nav className="carre-navbar navbar navbar-expand-lg">
                <a className="navbar-brand">
                    <img src="/assets/logo.png" width="212" height="54" alt=""></img>
                </a>
                <div className="mr-auto"></div>


                { this.renderSearchBar() }

            </nav>
        );
    }
}
