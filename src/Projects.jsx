import { Link } from "react-router-dom"

function Projects (){
    return (
        <>
        {/* HEADER */}
            <div className="grid gap-6 mx-40">
                <div className="sticky top-0 flex justify-between items-center mt-4">
                    <Link className="text-pdarkteal font-space font-extrabold text-3xl" to="/">|NEIL.ONG|</Link>
                    <div className="flex gap-2 text-pgray">
                        <Link className="hover:underline hover:text-pteal" to="/">Home</Link>
                        <Link className="hover:underline hover:text-pteal" to="/projects">Projects</Link>
                        <Link className="hover:underline hover:text-pteal" to="/about">About</Link>
                        <Link className="hover:underline hover:text-pteal" to="/contact">Contact</Link>
                    </div>
                </div>

        {/* BODY */}
                <h1 className="font-chivo text-2xl underline italic text-pdarkteal mt-10">PROJECTS</h1>
                <div className="grid grid-cols-2 items-start gap-12 text-pgray mb-16 font-chivo">
                    {/* PROJECT 1 */}
                    <div className="h-full pb-4 bg-pdarkgray border border-pdarkgray rounded-lg flex flex-col items-center gap-2 transition ease-in-out duration-300">
                        <img className="scale-90 row-span-1" src="./src/assets/project1.png" alt="Project 1" />
                        <div className="flex flex-col gap-2 px-5 w-full">
                            <h1 className="font-bold text-3xl underline italic">Message Board</h1>
                            <p className="text-justify">Message Board is a community platform where you can post, view, and interact with messages. Users can create, and delete their own message posts, which appear in a chronological feed. Each post can be viewed in detail, showing full content and comments. The app keeps things straightforward, focusing on the core elements of online discussion without bells and whistles.</p>    
                        </div>
                        <div className="flex flex-col gap-2 px-5 w-full">
                            <h2 className="text-xl underline italic">Made With:</h2>
                            <div className="flex flex-wrap items-center justify-start gap-6">                
                                <div className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                    <img className="h-10 w-10" src="./src/assets/react.svg" alt="React"/>
                                </div>
                                <div className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                    <img className="h-10 w-10" src="./src/assets/css.svg" alt="CSS"/>
                                </div>
                                <div className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                    <img className="h-10 w-10" src="./src/assets/express.svg" alt="Express"/>
                                </div>
                                <div className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                    <img className="h-10 w-10" src="./src/assets/nodejs.svg" alt="NodeJS"/>
                                </div>
                                <div className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                    <img className="h-10 w-10" src="./src/assets/mongodb.svg" alt="MongoDB"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 px-5 w-full items-center justify-start">
                            <a href="https://message-board-nn7k.onrender.com/" target="_blank"><button className="h-full w-32 border border-black transition ease-in-out duration-300 bg-pdarkteal hover:bg-pteal text-black">DEMO</button></a>
                            <a href="https://github.com/nilesong/message-board" target="_blank"><img className="h-5 w-5" src="./src/assets/github.svg" alt="Github"/></a>
                        </div>
                    </div>

                    {/* PROJECT 2 */}
                    <div className="h-full pb-4 bg-pdarkgray border border-pdarkgray rounded-lg flex flex-col items-center gap-2 transition ease-in-out duration-300">
                        <img className="scale-90" src="./src/assets/project2.png" alt="Project 2" />
                        <div className="flex flex-col gap-2 px-5 w-full">
                            <h1 className="font-bold text-3xl underline italic">Weather App</h1>
                            <p className="text-justify">Weather App is a user-friendly platform that provides up-to-date weather information for any location. Users can search for a city to receive real-time weather updates. The app displays current temperature, humidity, wind speed, and weather conditions. It also offers a 3-day forecast, showing high and low temperatures and weather conditions for the upcoming week. The app is designed with a clean and intuitive interface, making it easy for users to stay informed about the weather.</p>    
                        </div>
                        <div className="flex flex-col gap-2 px-5 w-full">
                            <h2 className="text-xl underline italic">Made With:</h2>
                            <div className="flex flex-wrap items-center justify-start gap-6">                
                                <div className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                    <img className="h-10 w-10" src="./src/assets/html.svg" alt="HTML"/>
                                </div>
                                <div className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                    <img className="h-10 w-10" src="./src/assets/javascript.svg" alt="Javascript"/>
                                </div>
                                <div className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                    <img className="h-10 w-10" src="./src/assets/tailwind.svg" alt="Tailwind"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 px-5 w-full items-center justify-start">
                            <a href="https://nilesong.github.io/weather-app/" target="_blank"><button className="h-full w-32 border border-black transition ease-in-out duration-300 bg-pdarkteal hover:bg-pteal text-black">DEMO</button></a>
                            <a href="https://github.com/nilesong/weather-app" target="_blank"><img className="h-5 w-5" src="./src/assets/github.svg" alt="Github"/></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="fixed bottom-0 w-full flex align-center justify-center gap-2 bg-pdarkgray text-pgray">
                <div>MADE BY NEIL ONG</div>
                <a href="https://github.com/nilesong"><img className="h-5 w-5" src="./src/assets/github.svg" alt="Github"/></a>
            </div>
        </>
    )

}

export default Projects