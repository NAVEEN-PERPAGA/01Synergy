import React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header_C";

export const Details = () => {
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
                <p className="size-1">Tell us about your business</p>
                <p className="size-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <hr className="w-100" />
                <h6>Business type</h6>
                <div className="row">
                  <div className="col-3">
                    <div className="square-box-business">Contractor</div>
                    <div className="square-box-checkbox-business">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="col-3 ml-3">
                    <div className="square-box-business">Distributor</div>
                    <div className="square-box-checkbox-business">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="col-3 ml-3">
                    <div className="square-box-business">
                      Consulting Engineer
                    </div>
                    <div className="square-box-checkbox-business">
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h6>Service type</h6>
                <div className="row">
                  <div className="col-3">
                    <div className="square-box-service">Residential</div>
                    <div className="square-box-checkbox-service">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="col-3 ml-5">
                    <div className="square-box-service">Commercial</div>
                    <div className="square-box-checkbox-service">
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <br />
                <h6>Description</h6>
                <input
                  className="input-description"
                  placeholder="Be clear and descriptive"
                />
                <br />
                <br />
                <h6>Date business founded</h6>
                <div className="row ml-1">
                  <div className="date">14</div>
                  <div className="date ml-2">June</div>
                  <div className="date ml-2">2021</div>
                </div>
                <br />
                <h6>Number of full-time employees</h6>
                <input className="p-2 borderless w-25" placeholder="select" />
                <br />
                <br />
                <h6>Operating Hours</h6>
                <div className="row ml-1">
                  <div className="date pr-5">Mon</div>
                  <div className="date ml-2">9:00am</div>
                  <div className="date ml-2">5:00pm</div>
                  <small className="p-2 ml-2">ADD HOURS</small>
                </div>
                <br />
                <p>Do you provide free quotes / estimates?</p>
                <div className="row ml-1">
                  <input type="radio" name="radio" />
                  <p className="ml-4">YES</p>
                  <input className="ml-4" name="radio" type="radio" />
                  <p className="ml-4">NO</p>
                </div>
                <p>Do you offer warranties / guarantees?</p>
                <div className="row ml-1">
                  <input type="radio" name="warranties"/>
                  <p className="ml-4">YES</p>
                  <input className="ml-4" type="radio" name="warranties" />
                  <p className="ml-4">NO</p>
                </div>
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
    </>
  );
};
