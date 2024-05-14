import React from "react";

const today = new Date();

const month = today.month();
const year = today.year();
const day = today.day();
const currrentDate = `${day}/${month}/${year}`;

function Date() {
  return (
    <div>
      <h1>{currrentDate}</h1>
    </div>
  );
}

export default Date;
