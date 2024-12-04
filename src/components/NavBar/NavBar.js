
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center gap-8">
            <ul className="flex justify-between items-center gap-4">
                <li><a href="/materiales">Materiales</a></li>
                <li><a href="/tapices">Tapices</a></li>
                <li><a href="/kits-cursos">Kits & Cursos</a></li>
            </ul>
            <CartWidget/> 
        </nav>
    );
  };
  
  export default NavBar;
  