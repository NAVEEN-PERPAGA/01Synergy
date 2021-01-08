import React from "react";
import './style.css';

export const Sidebar = (props) => {
    console.log(props.props === 'contact')
    return (
        <>
        <div className=" sidebar" >
        <ul className="side-bar-list">
            {props.contact ? <li className="color">Contact information</li> : <li>Contact information</li>}
            <li className="side-heading-list">Business Listing</li>
            {props.contacts ? <li className="color">Basics</li> : <li>Basics</li>}
            <li >Details</li>
            <li >Areas served</li>
            <li >Services offered</li>
            <li className="side-heading-list">Documentation</li>
            <li>Accreditations & Certifications</li>
            <li>Required documents</li><br/>
            </ul>
            <div className="side-bar-footer">
                <h5>Complete <b>6 more steps</b> to finish your application</h5> 
            </div>                     
        </div>
        </>
    )
}