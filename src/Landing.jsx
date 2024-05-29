import { Link } from "react-router-dom"

function Landing() {
    return (
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
                <div className="grid grid-cols-2">
                    <div>picture</div>
                    <div className="grid grid-rows-3 text-pgray">
                        <h1>Hi I&apos;m <span className="text-pteal">Neil Ong</span></h1>
                        <p>Fullstack Developer</p>
                        <div className="grid grid-cols-2 gap-1">
                            <button className="text-black bg-pdarkteal border border-black rounded-full transition ease-in-out duration-300 hover:bg-pteal">Hire Me</button>
                            <button className="bg-pdarkgray border border-black rounded-full transition ease-in-out duration-300 hover:bg-pteal hover:text-black">Hire Me</button>
                        </div>
                        <div className="grid grid-cols-2">
                            <a href=""><img className="h-10 w-10" src="./src/assets/linkedin.svg" alt="LinkedIn"/></a>
                            <a href=""><img className="h-10 w-10" src="./src/assets/github.svg" alt="Github"/></a>
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

export default Landing