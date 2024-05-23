import { Link } from "react-router-dom"
import { useState } from "react"
import Popup from "./Popup"

function Projects (){
    const [showPopup, setShowPopup] = useState(false);

    const handleClick =()=>{
        setShowPopup(true);
    }

    return (
        <div className="grid gap-6 mx-40">
            <div className="sticky top-0 flex justify-between">
                <a href="">Logo</a>
                <div className="flex gap-2">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <Link to="/popup/">Popup</Link>
            <h1>PROJECTS</h1>
            <div className="grid grid-cols-2 gap-12">
                <div onClick={handleClick} className="border border-black grid grid-rows-3 items-center transition ease-in-out duration-300 hover:scale-110">
                    <img className="scale-75" src="./src/assets/project1.png" alt="Project 1" />
                    <h1>PROJECT NAME</h1>
                    <p>Quick summary popup on click</p>    
                </div>
                <div onClick={handleClick} className="border border-black grid grid-rows-3 items-center transition ease-in-out duration-300 hover:scale-110">
                <img className="scale-75" src="./src/assets/project2.png" alt="Project 2" />
                    <h1>PROJECT NAME</h1>
                    <p>Quick summary popup on click</p>    
                </div>
                <div onClick={handleClick} className="border border-black grid grid-rows-3 items-center transition ease-in-out duration-300 hover:scale-110">
                <img className="scale-75" src="./src/assets/project2.png" alt="Project 2" />
                    <h1>PROJECT NAME</h1>
                    <p className="invisible hover:visible">Quick summary popup on click</p>    
                </div>
            </div>
            
            <button onClick={handleClick}>CLICK</button>

            <div className="absolute bottom-0">MADE BY NEIL ONG</div>
            <Popup trigger={showPopup} setTrigger={setShowPopup}/>
        </div>
    )

}

export default Projects