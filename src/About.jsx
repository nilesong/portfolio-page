import { Link } from "react-router-dom"

function About (){
    return(
        <div className="grid gap-6 mx-40">
        <Link to="/">Home</Link>
        <div className="grid grid-cols-3 gap-3">
            <div className="grid grid-row-3 border border-black">
                <h1>Frontend Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum repellat omnis, dignissimos quia porro. Cupiditate aspernatur velit porro labore, maxime, eligendi unde rerum necessitatibus magnam natus quod temporibus enim!</p>
                <div><img src="" alt="test" />IMG POPUP</div>
            </div>
            <div className="grid grid-row-3 border border-black">
                <h1>Frontend Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum repellat omnis, dignissimos quia porro. Cupiditate aspernatur velit porro labore, maxime, eligendi unde rerum necessitatibus magnam natus quod temporibus enim!</p>
                <div><img src="" alt="test" />IMG POPUP</div>
            </div>
            <div className="grid grid-row-3 border border-black">
                <h1>Frontend Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum repellat omnis, dignissimos quia porro. Cupiditate aspernatur velit porro labore, maxime, eligendi unde rerum necessitatibus magnam natus quod temporibus enim!</p>
                <div><img src="" alt="test" />IMG POPUP</div>
            </div>
        </div>

        </div>
    )
}

export default About
