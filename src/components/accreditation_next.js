import React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header_C";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons"

export const Accreditation_Next = () => {
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
                Upload copies of your accreditations / certifications. These
                will be displayed on your listing to give your potential
                customers a sense of your capabilities.
              </p>
              <hr className="w-100" />
              <br />
              <a className="btn accreditation">
                {
                  <FontAwesomeIcon
                    icon={faCloudUploadAlt}
                    size="2x"
                    color="black"
                  />
                }
                <p className="accreditation ml-4">
                  Add a accredication / certification
                </p>
              </a>
              <div className="accred-next-block mt-4">
                <div className="accred-next-grey-block"></div>
                <a className="cross-icon btn"><FontAwesomeIcon icon={ faTimes }/></a>
                <input className="input-accred" placeholder="Name of Accreditation/Certification"/>
                <input className="accred-next-input-description" placeholder="Description"/>
                <input className="input-accred" placeholder="Name of Technician (if applicable)"/>
              </div>
              <div className="row ml-4 mt-4">
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
