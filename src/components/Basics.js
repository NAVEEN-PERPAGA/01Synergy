import React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header_C";

export const Basics = () => {
  return (
    <>
      <Header />
      <div id="div">
        <h2>Become an Efficiency Partner</h2>
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div>
            <div className="verticalLine">
              <div className="col-7 ml-5">
                <h5><b>Tell us about your business</b></h5>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h6>
                <hr className="w-100"/> 
                
                <h5><b>Victory Insulators Limited</b></h5>
                <h6>HST: 12345 6789 RT0001</h6>
                <h5>Business Address</h5><br/>
                <input
                    className="col-8"
                    type="text"
                    placeholder="Address line 1"
                /><br/>
                <input
                    className="col-8"
                    type="text"
                    placeholder="Address line 2"
                /><br/>
                <input
                    className="col-8"
                    type="text"
                    placeholder="City"
                /><br/>
                <input
                    className="col-4"
                    type="text"
                    placeholder="Postcode"
                />&nbsp;
                <input
                    className="col-4"
                    type="text"
                    placeholder="Province"
                /><br/><br/>
                <h5>Business phone number</h5>
                <input
                    type="text"
                    className="col-8"
                    placeholder="Phone number"
                />
                <h5>Website</h5>
                <input
                    type="text"
                    className="col-8"
                    placeholder="Website address"
                />
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
    </>
  );
};
