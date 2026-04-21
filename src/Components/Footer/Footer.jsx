import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="name">
                <h1>Sarbani.</h1>
            </div>
            <div className="copyright">
                <p>&copy; {currentYear} Portfolio. // All rights reserved.</p>
                </div>
            <div className="social">
                <div className="app">
                    <FaGithub />
                <a href="https://github.com/Bani2024">Github</a> 
                </div>
                <div className="app">
                    <FaLinkedin />
                  <a href="https://www.linkedin.com/in/sarbanibhattacharje/">LinkedIn</a> 
                </div>
                <div className="app">
                    <FaMessage />
                   <a href="mailto:sarbanibhattacharjee@gmail.com">Email</a> 
                </div>
            </div>
        </footer>
    );
};

export default Footer;