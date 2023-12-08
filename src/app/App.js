import React from "react";
import HomePage from "../pages/home";
import LoginPage from "../pages/session/login";
import {Route, Routes} from "react-router-dom";
import NotFound from "../pages/session/NotFound";

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
            </Routes>
        </>
    );
}

export default App;
