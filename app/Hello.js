const React = require("react");

const Hello = ({ first, last, auth }) => {
  return (
    <div>
      <h1>
        Hello, {first} {last} {auth ? "True" : "False"}
      </h1>
    </div>
  );
};

export default Hello;
