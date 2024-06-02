import { Link } from "react-router-dom"

function Landing() {
    return (
        <>
            <div className="grid gap-6 mx-40 mt">
                <div className="sticky top-0 flex justify-between items-center mt-4">
                    <Link className="text-pdarkteal font-space font-extrabold text-3xl" to="/">|NEIL.ONG|</Link>
                    <div className="flex gap-2 text-pgray font-chivo font-bold">
                        <Link className="hover:underline hover:text-pteal" to="/">Home</Link>
                        <Link className="hover:underline hover:text-pteal" to="/projects">Projects</Link>
                        <Link className="hover:underline hover:text-pteal" to="/about">About</Link>
                        <Link className="hover:underline hover:text-pteal" to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center font-chivo mt-60">
                     <div className="flex flex-col gap-3 text-pgray">
                        <h1 className="text-6xl">Hi I&apos;m <span className="text-pteal">Neil Ong</span></h1>
                        <h2 className="text-3xl">Fullstack Developer</h2>
                        <div className="grid grid-rows-2 gap-1">
                            <Link to="/contact"><button className="w-3/6 h-full bg-pdarkgray border border-black rounded-full transition ease-in-out duration-300 hover:bg-pteal hover:text-black">Hire Me</button></Link> 
                            <div className="flex gap-3">
                                <a href=""><img className="h-10 w-10" src="./src/assets/linkedin.svg" alt="LinkedIn"/></a>
                                <a href=""><img className="h-10 w-10" src="./src/assets/github.svg" alt="Github"/></a>
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

export default Landing