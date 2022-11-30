import { Component } from "react";
import PropTypes from "prop-types";

import "./button.scss";

class Button extends Component {
  getSize = (size) => {
    switch (size) {
      case  "tiny":
        return [{minWidth: 24, height: 24}, "f-14"]
      case "small":
        return [{minWidth: 60, height: 45}, "f-16"]
      default:
        return [{}, null]
    }
  } 

  render() {
    const { onClick, type, size, selected, classes, style } = this.props;
    const value = type === "color" ? "" : this.props.value;

    const [btnSize, fontSize] = this.getSize(size);

    const getType = (type) => {
      if (type === "primary") return "pri";
      if (type === "color") return "color";
      return "sec";
    };
    const className = `${classes || "" } p0 btn__${getType(type)} ${selected? "sel":""} ${fontSize || ""}` 

    return (
      <button 
        onClick={onClick} 
        className={className} 
        style={{...style, ...btnSize}}
      >
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "color"]).isRequired,
  style: PropTypes.object,
  size: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;