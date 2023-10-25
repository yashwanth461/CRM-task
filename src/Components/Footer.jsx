import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul
          style={{ listStyle: "none", display: "flex", flexDirection: "row" }}
        >
          <li className="list-footer">Free Boot camp</li>
          <li className="list-footer">Student Reviews</li>
          <li className="list-footer">Youtube</li>
        </ul>
      </div>
      <div>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            marginLeft: "553px",
            marginBottom: "-21px",
            marginTop: "10px",
          }}
        >
          <li className="list-content">
            <b>+91 6305693431</b>
          </li>
          <li className="list-content"> @10000coders 2023</li>
          <li className="list-content">| All rights reserved</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
