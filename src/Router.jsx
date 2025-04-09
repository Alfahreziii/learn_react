import { BrowserRouter, Routes, Route } from "react-router"

import LoginPage from "./pages/login"
import HomePage from "./pages/home"
import Header from "./components/header"
const Router = () => {

    return (
        <BrowserRouter>  
            <Routes>
                {/* <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} /> */}

                <Route path='setting' element={<Header />}>
                    <Route index path=":name" element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>  
    )
};

export default Router;