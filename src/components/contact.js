import React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header_C";

export const Contact = () => {
  return (
    <>
      <Header />
      <div id="div">
        <div className="activation-email">
          <ul>
            <small>We’ve sent you an activation email.</small>
            <br/>
            <small>Click the link in the email to confirm your account.</small>
          </ul>
        </div>
        <h2>Become an Efficiency Partner</h2>
        <br />
        <div className="row">
          <div className="col-3 ">
            <Sidebar contact={true} />
          </div>

          <div>
            <div className="verticalLine ">
              <div className="ml-5">
                <h4>Who should we contact about your application?</h4>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h6>
                <hr />
                <h6>Contact person</h6>
                <input className="col-3" type="text" placeholder="First Name" />
                &nbsp;
                <input className="col-3" type="text" placeholder="Last Name" />
                <br />
                <br />
                <h6>Email address</h6>
                <input
                  className="col-6"
                  type="text"
                  placeholder="john.doe@victoryinsulators.com"
                />
                <br />
                <input type="checkbox" />
                &nbsp;
                <small>
                  Receive email communications from Efficiency Nova Scotia
                </small>
                <br />
                <br />
                <h6>Phone Number</h6>
                <input
                  className="col-6"
                  type="text"
                  placeholder="Phone number"
                />
                <br />
                <br />
                <h6>Mailing Address</h6>
                <div className="h">
                  <input
                    className="col-6"
                    type="text"
                    placeholder="Address line 1"
                  />
                  <br />
                  <input
                    className="col-6"
                    type="text"
                    placeholder="Address line 2"
                  />
                  <br />
                  <input className="col-6" type="text" placeholder="City" />
                  <br />
                  <input className="col-3" type="text" placeholder="Postcode" />
                  &nbsp;
                  <input className="col-3" type="text" placeholder="Province" />
                  <br />
                  <br />
                  <div className="row">
                    <a className="btn col-3 back-button">BACK</a>
                    <a className="btn next-button" href="/">
                      NEXT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
