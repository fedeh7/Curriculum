import React from "react";
import "./NavbarItem.scss";

export const NavbarItem = ({
    buttonText,
    href,
}: {
    buttonText: string;
    href: string;
}) => {
    return (
        <a
            href={href}
            className="navbar-item"
            onClick={() => console.log("Button clicked")}
        >
            {buttonText}
        </a>
    );
};
