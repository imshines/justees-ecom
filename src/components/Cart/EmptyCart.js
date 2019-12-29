import React from 'react';
import {WhiteBgbtn} from '../Button';
import {Link} from 'react-router-dom';

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>your cart is empty</h1>
                    <Link to = '/'>
                    <WhiteBgbtn>
                        Shop now
                    </WhiteBgbtn>
                    </Link>
                </div>
            </div>
        </div>
    )
}
