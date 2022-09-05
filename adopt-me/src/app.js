const Pet = (props) => {
return (
    React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed),
    ])
)

}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {id: "brand"}, "Adopt me!"),
            React.createElement(Pet, {
                name: "sadie",
                animal: "dog",
                breed: "mutt"
            }),
            React.createElement(Pet, {
                name: "bandit",
                animal: "dog",
                breed: "pom"
            }),
            React.createElement(Pet, {
                name: "rocco",
                animal: "dog",
                breed: "pyranese"
            }),
            React.createElement(Pet, {
                name: "dulce",
                animal: "dog",
                breed: "chihuahua"
            })
        ]
    )
}
ReactDOM.render(React.createElement(App), document.getElementById("root"))