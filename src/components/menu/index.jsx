
import './menu.css';
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
            <Link to="/links" className="menu-item">
                Meus Links
            </Link>
    )
}
