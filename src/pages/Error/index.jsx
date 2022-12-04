import './error.css';
import { Link } from 'react-router-dom';


export default function Error(){
    return (
        <div className='container-error'>
            <Link to="/">
                Voltar para home
            </Link>
        </div>
    )
}