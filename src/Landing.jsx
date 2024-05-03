import { Link } from "react-router-dom"

function Landing() {
    return (
        <div className="grid gap-6 mx-40">
            <div className="flex justify-between">
                <a href="">Logo</a>
                <div className="flex gap-2">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>picture</div>
                <div className="grid grid-rows-3">
                    <h1>Hi I'm Neil Ong</h1>
                    <p>Fullstack Developer</p>
                    <div className="grid grid-cols-2">
                        <a href="">Hire Me</a>
                        <a href="">Contact Me!</a>
                    </div>
                    <div className="grid grid-cols-2">
                        <a href=""><img src="a" alt="LinkedIn" /></a>
                        <a href=""><img src="a" alt="GitHub" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing