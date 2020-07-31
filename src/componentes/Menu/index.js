import React from 'react';
import Logo from '../../assets/img/miflix.png';
import { Link } from 'react-router-dom';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './componentes/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Miflix Logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Cadastrar Vídeo
            </Button>
        </nav>
    );
}

export default Menu;