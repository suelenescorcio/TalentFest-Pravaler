import './style.css';

function Header({className}){
    return(
        <header className='header'>
            <img src='https://www.pravaler.com.br/cdn/images/logo.svg' alt='Logo pravaler' className={className}/>
        </header>
    );
}

export default Header;
