import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

type Props = {
    id: number;
    name: string;
    year: number;
    director: string;
    description: string;
    picture: string;
}
const Name = ({name}: { name: string }) => <p>{name}</p>;
const Year = ({year}: { year: number }) => <p>Year: {year}</p>;
const Description = ({description}: { description: string }) => <p>{description}</p>;
const Pic = ({picture}: { picture: string }) => <img src={picture}/>;
const Dir = ({director}: { director: string }) => <p>Director: {director}</p>

const Single = () => {

    let params = useParams();
    let  id = params.id;

    useEffect(() => {
        init();
    }, []);
    const [film, setFilm] = useState<Props>();
    const init = async () => {
        const response = await fetch("http://localhost:3000/films/"+ id);
        const item = await response.json() as Props;
        setFilm(item);
    }

    return <div>
        {film &&
            <Card
                id={film.id}
                name={film.name}
                year={film.year}
                description={film.description}
                picture={film.picture}
                director={film.director}
            />
        }
    </div>;

};

const Card = ({name, year,description, picture, director}: Props) => (
    <div className="app">
        <a>
            <Name name={name}/>
            <Pic picture={picture}/>
            <Year year={year}/>
            <Dir director={director}/>
            <Description description={description}/>
        </a>
    </div>
);


/*const Data = () => {
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

};*/

export default Single;