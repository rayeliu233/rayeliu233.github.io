// Developed by Chouseki
// Last modifed date: Nov 7, 2023
// Change: changed footer name

import React from "react";

function Footer({ light }) {
  return (
    <footer className={light ? "footer light" : "footer"}>
      <div className="container">
        <span className="copyright">
          &copy; {new Date().getFullYear()} by <a href="mailto:rayeliu233@gmail.com">Chouseki</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
