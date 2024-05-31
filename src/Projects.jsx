import { Link } from "react-router-dom"
import { useState } from "react"
import Popup from "./Popup"

function Projects (){
    const [showPopup, setShowPopup] = useState(false);

    const handleClick =()=>{
        setShowPopup(true);
    }

    return (
        <>
            <div className="grid gap-6 mx-40">
                <div className="sticky top-0 flex justify-between">
                    <a href=""><img className="h-10 w-10" src="./src/assets/close.svg" alt="Close"/></a>
                    <div className="flex gap-2 text-pgray">
                        <Link className="hover:underline hover:text-pteal" to="/">Home</Link>
                        <Link className="hover:underline hover:text-pteal" to="/projects">Projects</Link>
                        <Link className="hover:underline hover:text-pteal" to="/about">About</Link>
                        <Link className="hover:underline hover:text-pteal" to="/contact">Contact</Link>
                    </div>
                </div>
                <h1 className="text-pteal">PROJECTS</h1>
                <div className="grid grid-cols-2 gap-12 text-pgray">
                    <div onClick={handleClick} className="bg-pdarkgray border border-pdarkgray rounded-lg grid grid-rows-3 items-center transition ease-in-out duration-300 hover:scale-110">
                        <img className="scale-75 row-span-1" src="./src/assets/project1.png" alt="Project 1" />
                        <h1>Message Board</h1>
                        <p>MessageBoard is a versatile app designed for seamless communication and collaboration. It allows users to create and participate in various discussion threads, share updates, and exchange ideas in real-time. Featuring an intuitive interface, customizable notifications, and robust search functionality, MessageBoard makes it easy to stay connected and organized. Whether for professional team collaboration or casual community discussions, MessageBoard provides a dynamic and interactive platform for all your messaging needs.</p>    
                    </div>
                    <div onClick={handleClick} className="bg-pdarkgray border border-pdarkgray rounded-lg grid grid-rows-3 items-center transition ease-in-out duration-300 hover:scale-110">
                    <img className="scale-75" src="./src/assets/project2.png" alt="Project 2" />
                        <h1>Weather App</h1>
                        <p>WeatherApp is your reliable source for accurate and up-to-date weather information. It offers real-time updates on current conditions, hourly and weekly forecasts, and severe weather alerts. With a user-friendly interface and customizable location tracking, you can easily stay informed about the weather in multiple places. Additional features include radar maps and sunrise/sunset times, ensuring you're always prepared for any weather situation.</p>    
                    </div>
                    <div onClick={handleClick} className="bg-pdarkgray border border-pdarkgray grid rounded-lg grid-rows-3 items-center transition ease-in-out duration-300 hover:scale-110">
                    <img className="scale-75" src="./src/assets/project2.png" alt="Project 2" />
                        <h1>Weather App</h1>
                        <p className="invisible hover:visible">WeatherApp is your reliable source for accurate and up-to-date weather information. It offers real-time updates on current conditions, hourly and weekly forecasts, and severe weather alerts. With a user-friendly interface and customizable location tracking, you can easily stay informed about the weather in multiple places. Additional features include radar maps and sunrise/sunset times, ensuring you're always prepared for any weather situation.</p>    
                    </div>
                </div>
                <Popup trigger={showPopup} setTrigger={setShowPopup}/>
            </div>
            <div className="fixed bottom-0 w-full flex align-center justify-center gap-2 bg-pdarkgray text-pgray">
                <div>MADE BY NEIL ONG</div>
                <a href=""><img className="h-5 w-5" src="./src/assets/github.svg" alt="Github"/></a>
            </div>
        </>
    )

}

export default Projects