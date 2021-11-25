import React from "react";

const Contact = ({contact}) => {
    return(
        <div className="contact">
            <div>
                <span>{contact.firstName}</span>
                <span>{contact.lastName}</span>
               
            </div>
            <div>{contact.phone}</div>
        </div>
    );
}

export default Contact;