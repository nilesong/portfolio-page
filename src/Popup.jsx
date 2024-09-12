// MODULE CURRENTLY UNUSED
import PropTypes from 'prop-types'
import { useState } from 'react';

function Popup({trigger, setTrigger}){

    Popup.propTypes = {
        trigger: PropTypes.bool.isRequired,
        setTrigger: PropTypes.bool,
    }
    const [show, setShow] = useState(true);

    const handleMove = () =>{
        setShow(false);
    }

    const handleLeave = () =>{
        setShow(true);
    }

    const handleClose = ()=>{
        setTrigger(false);
    }

    return (
        (trigger &&
            <div className="fixed top-0 left-0 w-full h-lvh flex justify-center bg-gray-900/50">
                <div className="border border-black bg-pdarkgray w-3/6 h-3/6 mt-10 text-pgray">
                    {/* PROJECT NAME & SUMMARY */}
                    <div className="flex items-center justify-between">
                    <h1>PROJECT NAME</h1>
                    <button onClick={handleClose}><img className="h-7 w-7" src="./public/assets/close.svg" alt="Close"/></button>
                    </div>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At tempore natus quasi voluptatum animi eius dignissimos, facilis deserunt autem aspernatur commodi in rem quaerat tempora nulla nesciunt expedita, tenetur placeat.</p>

                    {/* MADE WITH */}
                    <div>
                        <h2>MADE WITH</h2>
                        <div className="flex flex-wrap items-center justify-around">                
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-black flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {show && <img className="h-10 w-10" src="./public/assets/html.svg" alt="HTML"/>}
                                {!show && <span>HTML</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-black flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {show && <img className="h-10 w-10" src="./public/assets/css.svg" alt="CSS"/>}
                                {!show && <span>CSS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-black flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {show && <img className="h-10 w-10" src="./public/assets/javascript.svg" alt="Javascript"/>}
                                {!show && <span>Javascript</span>}
                            </div>
                        </div>
                    </div>

                    {/* LINKS */}
                    <div className="grid grid-flow-col grid-cols-2 gap-4">
                        <a className="flex flex-wrap items-center justify-center gap-1 border border-black" href="">
                             <div>
                                  <img className="h-6 w-6" src="./public/assets/github.svg" alt="Github" />
                              </div>
                             <span>Github</span>
                        </a>
                        <a className="flex flex-wrap items-center justify-center gap-1 border border-black" href="">
                             <div>
                                  <img className="h-6 w-6" src="./public/assets/github.svg" alt="Github" />
                              </div>
                             <span>Github</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    )
}

export default Popup