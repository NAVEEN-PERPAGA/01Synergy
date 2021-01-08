import React from "react";
import { Header } from "./header_C"

export const Home = () => {
  return (
    <>
    <Header/>
      <div id="div">
        <div className="row">
          <div className="col-md-6">
            <h2>Become an Efficiency Partner</h2><br/>
            <h4>
              Join our network of experts who work with Nova Scotian businesses
              to implement energy efficiency solutions.
            </h4><br/>
            <h5>
              If you are a distributor, contractor, consulting engineer or other
              energy efficiency trade professional, you can submit your
              application online.
            </h5><br/>
            <h5>
              You’ll need to include business and technical credentials to apply
              and complete a session on Efficiency Nova Scotia’s services and
              financial incentives.
            </h5><br/>
              <b>Your business is eligible if it:</b>
            <h5>
              <li>has been in operation for at least one year</li>
              <li>has an HST Registration Number</li>
              <li>is listed on the Registry of Joint Stocks</li>
              <li>has General and Auto Liability Insurance</li>
              <li>has Workers Compensation</li>
            </h5>
              <b>What you’ll need:</b>
            <h5>
              <li>your HST number</li>
              <li>
                copies of trade certificates required to perform the services
                your company others
              </li>
              <li>proof of insurance</li>
            </h5>
            <h5>
              Once you start your application, you can continue at any time.
            </h5>
          </div>

          <div className="col-md-6 d2">
            <p className="p">
              <b>Join the Efficiency Partner Network</b>
            </p><br/>
            <form>
              <input
                type="text"
                name="email address"
                placeholder="Email address"
              />
              <input type="text" name="Password" placeholder="Password" />
              <hr/>
              
              <input
                type="text"
                name="Business Name"
                placeholder="Business Name"
              />
              <input
                type="text"
                name="HST Registration Number"
                placeholder="HST Registration Number"
              />
              <br />
              <br />
              <input type="checkbox" id="exampleCheck1" />
              &nbsp;
              <label for="exampleCheck1">
                I agree to the Terms and Conditions
              </label>
              <br />
              <br />
              <a className="btn next-button1" href="/contact">GET STARTED</a>
            </form>
            <br />
            <small>Already have an account? Sign in instead</small>
          </div>
        </div>
      </div>
    </>
  );
};
