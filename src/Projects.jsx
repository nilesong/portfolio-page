import { Link } from "react-router-dom"

function Projects (){
    return (
        <div className="grid gap-6 mx-40">
            <Link to="/">HOME</Link>
            <div className="grid grid-cols-3 gap-4">
                <div className="border border-black grid grid-rows-4 items-center">
                    <h1>Screenshot</h1>
                    <h1>PROJECT NAME</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus numquam dolore, deserunt facere hic ullam error quo quod accusamus qui, dolorem fugiat repellat molestiae eveniet veniam odio suscipit aliquid temporibus.</p>
                    <div>
                        <a href="">GITHUB</a>
                        <a href="">DEMO</a>
                    </div>
                </div>
                <div className="border border-black grid grid-rows-4 items-center">
                    <h1>Screenshot</h1>
                    <h1>PROJECT NAME</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus numquam dolore, deserunt facere hic ullam error quo quod accusamus qui, dolorem fugiat repellat molestiae eveniet veniam odio suscipit aliquid temporibus.</p>
                    <div>
                        <a href="">GITHUB</a>
                        <a href="">DEMO</a>
                    </div>
                </div>
                <div className="border border-black grid grid-rows-4 items-center">
                    <h1>Screenshot</h1>
                    <h1>PROJECT NAME</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus numquam dolore, deserunt facere hic ullam error quo quod accusamus qui, dolorem fugiat repellat molestiae eveniet veniam odio suscipit aliquid temporibus.</p>
                    <div>
                        <a href="">GITHUB</a>
                        <a href="">DEMO</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Projects