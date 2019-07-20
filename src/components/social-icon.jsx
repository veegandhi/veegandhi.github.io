import React from "react";

const Icon = ({ icon = {} }) => (
  <li className="list-inline-item">
    <a href={icon.link} rel="noopener noreferrer" target="_blank">
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" />
        <i className={`fa fa-${icon.icon} fa-stack-1x fa-inverse`} />
      </span>
    </a>
  </li>
);

export default Icon;
