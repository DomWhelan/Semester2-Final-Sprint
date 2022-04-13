import React from "react";
import Pic1 from "../../Images/Server.avif";
import Pic2 from "../../Images/menu.jpg";

const Menu = () => {
  return (
    <div>
      <h1 style={{ marginTop: "2rem" }}>
        <span>
          <img
            src={Pic1}
            alt="Server Pic"
            width="400rem"
            height="132rem"
            class="shadow me-5"
            style={{
              borderRadius: "1rem",
            }}
          />
        </span>
        Our Menu
        <span>
          <img
            src={Pic2}
            alt="Menu Pic"
            width="400rem"
            height="132rem"
            class="shadow ml-5"
            style={{
              borderRadius: "1rem",
            }}
          />
        </span>
      </h1>
    </div>
  );
};

export default Menu;
