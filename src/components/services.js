import React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header_C";

export const Services = () => {
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
          <div className="column verticalLine ">
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
                <div className="bg-light p-2 mb-1">Existing Home Upgrades</div>
                <div className="bg-light p-2 mb-1">Insulation</div>
                <div className="bg-light p-2">
                  <h5>HVAC</h5>
                  <br />
                  <div className="row">
                    <div className="col-6">
                      <input type="checkbox" className="test" />
                      <label className="ml-4">Gas boilers</label>
                      <br />
                      <input type="checkbox" />
                      <label className="ml-4">Gas fireplace</label>
                      <br />
                      <input type="checkbox" />
                      <label className="ml-4">Gas furnace</label>
                      <br />
                      <input type="checkbox" />
                      <label className="ml-4">Gas unit heater</label>
                      <br />
                      <input type="checkbox" />
                      <label className="ml-4">Geothermal heat</label>
                      <br />
                    </div>
                    <div className="col-6">
                      <input type="checkbox" />
                      <label className="ml-4">Heat pump</label>
                      <br />
                      <input type="checkbox" />
                      <label className="ml-4">Wood / Pellet</label>
                      <br />
                      <input type="checkbox" />
                      <label className="ml-4">Oil furnace</label>
                      <br />
                      <input type="checkbox" />
                      <label className="ml-4">Oil boilers</label>
                      <br />
                    </div>
                  </div>
                </div>
                <br />
                <div className="row ml-4">
                  <a className="btn col-3 back-button">BACK</a>
                  <a className="btn next-button ml-auto" href="/">
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
