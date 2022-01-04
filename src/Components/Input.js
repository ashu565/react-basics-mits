export default function Input(props) {
    return (
        <>
            <div>
                <h4>{props.name || props.children}</h4>
                <input></input>
            </div>
        </>
    )
}
