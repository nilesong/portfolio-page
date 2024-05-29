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
        <>
            <div className="grid gap-6 mx-40">
                <div className="sticky top-0 flex justify-between">
                    <a href=""><img className="h-10 w-10" src="./src/assets/github.svg" alt="Github"/></a>
                    <div className="flex gap-2 text-pgray">
                        <Link className="hover:underline hover:text-pteal" to="/">Home</Link>
                        <Link className="hover:underline hover:text-pteal" to="/projects">Projects</Link>
                        <Link className="hover:underline hover:text-pteal" to="/about">About</Link>
                        <Link className="hover:underline hover:text-pteal" to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <div className="grid grid-row-3 border border-pdarkgray rounded-lg bg-pdarkgray text-pgray">
                        <h1>Frontend Development</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum repellat omnis, dignissimos quia porro. Cupiditate aspernatur velit porro labore, maxime, eligendi unde rerum necessitatibus magnam natus quod temporibus enim!</p>
                        <div className="flex flex-wrap items-center justify-around">                
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/html.svg" alt="HTML"/>}
                                {!state && <span>HTML</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/css.svg" alt="CSS"/>}
                                {!state && <span>CSS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/javascript.svg" alt="Javascript"/>}
                                {!state && <span>Javascrippt</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/react.svg" alt="ReactJS"/>}
                                {!state && <span>React JS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/tailwind.svg" alt="Tailwind"/>}
                                {!state && <span>Tailwind</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/github.svg" alt="Github"/>}
                                {!state && <span>GitHub</span>}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-row-3 border border-pdarkgray rounded-lg bg-pdarkgray text-pgray">
                        <h1>Frontend Development</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum repellat omnis, dignissimos quia porro. Cupiditate aspernatur velit porro labore, maxime, eligendi unde rerum necessitatibus magnam natus quod temporibus enim!</p>
                        <div className="flex flex-wrap items-center justify-around">                
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/html.svg" alt="HTML"/>}
                                {!state && <span>HTML</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/css.svg" alt="CSS"/>}
                                {!state && <span>CSS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/javascript.svg" alt="Javascript"/>}
                                {!state && <span>Javascrippt</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/react.svg" alt="ReactJS"/>}
                                {!state && <span>React JS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/tailwind.svg" alt="Tailwind"/>}
                                {!state && <span>Tailwind</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/github.svg" alt="Github"/>}
                                {!state && <span>GitHub</span>}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-row-3 border border-pdarkgray rounded-lg bg-pdarkgray text-pgray">
                        <h1>Frontend Development</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum repellat omnis, dignissimos quia porro. Cupiditate aspernatur velit porro labore, maxime, eligendi unde rerum necessitatibus magnam natus quod temporibus enim!</p>
                        <div className="flex flex-wrap items-center justify-around">                
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/html.svg" alt="HTML"/>}
                                {!state && <span>HTML</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/css.svg" alt="CSS"/>}
                                {!state && <span>CSS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/javascript.svg" alt="Javascript"/>}
                                {!state && <span>Javascrippt</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/react.svg" alt="ReactJS"/>}
                                {!state && <span>React JS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/tailwind.svg" alt="Tailwind"/>}
                                {!state && <span>Tailwind</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {state && <img className="h-10 w-10" src="./src/assets/github.svg" alt="Github"/>}
                                {!state && <span>GitHub</span>}
                            </div>
                        </div>
                    </div>                                       
                </div>
            </div>
            <div className="fixed bottom-0 w-full flex align-center justify-center gap-2 bg-pdarkgray text-pgray">
            <div>MADE BY NEIL ONG</div>
            <a href=""><img className="h-5 w-5" src="./src/assets/github.svg" alt="Github"/></a>
            </div>
            </>
    )
}

export default About
