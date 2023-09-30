import { useLoaderData } from "react-router-dom";
import Banner from "./Banner"
import ShowProducts from "../../Components/ShowProducts";
import About from "../About/About";
import { useEffect, useState } from "react";

const Home = () => {
    const [sunglasses, setSunglasses] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses')
            .then(res => res.json())
            .then(data => setSunglasses(data));
    }, [])
    return (
        <>
            <Banner />
            <ShowProducts name={'Top rated'} sunglasses={sunglasses.slice(5, 10)} />
            <ShowProducts name={'Best sellers'} sunglasses={sunglasses.slice(0, 5)} />
            <About />
        </>
    );
};

export default Home;