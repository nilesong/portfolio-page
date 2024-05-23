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
                    <h1>PROJECT NAME</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At tempore natus quasi voluptatum animi eius dignissimos, facilis deserunt autem aspernatur commodi in rem quaerat tempora nulla nesciunt expedita, tenetur placeat.</p>
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
                                {!state && <span>Javascrippt</span>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="">DEMO</a>
                        <a href="">GITHUB</a>
                    </div>
                    <button onClick={handleClose}>Close</button>
                </div>
            </div>
        )
    )
}

export default Popup