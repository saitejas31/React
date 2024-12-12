const heading=React.createElement("div",{id:"parent"},
                React.createElement("div",{id:"child"},
                    [React.createElement("h1",{id:"heading"},"react is crazy"),React.createElement("h2",{id:"heading"},"react is crazy")]
                ));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);