import React, { PureComponent } from "react";

export class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <p className="text-center my-3">
          ┬ęCopyright by <a href="/">redfox</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
