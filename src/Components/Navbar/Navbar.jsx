import './Navbar.css';
import logo from '../../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = ( {onSectionClick} ) => {
  return (
    <>
      <div className="navbar-container">
        <img 
          src={logo} 
          className="logo"
          alt="Logo" 
        />
        
        <div className="nav">
          <div className="nav-logo">
            <h2 className="nav-text">AIFF</h2>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/news">News</Link> {/* Navigate to the news page */}
            <Link to="/team">Team</Link>
            <Link to="#about">Updates</Link>
            <Link to="#search" className="search-icon">
              <SearchIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
