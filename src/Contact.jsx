import { Link } from "react-router-dom";

function Contact(){
    return(
        <div className="grid gap-6 mx-40">
            <Link to="/">HOME</Link>
            <p>You can reach me directly via email@email.com</p>

            <form action="" className="grid grid-rows-4 gap-4">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea name="" id="" placeholder="Message"></textarea>
                <button className="border border-black rounded-full transition ease-in-out duration-300 hover:bg-red-400">Send Message</button>
            </form>
            <div className="absolute bottom-0">MADE BY NEIL ONG</div>
        </div>
    )
}

export default Contact