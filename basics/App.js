let parent = React.createElement("div", {"id":"parent"}, 
[React.createElement("div", {"id":"child"}, [React.createElement("h1", {}, "I'm h1"), React.createElement("h2", {}, "I'm h2")]),
React.createElement("div", {"id":"child2"}, [React.createElement("h1", {}, "I'm h1"), React.createElement("h2", {}, "I'm h2")])]

)




// let head = React.createElement("h1", { "id": "head" }, "Hello world from react")
// let head2 = React.createElement("h2", { "id": "head" }, "Hello world from react")
// console.log(head)
let root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(parent);