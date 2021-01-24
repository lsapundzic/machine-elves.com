import React from "react";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={props.imgUrl} alt={`Cat by the name of ${props.name}`}></img>
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default ContactCard;
