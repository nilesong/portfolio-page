import { Link } from "react-router-dom"

function Landing() {
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
            <div className="grid grid-cols-2">
                <div>picture</div>
                <div className="grid grid-rows-3">
                    <h1>Hi I&apos;m Neil Ong</h1>
                    <p>Fullstack Developer</p>
                    <div className="grid grid-cols-2 gap-1">
                        <button className="border border-black rounded-full transition ease-in-out duration-300 hover:bg-red-400">Hire Me</button>
                        <button className="border border-black rounded-full transition ease-in-out duration-300 hover:bg-red-400">Hire Me</button>
                    </div>
                    <div className="grid grid-cols-2">
                        <a href=""><img className="h-10 w-10" src="./src/assets/linkedin.svg" alt="LinkedIn"/></a>
                        <a href=""><img className="h-10 w-10" src="./src/assets/github.svg" alt="Github"/></a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0">MADE BY NEIL ONG</div>
        </div>
    )
}

export default Landing