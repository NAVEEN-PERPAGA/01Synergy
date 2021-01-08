import React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header_C";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

export const Required_Documents = () => {
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
              <h4>Required documents</h4>
              <p>
                To complete your application, you are required to provide copies
                of the following documents:
              </p>
              <hr className="w-100" />
              <h5>Proof of Insurance</h5>
              <p>
                To join the Efficiency Partner Network, you will need to{" "}
                <p className="inline-green-paragraph">
                  request a certificate of insurance
                </p>{" "}
                from your insurance agent showing the following:
              </p>
              <p>
                <b>Occurrence based Commercial General Liability Insurance </b>
                (including products and completed operations coverage with:
              </p>
              <li className="list-margin-top">
                limits of not less than $1,000,000 per occurrence for bodily
                injury and property damage liability, with an annual aggregate
                limit of not less than $1,000,000
              </li>
              <li>
                Efficiency Nova Scotia must be specifically named as an
                Additional Insured
              </li>
              <br />
              <p>
                <b>Comprehensive Auto Liability Insurance</b> which has minimum
                combined single limits for bodily injury and property damage of
                $1,000,000 per accident. The Comprehensive Auto Liability policy
                shall include owned and blanket non-owned and hired coverage.
              </p>
              <p>
                <b>Provincial-required worker’s compensation insurance</b>
              </p>
              <a className="btn accreditation">
                {
                  <FontAwesomeIcon
                    icon={faCloudUploadAlt}
                    size="2x"
                    color="black"
                  />
                }
                <p className="accreditation ml-4">Upload proof of insurance</p>
              </a>
              <br/><br/>
              <hr className="w-100"/>
              <br/>
              <h5>Worker’s Compensation Clearance Letter</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a className="btn accreditation">
                {
                  <FontAwesomeIcon
                    icon={faCloudUploadAlt}
                    size="2x"
                    color="black"
                  />
                }
                <p className="accreditation ml-4">Upload clearance letter</p>
              </a>
              <div className="row ml-4 mt-4">
                <a className="btn col-3 back-button">BACK</a>
                <a className="hidden next-button ml-auto">
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
