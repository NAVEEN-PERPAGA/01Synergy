import React from "react";
import { Header } from "./header_C";

export const FinishApplication = () => {
  return (
    <>
      <Header />
      <div id="div">
        <h2>Become an Efficiency Partner</h2>
        <br />
        <div className="row">
          <div className="col-3">
            <div className=" sidebar">
              <ul className="side-bar-list">
                <li>Contact information</li>
                <li className="side-heading-list">Business Listing</li>
                <li>Basics</li>
                <li>Details</li>
                <li>Areas served</li>
                <li>Services offered</li>
                <li className="side-heading-list">Documentation</li>
                <li>Accreditations & Certifications</li>
                <li>Required documents</li>
                <br />
                <li className="li-green">Finish Application</li>
              </ul>
            </div>
          </div>
          <div className="column verticalLine">
            <div className="ml-5">
              <h4>Finish Application</h4>
              <p>
                Review the terms and conditions below, which apply to all
                Efficiency Nova Scotia Efficiency Partners and upon acceptance
                into the Efficiency Partner Network, the Applicant agrees to
                accept and comply with all of the following:
              </p>
              <hr className="w-100" />
              <div className="scrollable">
                <p>
                  1. The Applicant’s approval for a particular program will be
                  effective as of the date of an Application Approval Notice and
                  the Applicant will be subject to these terms and conditions
                  and all program-specific terms and conditions for
                  participation. Efficiency Partner approval for each program
                  will be effective for a term of one year from the date of the
                  program's Application Approval Notice, and will subsequently
                  automatically renew each year on the anniversary of such
                  Application Approval Notice for additional one year periods,
                  unless otherwise suspended or terminated in accordance with
                  these terms and conditions, or any program-specific terms and
                  conditions.
                </p>
                <p>
                  2. Once approved as an Effciency Partner, the Applicant may be
                  listed on Efficiency Nova Scotia’s website as a participating
                  Efficiency Partner.
                </p>
                <p>
                  3. Effciency Nova Scotia is a franchise operated by
                  EfficiencyOne, offcial Licensee of the Province of Nova
                  Scotia. By providing consent the Applicant agrees to release
                  personal information to the current and successive holders of
                  the Effciency Nova Scotia franchise.
                </p>
                4. Efficiency Nova Scotia will provide the Applicant with
                informational training materials, and additional training as
                required by each Efficiency Nova Scotia service for which the
                Applicant has been approved.
              </div>
              <div className="row ml-4 mt-4">
                <a className="btn col-3 back-button">BACK</a>
                <a className="btn submit-application-button ml-auto" href="#">
                  SUBMIT APPLICATION
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
