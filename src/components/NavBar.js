import reactlogo from '../images/react-icon-small.png';

function NavBar() {
    return(
        <nav>
            <img src={reactlogo} alt="logo" className= "nav--icon" />
            <h3 className= "nav--logo_text">ReactFacts</h3>
            <h4 className= "nav--title">React Course - Project 1</h4>
        </nav>
    )
}

export default NavBar