import React, { Component } from 'react';

import Input from '../components/Input';
import Nav from '../components/Nav';

export default class LandingPage extends Component {

    constructor() {
        super();

        this.handleLoginKeyUp = this.keyUpHandler.bind(this, 'LoginInput');
        this.handlePwdKeyUp = this.keyUpHandler.bind(this, 'PwdInput');
    }

    keyUpHandler(refName, e) {
        console.log(refName);
        // prints either LoginInput or PwdInput
    }

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
                <div key={e.name} className="product col-3">
                    <img className="card-img-top product_image" src={e.image} alt="Card cap"></img>
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
                <Nav/>

                <div className="row justify-content-center">

                        <form className="form-signin">
                            <h2 className="form-signin-heading text-center">Please sign in</h2>
                            <p className="form-signin-sub-heading text-center">Unlock Awesome Features!</p>

                            <Input key="usernameInput" type="text" label="Username" placeholder="Username"/>
                            <Input key="inputPassword" type="password" label="Password" placeholder="Password"/>

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
