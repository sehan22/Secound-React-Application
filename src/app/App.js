import React from "react";
import HomePage from "../pages/home";
import LoginPage from "../pages/session/login";
import {Route, Routes} from "react-router-dom";
import NotFound from "../pages/session/NotFound";
import FlexBoxLayout from "../pages/layouts/flexbox";
import 'normalize.css';
import GridLayout from "../pages/layouts/grid";

function App() {
    return (
        <>
            <Routes>
                <Route
                    exact path='/' element={<HomePage name="Sehan" status="Busy"/>}
                />
                <Route
                    path='/login' element={<LoginPage/>}
                />
                <Route
                    path='*' element={<NotFound/>}
                />
                <Route
                    path='/layout/flexbox' element={<FlexBoxLayout/>}
                />
                <Route
                    path='/layout/grid' element={<GridLayout/>}
                />
            </Routes>
        </>
    );
}

export default App;
