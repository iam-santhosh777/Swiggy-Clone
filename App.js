/**
 * 
 * <div id="parent">
 *      <div id="child1">
 *          <h1>i'm an H1 tag</h1>
 *          <h2>i'm an H2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>i'm an H1 tag</h1>
 *          <h2>i'm an H2 tag</h2>
 *      </div>
 *  </div>
 * 
 * 
 * react element is a object at the end
 * 
 * jsx that exist - for now this is a basic react.
 * 
 * 
 * 
 * 
 */

const parent = React.createElement("div", 
{id: "parent"}, [React.createElement("div", {id: "child1"}, 
[React.createElement("h1", {}, "i'm an H1 tag"), React.createElement("h2", {}, "i'm an H2 tag")]), React.createElement("div", {id: "child2"}, 
[React.createElement("h1", {}, "i'm an H1 tag"), React.createElement("h2", {}, "i'm an H2 tag")])])

console.log(parent);
const rootEl = ReactDOM.createRoot(document.getElementById('root'));
rootEl.render(parent);