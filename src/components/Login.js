import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div>
                  <div class="container">
                      <div class="row">
                          <div class="col-10 col-lg-6 col-md-6 mr-auto ml-auto mt-5">
                              <h1 className="text-center text-blue">Login</h1>
                              <div class="form-group">
                                <label for="uname"></label>
                                <input type="text"
                                  class="form-control" name="uname" id="" aria-describedby="helpId" placeholder="Enter Your UserName" />
                              </div>
                              <div class="form-group">
                                <label for="uname"></label>
                                <input type="text"
                                  class="form-control" name="uname" id="" aria-describedby="helpId" placeholder="Enter your Password" />
                              </div>
                              <a name="login" id="" class=" btn btn-outline-dark" href="#" role="button">Login</a>
                          </div>
                      </div>
                  </div>
            </div>
        )
    }
}
