import PropTypes from 'prop-types'
import { useState } from 'react';

function Popup({trigger, setTrigger}){

    Popup.propTypes = {
        trigger: PropTypes.bool.isRequired,
        setTrigger: PropTypes.bool,
    }
    const [state, setState] = useState(true);

    const handleMove = () =>{
        setState(false);
    }

    const handleLeave = () =>{
        setState(true);
    }

    const handleClose = ()=>{
        setTrigger(false);
    }

    return (
        (trigger &&
            <div className="fixed top-0 left-0 w-full h-lvh flex justify-center align-center bg-gray-900/50">
                <div className="border border-black">
                    {/* PROJECT NAME & SUMMARY */}
                    <h1>PROJECT NAME</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At tempore natus quasi voluptatum animi eius dignissimos, facilis deserunt autem aspernatur commodi in rem quaerat tempora nulla nesciunt expedita, tenetur placeat.</p>

                    {/* MADE WITH */}
                    <div>
                        <h2>MADE WITH</h2>
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
                                {!state && <span>Javascript</span>}
                            </div>
                        </div>
                    </div>

                    {/* LINKS */}
                    <div className="grid grid-flow-col grid-cols-2 gap-4">
                        <a className="flex flex-wrap items-center justify-center gap-1 border border-black" href="">
                             <div>
                                  <img className="h-6 w-6" src="./src/assets/github.svg" alt="Github" />
                              </div>
                             <span>Github</span>
                        </a>
                        <a className="flex flex-wrap items-center justify-center gap-1 border border-black" href="">
                             <div>
                                  <img className="h-6 w-6" src="./src/assets/github.svg" alt="Github" />
                              </div>
                             <span>Github</span>
                        </a>
                    </div>
                    <button onClick={handleClose}>Close</button>
                </div>
            </div>
        )
    )
}

export default Popup