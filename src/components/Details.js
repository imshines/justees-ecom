import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer, WhiteBgbtn } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product-img"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h3>Model : {title}</h3>
                                    <h4 className="text-muted mt-3 mb-2">
                                        Brand : {company}
                                    </h4>
                                    <strong>
                                        Price : &#8377; {price}
                                    </strong>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Description :
                                    </p>
                                    <p>{info}</p>
                                    <div>
                                        <Link to ='/'>
                                            <WhiteBgbtn>
                                                Back to Products
                                            </WhiteBgbtn>
                                        </Link>
                                        <WhiteBgbtn 
                                        cart 
                                        disabled = {inCart?true:false} onClick = {() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                            }}
                                        >

                                            {inCart?'inCart':"Add to Cart"}
                                        
                                        </WhiteBgbtn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
