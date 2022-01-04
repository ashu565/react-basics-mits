function Title(props) {
    console.log(props);
    return (
        <>
            <div className='container container2' >{props.name}</div>
            <div className='container container2' >{props.tata}</div>
            <div className='container container2' >{props.papa}</div>
        </>
    )
}

export default Title;