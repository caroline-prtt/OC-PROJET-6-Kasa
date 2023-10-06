import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from "../../App";
import About from "../../pages/About";
import Accomodation from "../../pages/Accomodation";
import PageNotFound from "../../pages/PageNotFound";

function RoutesApp () {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/accomodation" element={<Accomodation/>}></Route>
                <Route path="*" element={<PageNotFound/>}></Route>
            </Routes>
        </Router>
    )  
}

export default RoutesApp;