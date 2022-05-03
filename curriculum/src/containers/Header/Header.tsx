import worldsImg from "./worlds.jpeg";
import greenMountainsImg from "./minimalist-green-mountains.jpg";
import blueMountainsImg from "./min-blue-mountains.png";
import "./Header.scss";
import { Navbar } from "../Navbar";

export const Header = () => {
    const allHeaders = [worldsImg, greenMountainsImg, blueMountainsImg];
    // const headerImage =
    //     allHeaders[Math.floor(Math.random() * allHeaders.length)];
    const headerImage = blueMountainsImg;
    return (
        <div className="header-container">
            {/* <Navbar /> */}
            <img src={headerImage} alt="" className="header-image" />
        </div>
    );
};
