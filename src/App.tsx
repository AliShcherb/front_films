import React, {useEffect, useState} from 'react';
import './App.css';
import './App.css';
import './App.css';git
import {useNavigate} from "react-router-dom";


type CardProps = {
    id: number;
    name: string;
    year: number;
    director: string;
    description: string;
    picture: string;
}

const FilmName = ({name}: { name: string }) => <p>{name}</p>;
const FilmYear = ({year}: { year: number }) => <p>Year: {year}</p>;
const Picture = ({picture}: { picture: string }) => <img src={picture}/>;
const Director = ({director}: { director: string }) => <p>Director: {director}</p>

const Data = () => {
    useEffect(() => {
        init();
    }, []);
    const [films, setFilms] = useState<CardProps[]>([]);
    const init = async () => {
        const response = await fetch("http://localhost:3000/films");
        const items = await response.json() as CardProps[];
        setFilms(items);
    }

    return (
        <div>
            <p>{films.map((item) => <Redirect id={item.id} name={item.name} year={item.year} description={item.description}
                                          key={item.id} picture={item.picture} director={item.director}/>)}</p></div>);

};

const Redirect = ({id, name, year, picture, director}: CardProps) => {
    let navigate = useNavigate();

    function handleClick(id: number) {
        navigate('/film/' + id)
    }

    return (
        <button onClick={() => handleClick(id)}>
            <div className="app">
                <a>
                    <FilmName name={name}/>
                    <Picture picture={picture}/>
                    <FilmYear year={year}/>
                    <Director director={director}/>
                </a>
            </div>
        </button>
    );
}





export default Data;
