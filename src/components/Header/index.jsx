import Logo from "../../assets/img/Logo.svg";
import './index.css';
import SearchBar from '../SearchBar';
import ButtonDegree from '../ButtonDegree';


const Header = () => {
    return (
        <header className='main-header'>
            <img className="logo-header" src={Logo} alt="Logo" />

            <SearchBar />
            <ButtonDegree />


        </header>
    )
}

export default Header;