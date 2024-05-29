import { Link } from "react-router-dom";

function Contact(){
    return(
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
                    <div className="text-pgray grid grid-rows-2 gap-3">
                        <h1 className="text-7xl font-extrabold">You can reach me directly:</h1>
                        <div>
                            <h2 className="text-2xl font-extrabold">Email</h2>
                            <p>email@email.com</p>
                        </div>

                    
                    </div>

                    <form action="" className="grid grid-rows-4 gap-4 text-pgray">
                        <input className="bg-pdarkgray" type="text" placeholder="Name" />
                        <input className="bg-pdarkgray" type="email" placeholder="Email" />
                        <textarea className="bg-pdarkgray" name="" id="" placeholder="Message"></textarea>
                        <button className="bg-pdarkgray border border-black rounded-full transition ease-in-out duration-300 hover:bg-pteal hover:text-black">Send Message</button>
                    </form>
                </div>

            </div>
            <div className="fixed bottom-0 w-full flex align-center justify-center gap-2 bg-pdarkgray text-pgray">
                <div>MADE BY NEIL ONG</div>
                <a href=""><img className="h-5 w-5" src="./src/assets/github.svg" alt="Github"/></a>
            </div>
        </>
    )
}

export default Contact