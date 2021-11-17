
function Navbar() {
    return (
<div>
    <Link to="/">
    <button>Kõik Automaadid</button>
    </Link>
        <Link to="/Harju">
        <button>Harju Maakond</button>
    </Link>
        <Link to="/Viljandi">
        <button>Viljandi Maakond</button>
    </Link>
        <Link to="/valismaa">
        <button>Valismaa Maakond</button>
    </Link>
</div>)
    

}

export default Navbar;