import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@/less/main.less";
import List from "@/ts/components/List.tsx";
import ScrollToTop from "@/ts/helpers/ScrollToTop.ts";
import Home from "@/ts/views/Home.tsx";
import NotFound from "@/ts/views/NotFound.tsx";
const App = () => {

    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/list' element={<List/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </Router>
    );
};



export default App;
