function Name(props) {
    return (
        <>
            <div>
                <h1>{props.name1}</h1>
                <h2>{props.name2}</h2>
                <h4><span>Hey {" "}</span> {props.name3 || props.children}</h4>
            </div>
        </>
    )
}

const pp = 5;

const hello = () => {
    console.log("Hyeee")
}

export { pp, hello, Name as default };