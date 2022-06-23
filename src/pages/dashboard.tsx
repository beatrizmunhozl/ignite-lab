import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Video from "../components/video"

const Dashboard = () => {
    //flex-col => flex-direction: column
    //min-h => min-height || min-h-screen => min-height: 100vh
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1 ">
                <Video/>
                <Sidebar/>
            </main>
            
        </div>
    )
}

export default Dashboard