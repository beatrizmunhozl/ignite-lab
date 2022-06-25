import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Subscribe from "./pages/subscribe"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Subscribe />}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/dashboard/lesson/:slug" element={<Dashboard/>}/>
        </Routes>
    )
}

export default Router