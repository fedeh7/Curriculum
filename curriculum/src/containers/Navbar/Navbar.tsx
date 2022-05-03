import "./Navbar.scss";
import { NavbarItem } from "../../components/NavbarItem";
import { NavbarMenu } from "../../components/NavbarMenu";
import React from "react";

const AboutMeButton = () => <NavbarItem buttonText="About Me" href="#" />;
const Projects = () => <NavbarItem buttonText="Projects" href="#" />;
const Contact = () => <NavbarItem buttonText="Contact" href="#" />;
const SomeOtherButton = () => (
    <NavbarItem buttonText="Some other button" href="#" />
);

const menuButtons = (
    <>
        <AboutMeButton />
        <Projects />
        <Contact />
        <SomeOtherButton />
    </>
);

const DesktopMenuButtons = (
    <div className="navbar-desktop-menu">{menuButtons}</div>
);

export const Navbar = () => {
    const [mobileMenuShown, setMobileMenuShown] = React.useState(false);
    const menuSwitch = () => {
        setMobileMenuShown(!mobileMenuShown);
    };

    const openMobileMenu = () => {
        menuSwitch();
    };
    return (
        <div className="navbar-container">
            {/* <div
                className={`navbar-logo ${classNames}`}
                onAnimationStart={onAnimationStart}
                onAnimationEnd={onAnimationEnd}
            >
                logo
            </div> */}
            {DesktopMenuButtons}

            <div className="navbar-mobile-menu">
                <NavbarMenu
                    openMobileMenu={openMobileMenu}
                    mobileMenuShown={mobileMenuShown}
                />
                <div
                    className={`navbar-mobile-menu-buttons ${
                        mobileMenuShown ? "menu-shown" : "menu-hidden"
                    }`}
                >
                    {menuButtons}
                </div>
            </div>
        </div>
    );
};
