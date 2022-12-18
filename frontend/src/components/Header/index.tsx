import logo from '../../assets/imgs/logo.svg';
import './style.css';

const Header = () => {
  return (
    <header>
    <div className="dsmeta-logo-container">
        <img src={logo} alt="logo" />
        <h1>Sale Notification</h1>
    </div>
</header>
  )
}

export default Header;
