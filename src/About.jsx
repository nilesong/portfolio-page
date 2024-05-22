import { Link } from "react-router-dom"

function About (){
    return(
        <div className="grid gap-6 mx-40">
        <Link to="/">Home</Link>
        <div className="grid grid-cols-3 gap-3">
            <div className="grid grid-row-3 border border-black">
                <h1>Frontend Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum repellat omnis, dignissimos quia porro. Cupiditate aspernatur velit porro labore, maxime, eligendi unde rerum necessitatibus magnam natus quod temporibus enim!</p>
                <div className="flex flex-wrap items-center justify-around">                
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 1</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 2</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 3</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 4</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 5</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 6</div>
                </div>

            </div>
            <div className="grid grid-row-3 border border-black">
                <h1>Frontend Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum repellat omnis, dignissimos quia porro. Cupiditate aspernatur velit porro labore, maxime, eligendi unde rerum necessitatibus magnam natus quod temporibus enim!</p>
                <div className="flex flex-wrap items-center justify-around">                
                    <div className="border border-black  transition ease-in-out duration-300 hover:scale-110">SKILL 1</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 2</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 3</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 4</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 5</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 6</div>
                </div>
            </div>
            
            <div className="grid grid-row-3 border border-black">
                <h1>Frontend Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum repellat omnis, dignissimos quia porro. Cupiditate aspernatur velit porro labore, maxime, eligendi unde rerum necessitatibus magnam natus quod temporibus enim!</p>
                <div className="flex flex-wrap items-center justify-around">                
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 1</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 2</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 3</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 4</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 5</div>
                    <div className="border border-black transition ease-in-out duration-300 hover:scale-110">SKILL 6</div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-0">MADE BY NEIL ONG</div>
        </div>
    )
}

export default About
