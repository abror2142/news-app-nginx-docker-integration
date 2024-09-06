import {createRoutesFromElements, createBrowserRouter, Route} from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";


export const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
    </Route>
) 

export const router = createBrowserRouter(routes)