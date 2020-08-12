import React from "react";
import propTypes from "prop-types";

export default function Buttton(props) {
    const className = ["button"];
    if(props.isPrimary) className.push("button-primary");
    if(props.isWideMobile) className.push("button-wide-mobile");
    if(props.isSmall) className.push("button-sm");

    return <button className={className.join(" ")}>{props.children}</button>
}

Buttton.propTypes = {
    isPrimary: propTypes.bool,
    isWideMobile: propTypes.bool,
    isSmall: propTypes.bool
};