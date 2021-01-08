import React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header_C";

export const Services_Next = () => {
  return (
    <>
      <Header />
      <div id="div">
        <h2>Become an Efficiency Partner</h2>
        <br />
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="column verticalLine">
            <div className="ml-5">
              <h4>Tell us about your business</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <hr className="w-100" />
              <h5 className="mb-4">
                Which installation services do you offer?
              </h5>
              <div className="col-long">
                <div className="bg-light p-2 mb-1">Agriculture products</div>
                <div className="bg-light p-2 mb-1">Compressed Air</div>
                <div className="bg-light p-2 mb-1">
                    <h5>HVAC</h5><br/>
                    <input type="checkbox"/>
                    <label className="ml-4">Ground/water source heat pumps</label><br/>
                    <input type="checkbox"/>
                    <label className="ml-4">High efficiency air source heat pumps</label><br/>
                    <input type="checkbox"/>
                    <label className="ml-4">HVAC Hotel Occupancy Sensors</label><br/>
                    <input type="checkbox"/>
                    <label className="ml-4">Integrated Dual Enthalpy Economizer Controls</label><br/>
                    <input type="checkbox"/>
                    <label className="ml-4">Commercial Solar Space Heating</label><br/>
                </div>
                <div className="bg-light p-2 mb-1">Laundry Equipment</div>
                <div className="bg-light p-2 mb-1">Kitchen Equipment</div>
                <div className="bg-light p-2 mb-1">Refrigeration Equipment</div>
                <div className="bg-light p-2 mb-1">Lighting</div>
                <div className="bg-light p-2 mb-1">Motor and Variable Speed Drives</div>
                <div className="bg-light p-2 mb-1">Water Heating</div>
                <div className="bg-light p-2 mb-1">IT and Datacenters</div>
                <div className="bg-light p-2 mb-1">Pumping</div><br/>
                <hr className="w-100"/><br/>
                <h5>What products do you sell?</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
