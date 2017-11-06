import React, { Component } from 'react';

export default class LandingPage extends Component {
    render() {
        return(
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand">
                        <img src="/assets/logo.png" width="212" height="54" alt=""></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto">
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>
                </nav>


                <form className="form-signin">
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address"></input>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"></input>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me"></input> Remember me
                        </label>
                    </div>
                    <div className="forgot-password">
                        <p>Forgot password?</p>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>

                <hr/>

                <div className="row justify-content-around">
                    <div className="col-3">
                        <img className="card-img-top" src="/assets/product.png" alt="Card image cap"></img>
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
