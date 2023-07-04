import "../navbar/Navbar.scss";

import logo from "../../img/logo.png";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="horoscope" />
            </div>
            <div className="links">
                <a href="#horoscope">HOROSCOPE</a>
                <a href="#dailt">DAİLY</a>
                <a href="#tarot">TAROT</a>
                <a href="#article">ARTİCLE</a>
                <a href="#contact">CONTACT</a>
            </div>
        </div>
    );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar
