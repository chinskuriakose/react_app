
const Hello = props => { // instead of props we can destructure it as {name, age}
    console.log(props); 
    return (
        <div className="AppHeader">
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    )
}

export default Hello;