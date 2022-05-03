import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import "./NavbarMenu.scss";

export const NavbarMenu = ({
    openMobileMenu,
    mobileMenuShown,
}: {
    openMobileMenu: () => void;
    mobileMenuShown: boolean;
}) => {
    const onClick = () => {
        openMobileMenu();
    };
    return (
        // <button onClick={onClick} className="navbar-menu-button-wrapper">
        //     {/* MENU */}
        //     <IconContext.Provider value={{ className: "navbar-menu-button" }}>
        //         <GiHamburgerMenu />
        //     </IconContext.Provider>
        // </button>
        <button onClick={onClick} className="navbar-menu-button-new">
            <span className="navbar-menu-button-line" id="top-line"></span>
            <span className="navbar-menu-button-line" id="middle-line"></span>
            <span className="navbar-menu-button-line" id="bottom-line"></span>
        </button>
    );
};
