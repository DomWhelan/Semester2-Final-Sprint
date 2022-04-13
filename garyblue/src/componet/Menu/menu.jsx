import React, { useState } from "react";

const Menu = () => {
  const [mealtype, setMealType] = useState([
    { category: "c1", name: "food item 1" },
    {},
    {},
  ]);
  return (
    <div>
      <h1 style={{ marginTop: "2rem" }}>
        <span>
          <img
            src="https://images.unsplash.com/photo-1511421616335-5a9846f1afcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
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
            src="https://images.unsplash.com/photo-1529808785564-5ea5054b2d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt="Menu Pic"
            width="400rem"
            height="132rem"
            class="shadow ms-5"
            style={{
              borderRadius: "1rem",
            }}
          />
        </span>
      </h1>
      <section class="bg-info w-75 p-3 h-25 m-auto">
        {" "}
        <img
          class="bg-image"
          src=""
          alt="type1"
          width="24rem"
          height="20rem"
          border="solid 2px lightblue"
        />{" "}
      </section>
      <div>
        <section>
          <select
            class="form-select form-select-lg"
            aria-label=".form-select-lg"
          >
            <option selected>Select a menu item</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </section>
      </div>
    </div>
  );
};

export default Menu;
