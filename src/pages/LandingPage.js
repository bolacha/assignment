import React, { Component } from 'react';
import { request, plugins } from 'popsicle';

import Input from '../components/Input';
import Nav from '../components/Nav';

export default class LandingPage extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };

        this.handleLoginKeyUp = this.keyUpHandler.bind(this, 'LoginInput');
        this.handlePwdKeyUp = this.keyUpHandler.bind(this, 'PwdInput');

        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeUsername(evt) {

        this.setState({
            username: evt.target.value
        });
    }

    onChangePassword(evt) {
        this.setState({
            password: evt.target.value
        });
    }

    keyUpHandler(refName, e) {
        console.log(refName);
        // prints either LoginInput or PwdInput
    }

    handleSubmit(e) {
        e.preventDefault();

        const {username , password} = this.state;

        request({
                method: 'POST',
                url: "http://assignment.text/auth",
                body: {
                    username: username,
                    password: password
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .use(plugins.parse('json'))
            .then(function (res) {
                this.setState({
                    username: '',
                    password: ''
                });
            });
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
                <div key={e.name} className="col-12 col-sm-6 col-sm-5 col-md-5 col-lg-4 col-xl-3 product">
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

                <div className="row justify-content-around">

                        <form className="form-signin" onSubmit={this.handleSubmit}>
                            <h2 className="form-signin-heading text-center">Sign In Now</h2>
                            <p className="form-signin-sub-heading text-center">Unlock awesome features!</p>

                            <Input idInput="usernameInput" type="text" label="Username" placeholder="Username" value={this.state.username} onChange={this.onChangeUsername}/>
                            <Input idInput="inputPassword" type="password" label="Password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword}/>

                            <div className="checkbox">
                                <div className="row">
                                    <label htmlFor="remember-me" className="col-7 keep-me-logged">
                                        <input type="checkbox" name="remember-me" id="inlineCheckbox1" value="option1"></input> Keep me logged in
                                    </label>
                                    <a className="col-5 link-forgot" href="#">Forgot password?</a>
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
