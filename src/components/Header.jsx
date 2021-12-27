function Header(props) {                   {/*Header Component*/}
    return (
        <header>
            <div className ='container'>
                <h1>{props.text}</h1>
            </div>
        </header>
    )
}

export default Header
