import './App.css'
import {Home} from "@pages/Home/Home.tsx";
import eruda from 'eruda';
import {useEffect} from "react";



const App = () => {

    useEffect(() => {
        console.log('App render', import.meta.env.MODE);
        if (import.meta.env.MODE === 'development') {
            eruda.init();
        }
    }, []);

    return (
        <>
            <Home/>
        </>
    )
};

export default App
