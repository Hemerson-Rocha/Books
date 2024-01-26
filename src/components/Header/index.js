const Header = ({list, setSeach}) => {

    const itemSelected = (e) => {
        setSeach(e.target.value)
    }

    return (
        <header className=" container-fluid">
            <h1 className="text-center">
                <img className="img-fluid" src="images/Logo-1.png" alt="" />
            </h1>
            <section className="banner">
                <img className="img-fluid" src="images/Banner-1.png" alt="" />
            </section>
            <nav className="wrap d-flex my-5">
                <ul className="nav mx-auto d-flex gap-5">
                    {list.map((item) => 
                        <li key={item}>
                            <button className="btn btn-primary" key={item} href="#" onClick={itemSelected} value={item}>
                                {item}
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header