import { useNavigate, Link } from 'react-router-dom'
import Search from "./search"

const Header = () => {

    const navigate = useNavigate()

    return (
        <header>
            <Link to="/" className="logo">SEARCH DEVS</Link>
            <Search/>
            <button type="button" className="add-button" onClick={ () => navigate('/add') }>New Dev</button>
        </header>
    )

}

export default Header