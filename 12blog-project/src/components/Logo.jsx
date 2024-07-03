import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img src={"/src/assets/logo.png"} width={width} alt="logo" />
    </div>
  );
}

export default Logo;
