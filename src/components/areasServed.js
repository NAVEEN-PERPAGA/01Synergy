import React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header_C";

export const AreasServed = () => {
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
              <h5>Select all counties which your business serves:</h5>
              <div className="row row-line-height">
                <div className="col-6">
                  <input id="an" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="an">
                    Annapolis
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Antigonish
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Cape Breton
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Colchester
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Cumberland
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Digby
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Guysborough
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Halifax
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Hants
                  </label>
                  <br />
                </div>
                <div className="col-6">
                  <input id="an" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="an">
                    Annapolis
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Antigonish
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Cape Breton
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Colchester
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Cumberland
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Digby
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Guysborough
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Halifax
                  </label>
                  <br />
                  <input id="ant" className="large-checkbox" type="checkbox" />
                  <label className="ml-4 label-size" for="ant">
                    Hants
                  </label>
                  <br />
                </div>
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
