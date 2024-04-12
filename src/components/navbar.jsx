// Imports the React library, which is necessary for creating React components
import React from "react"; 

// Imports the Link component from the react-router-dom library, which is used for navigation
import { Link } from "react-router-dom"; 

// Imports the ShoppingCart icon component from the phosphor-react library
import { ShoppingCart } from "phosphor-react"; 

// Imports the styles from the "navbar.css" file located in the same directory as this component
import "./navbar.css"; 


// Defines a functional component called Navbar
export const Navbar = () => { 
  return (
    <div className="navbar"> {/* Renders a div element with the class name "navbar" */}

      <div className="links"> {/* Renders a div element with the class name "links" */}

        <Link to="/"> Shop </Link> {/* Renders a Link component that navigates to the root ("/") route when clicked, and displays the text "Shop" */}
        <Link to="/contact"> Contact </Link> {/* Renders a Link component that navigates to the "/contact" route when clicked, and displays the text "Contact" */}
        <Link to="/cart"> <ShoppingCart size={30} /> </Link> {/* Renders a Link component that navigates to the "/cart" route when clicked, and renders a ShoppingCart icon component with a size of 32 */}
     
      </div>

    </div>
  );
};