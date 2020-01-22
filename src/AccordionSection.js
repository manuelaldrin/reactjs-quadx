import React, { Component } from "react";
import PropTypes from "prop-types";

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const { onClick, props: { isOpen, label } } = this;

    return (
      <div className="content-accordion-active"
        style={{
          background: isOpen ? "#2ba1d1" : "#444444",
          border: "0px solid #008f68",
          padding: "0"
        }}
      >
        <div className="content-accordion-label"  onClick={onClick} style={{ cursor: "pointer" }}>
          {label}
            <div  style={{ float: "right" }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {isOpen && (
          <div className="content-accordion-items"
            style={{
              background: "#fff",
              padding: "10px "
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
