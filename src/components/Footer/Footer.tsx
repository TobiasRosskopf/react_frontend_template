// Import modules
import React from "react";

// Import styles
import "./Footer.scss";

class Footer extends React.Component {
  render(): JSX.Element {
    return (
      <footer className="mt-5">
        <div className="text-center py-3">
          &copy; 2021 Copyright: Tobias Rosskopf
        </div>
      </footer>
    );
  }
}

export default Footer;
