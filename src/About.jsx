import { Link } from "react-router-dom"
import { useState } from "react";

function About (){
    const [state, setState] = useState(true);

    const handleMove = () =>{
        setState(false);
    }

    const handleLeave = () =>{
        setState(true);
    }

    return(
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
            <div className="grid grid-cols-3 gap-3">
                <div className="grid grid-row-3 border border-black">
                    <h1>Frontend Development</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum repellat omnis, dignissimos quia porro. Cupiditate aspernatur velit porro labore, maxime, eligendi unde rerum necessitatibus magnam natus quod temporibus enim!</p>
                    <div className="flex flex-wrap items-center justify-around">                
                        <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-black flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                            {state && <img className="h-10 w-10" src="./src/assets/html.svg" alt="HTML"/>}
                            {!state && <span>HTML</span>}
                        </div>
                        <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-black flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                            {state && <img className="h-10 w-10" src="./src/assets/css.svg" alt="CSS"/>}
                            {!state && <span>CSS</span>}
                        </div>
                        <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-black flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                            {state && <img className="h-10 w-10" src="./src/assets/javascript.svg" alt="Javascript"/>}
                            {!state && <span>Javascrippt</span>}
                        </div>
                        <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-black flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                            {state && <img className="h-10 w-10" src="./src/assets/react.svg" alt="ReactJS"/>}
                            {!state && <span>React JS</span>}
                        </div>
                        <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-black flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                            {state && <img className="h-10 w-10" src="./src/assets/tailwind.svg" alt="Tailwind"/>}
                            {!state && <span>Tailwind</span>}
                        </div>
                        <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-black flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                            {state && <img className="h-10 w-10" src="./src/assets/github.svg" alt="Github"/>}
                            {!state && <span>GitHub</span>}
                        </div>
                    </div>

                </div>
                <div className="grid grid-row-3 border border-black">
                    <h1>Frontend Development</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum repellat omnis, dignissimos quia porro. Cupiditate aspernatur velit porro labore, maxime, eligendi unde rerum necessitatibus magnam natus quod temporibus enim!</p>
                    <div className="flex flex-wrap items-center justify-around">                
                        <div className="border border-black  transition ease-in-out duration-300 hover:scale-110"><img src="./src/assets/github.svg" alt="Github"/></div>
                        <div className="border border-black transition ease-in-out duration-300 hover:scale-110"><img src="./src/assets/github.svg" alt="Github"/></div>
                        <div className="border border-black transition ease-in-out duration-300 hover:scale-110"><img src="./src/assets/github.svg" alt="Github"/></div>
                        <div className="border border-black transition ease-in-out duration-300 hover:scale-110"><img src="./src/assets/github.svg" alt="Github"/></div>
                        <div className="border border-black transition ease-in-out duration-300 hover:scale-110"><img src="./src/assets/github.svg" alt="Github"/></div>
                        <div className="border border-black transition ease-in-out duration-300 hover:scale-110"><img src="./src/assets/github.svg" alt="Github"/></div>
                    </div>
                </div>
                
                <div className="grid grid-row-3 border border-black">
                    <h1>Frontend Development</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum repellat omnis, dignissimos quia porro. Cupiditate aspernatur velit porro labore, maxime, eligendi unde rerum necessitatibus magnam natus quod temporibus enim!</p>
                    <div className="flex flex-wrap items-center justify-around">                
                        <div className="border border-black transition ease-in-out duration-300 hover:scale-110"><img src="./src/assets/github.svg" alt="Github"/></div>
                        <div className="border border-black transition ease-in-out duration-300 hover:scale-110"><img src="./src/assets/github.svg" alt="Github"/></div>
                        <div className="border border-black transition ease-in-out duration-300 hover:scale-110"><img src="./src/assets/github.svg" alt="Github"/></div>
                        <div className="border border-black transition ease-in-out duration-300 hover:scale-110"><img src="./src/assets/github.svg" alt="Github"/></div>
                        <div className="border border-black transition ease-in-out duration-300 hover:scale-110"><img src="./src/assets/github.svg" alt="Github"/></div>
                        <div className="border border-black transition ease-in-out duration-300 hover:scale-110"><img src="./src/assets/github.svg" alt="Github"/></div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0">MADE BY NEIL ONG</div>
        </div>
    )
}

export default About
