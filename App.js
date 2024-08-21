//nested elements
const parent = React.createElement(
     "div",
     {id:"parent"},
     React.createElement("div", {id:"child"},
     [React.createElement("h1",{},"hi im an H1 tag"),
     React.createElement("h1",{},"hi im an H1 tag")] ),
     React.createElement("div", {id:"child2"},
     [React.createElement("h1",{},"hi im an H1 tag"),
     React.createElement("h1",{},"hi im an H1 tag")] )
     
    );


const heading = React.createElement(
    "h1",
 {id: "heading"},
 "Hello World from React!!"
);

const root =ReactDOM.createRoot(document.getElementById("root"));

 root.render(heading);
 root.render(parent);