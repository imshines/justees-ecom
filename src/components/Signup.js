import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <div>
            <div class="container">
                      <div class="row">
                          <div class="col-10 col-lg-6 col-md-6 mr-auto ml-auto mt-5">
                              <h1 className="text-center text-blue">Signup</h1>
                              <div class="form-group">
                                <label for="name"></label>
                                <input type="text"
                                  class="form-control" name="name" id="" aria-describedby="helpId" placeholder="Enter Your Name" />
                              </div>
                              <div class="form-group">
                                <label for="uname"></label>
                                <input type="text"
                                  class="form-control" name="uname" id="" aria-describedby="helpId" placeholder="Enter a UserName" />
                              </div>
                              <div class="form-group">
                                <label for="email"></label>
                                <input type="text"
                                  class="form-control" name="email" id="" aria-describedby="helpId" placeholder="Enter Your Email ID" />
                              </div>
                              <div class="form-group">
                                <label for="phone"></label>
                                <input type="text"
                                  class="form-control" name="phone" id="" aria-describedby="helpId" placeholder="Enter Your Phone Number" />
                              </div>
                              <div class="form-group">
                                <label for="password"></label>
                                <input type="password"
                                  class="form-control" name="password" id="" aria-describedby="helpId" placeholder="Enter a New Password" />
                              </div>
                              <div class="form-check mb-3">
                                <label class="form-check-label">
                                  <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked />
                                  I Agree to all the Conditions
                                </label>
                              </div>
                              <a name="login" id="" class="btn btn-outline-dark" href="#" role="button">Signup</a>
                          </div>
                      </div>
                  </div>
            </div>
        )
    }
}
