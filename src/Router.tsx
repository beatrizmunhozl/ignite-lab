import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>HOME</h1>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/dashboard/lesson/:slug" element={<Dashboard/>}/>
        </Routes>
    )
}

export default Router