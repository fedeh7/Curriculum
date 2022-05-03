import React from "react";
import { Header } from "../containers/Header";
import { Navbar } from "../containers/Navbar";
import "./Page.scss";

export const Page = () => {
    return (
        <div className="Page">
            <Navbar />
            <Header />
            {/* <Body /> */}
            <ul className="body-text">
                <li>Foto no tan seria</li>
                <li>Que estilo quiero, 8bit, dibujado, etc</li>
                <li>
                    Buscar foto para el header, montaña o espacio o algo
                    minimalista en general
                </li>
                <li>
                    Como hacer que el texto sobre que soy se borre y reemplaze
                </li>
                <li>Titulos con Letras transparentes buscar</li>
                <li>
                    Animaciones flechitas que rebotan y cuando clickean si
                    mueven y arrastran un componente hacia arriba
                </li>
                <li>
                    Flechitas que cambian la pagina a la proxima cuestion, como
                    un libro
                </li>
            </ul>
            <p>EXTRA</p>
            <p>
                Ver de clonar el jueguito del dinosaurio de google para el
                header
            </p>
        </div>
    );
};
