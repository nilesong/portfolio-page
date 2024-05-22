import PropTypes from 'prop-types'

function Popup({trigger, setTrigger}){

    Popup.propTypes = {
        trigger: PropTypes.bool.isRequired,
        setTrigger: PropTypes.bool,
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
                        <a href="">HTML</a>
                        <a href="">JAVASCRIPT</a>
                        <a href="">CSS</a>
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