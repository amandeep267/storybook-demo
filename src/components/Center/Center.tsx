import React from "react";
import "./Center.css";
interface CenterProps {
  children: JSX.Element;
}

function Center(props: CenterProps) {
  return <div className="Center">{props.children}</div>;
}

export default Center;
