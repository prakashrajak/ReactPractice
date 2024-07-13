const element = document.createElement("h4");
element.innerHTML = "Hello I'm append to the html using javascript";
const id = document.getElementById("jsroot");
id.appendChild(element);

// This empty object is used for giving attributes to the element{}
// const heading = React.createElement("h4", {}, "Hello from the react world");
const heading = React.createElement(
  "h4",
  { id: "heading" },
  "Hello from the react world"
);
// the heading here will return the object
console.log("heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// lets suppose if we want to create the structure like this
// <div>
//   <div>
//   <h1>Heading</h1>
//   </div>
// </div>

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm the h1 tag!"),
    React.createElement("h2", {}, "I'm the h2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("p", {}, "I'm the p tag from child 2!"),
    React.createElement("p", {}, "I'm the p tag from child 2!"),
  ]),
]);
const mainroot = ReactDOM.createRoot(document.getElementById("mainroot"));
mainroot.render(parent);
