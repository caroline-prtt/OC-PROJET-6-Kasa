//Pas besoin d'importer également {BrowserRouter as Router} car importé et géré dans index.jsx
import {Routes, Route} from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Accomodation from "../../pages/Accomodation";
import PageNotFound from "../../pages/PageNotFound";

function RoutesApp () {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/accomodation" element={<Accomodation/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    )  
}

export default RoutesApp;