
const parent = React.createElement(
        "div", 
        {id: 'parent'}, 
        React.createElement(
            "div", 
            {id:'child'}, 
            [React.createElement("h1", {}, "H1 from Child !"), 
            React.createElement("h2", {}, "H2 from Child !")]
        
    ));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
