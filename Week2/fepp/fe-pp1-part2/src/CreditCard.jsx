import React from "react";
import visaLogo from "./assets/images/visa.png";
import masterLogo from "./assets/images/master.png";

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  // last 4 numbers of the card
  const lastDigits = number.slice(-4);

  // Format month (add leading zero if needed)
  const formattedMonth = expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;

  // Choose card logo
  const cardLogo = type === "Visa" ? visaLogo : masterLogo;

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: "1rem",
    borderRadius: "10px",
    width: "300px",
    fontFamily: "sans-serif",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "0.5rem",
    margin: "1rem",
  };

  return (
    <div style={cardStyle}>
      <div style={{ textAlign: "right" }}>
        <img src={cardLogo} alt={type} style={{ height: "20px" }} />
      </div>
      <div style={{ fontSize: "1.2rem", letterSpacing: "2px" }}>
        •••• •••• •••• {lastDigits}
      </div>
      <div style={{ textAlign:"left"}}>
        <span>Expires {formattedMonth}/{expirationYear}</span> <span style={{ marginLeft: "10px" }}>{bank}</span>
      </div>
      <div style={{ textAlign:"left"}}>{owner}</div>
    </div>
  );
}

export default CreditCard;
