import React, { Component } from 'react';

export default class LandingPage extends Component {


    renderProducts() {

        const products = [
            {
                image : '/assets/product.png',
                name  : 'iPhone 6 Black',
                price : 'AED 1000'
            },
            {
                image : '/assets/product.png',
                name  : 'iPhone 7 Black',
                price : 'AED 1000'
            },{
                image : '/assets/product.png',
                name  : 'iPhone 8 Black',
                price : 'AED 1000'
            }
        ];

        return products.map((e) => {
            return (
                <div key={e.name} className="col-3">
                    <img className="card-img-top product_image" src={e.image} alt="Card image cap"></img>
                    <div className="card-block">
                        <p className="product_name">{e.name}</p>
                        <p className="product_price">{e.price}</p>
                    </div>
                </div>
            );
        });


    }


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

                <div className="row justify-content-center">

                        <form className="form-signin">
                            <h2 className="form-signin-heading text-center">Please sign in</h2>
                            <p className="form-signin-sub-heading text-center">Unlock Awesome Features!</p>

                            <label htmlFor="inputEmail">Email address</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address"></input>
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password"></input>
                            <div className="checkbox">
                                <div className="row">
                                    <label htmlFor="remember-me" className="col-7">
                                        <input type="checkbox" name="remember-me" id="inlineCheckbox1" value="option1"></input> Keep me logged in
                                    </label>
                                    <a className="col-5">Forgot password?</a>
                                </div>



                            </div>
                            <button className="btn btn-lg btn-primary btn-block form-signin-submit" type="submit">SIGN IN</button>
                        </form>

                </div>

                <hr/>

                <div className="row justify-content-around">
                    { this.renderProducts() }
                </div>

            </div>
        );
    }
}
