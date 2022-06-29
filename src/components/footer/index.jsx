import { FaGithub } from 'react-icons/fa';
import './style.css';

function Footer () {
  return(
    <footer className='footer'>
      <p>
        Talent Fest - Laboratória SAP007
        <a href='https://github.com/flavia-dantas'>
        <FaGithub size="30" color="#FF6312" />
        </a>
        <a href='https://github.com/juliabb'>
        <FaGithub size="30" color="#A661F6" />
        </a>
        <a href='https://github.com/leticiaantunesjpeg'>
        <FaGithub size="30" color="#F94184" />
        </a>
        <a href='https://github.com/suelenescorcio'>
        <FaGithub size="30" color="#14F166" />
        </a>
        <a href='https://github.com/vanessavb92'>
        <FaGithub size="30" color="#16D7C4" />
        </a>
      </p>
    </footer>
  );
}
export default Footer;
