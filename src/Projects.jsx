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
            <Link to="/">HOME</Link>
            <Link to="/popup/">Popup</Link>
            <h1>PROJECTS</h1>
            <div className="grid grid-cols-3 gap-4">
                <div onClick={handleClick} className="border border-black grid grid-rows-3 items-center">
                    <h1>Screenshot</h1>
                    <h1>PROJECT NAME</h1>
                    <p>Quick summary popup on click</p>    
                </div>
                <div onClick={handleClick} className="border border-black grid grid-rows-3 items-center">
                    <h1>Screenshot</h1>
                    <h1>PROJECT NAME</h1>
                    <p>Quick summary popup on click</p>    
                </div>
                <div onClick={handleClick} className="border border-black grid grid-rows-3 items-center">
                    <h1>Screenshot</h1>
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