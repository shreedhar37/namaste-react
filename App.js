const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React inside it"
);

console.log(heading);

/*
  <div id = "parent">
      <div id ="child1">
        <h1> Hello </h1>
        <h2> Hey </h2>
      </div>
       <div id ="child2">
        <h1> Hello </h1>
        <h2> Hey </h2>
      </div>
  </div>
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "H1 tag"),
    React.createElement("h2", {}, "H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "H1 tag"),
    React.createElement("h2", {}, "H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
