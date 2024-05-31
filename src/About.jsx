import { Link } from "react-router-dom"
import { useState } from "react";

function About (){
    const [show, setShow] = useState([true, true, true, true, true, true, true, true, true, true, true, true, true]);

    const handleMove = (e) =>{
        // Variable initialization
        let divNum = ''
        const copyState = show;

        // Double digit check
        if (e.target.id.length === 5){
            divNum = Number(e.target.id[4]);
        }else{
            divNum = Number(e.target.id[4] + e.target.id[5]);
        }

        //Update state
        copyState[divNum] = false;
        setShow([...copyState]);
        
    }

    const handleLeave = (e) =>{
        // Variable initialization
        let divNum = ''
        const copyState = show;

        // Double digit check
        if (e.target.id.length === 5){
            divNum = Number(e.target.id[4]);
        }else{
            divNum = Number(e.target.id[4] + e.target.id[5]);
        }

        copyState[divNum] = true;
        setShow([...copyState]);
    }

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
                <div className="grid grid-cols-3 gap-3">
                    <div className="grid grid-row-3 gap-3 border border-pdarkgray rounded-lg bg-pdarkgray text-pgray">
                        <h1>Frontend Development</h1>
                        <p>A front-end developer is skilled in structuring web content using HTML5, styling with CSS3, and adding interactivity through JavaScript, leveraging modern ES6+ features. They are proficient in frameworks and libraries such as React, Angular, and Vue.js, which are essential for building dynamic and responsive user interfaces. Version control with Git is a core competency, enabling efficient code management and collaboration. Developers use build tools like Webpack and Babel for module bundling and transpiling modern JavaScript. Responsive design is achieved with media queries and frameworks like Bootstrap, ensuring compatibility across various devices. CSS preprocessors such as Sass/SCSS are employed for writing modular and maintainable styles. Performance optimization techniques include lazy loading, code splitting, and minification to enhance load times and efficiency. Testing skills with Jest and debugging using Chrome DevTools are crucial for maintaining code quality. Additionally, front-end developers ensure accessibility with ARIA and optimize for search engines with SEO best practices. They thrive in Agile environments, using project management and collaboration tools like JIRA and Slack to coordinate effectively with team members.</p>
                        <div className="flex flex-wrap items-center justify-around">                
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv0">
                                {show[0] && <img className="h-10 w-10" src="./src/assets/html.svg" alt="HTML"/>}
                                {!show[0] && <span>HTML</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv1">
                                {show[1] && <img className="h-10 w-10" src="./src/assets/css.svg" alt="CSS"/>}
                                {!show[1] && <span>CSS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv2">
                                {show[2] && <img className="h-10 w-10" src="./src/assets/javascript.svg" alt="Javascript"/>}
                                {!show[2] && <span>Javascript</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv3">
                                {show[3] && <img className="h-10 w-10" src="./src/assets/react.svg" alt="ReactJS"/>}
                                {!show[3] && <span>React JS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv4">
                                {show[4] && <img className="h-10 w-10" src="./src/assets/tailwind.svg" alt="Tailwind"/>}
                                {!show[4] && <span>Tailwind</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv5">
                                {show[5] && <img className="h-10 w-10" src="./src/assets/github.svg" alt="Github"/>}
                                {!show[5] && <span>GitHub</span>}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-row-3 gap-3 items-start border border-pdarkgray rounded-lg bg-pdarkgray text-pgray">
                        <h1>Backend Development</h1>
                        <p>A back-end developer is adept at server-side programming, often using languages such as Python, Java, Ruby, or Node.js to create robust and scalable applications. They are skilled in working with databases like MySQL, PostgreSQL, and MongoDB for efficient data storage and retrieval. Expertise in RESTful API design ensures seamless communication between the server and client, while proficiency in authentication and authorization mechanisms secures application data. Familiarity with cloud services such as AWS, Azure, or Google Cloud enables developers to deploy and manage applications in a scalable environment. Additionally, they utilize version control systems like Git for code management and collaboration, employ Docker for containerization, and use CI/CD pipelines to automate testing and deployment processes. Back-end developers also focus on optimizing application performance and reliability, ensuring a smooth user experience.</p>
                        <div className="flex flex-wrap items-center justify-around">                
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv6">
                                {show[6] && <img className="h-10 w-10" src="./src/assets/linux.svg" alt="Linux"/>}
                                {!show[6] && <span>Linux</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv7">
                                {show[7] && <img className="h-10 w-10" src="./src/assets/mongodb.svg" alt="MongoDB"/>}
                                {!show[7] && <span>MongoDB</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv8">
                                {show[8] && <img className="h-10 w-10" src="./src/assets/nodejs.svg" alt="NodeJS"/>}
                                {!show[8] && <span>NodeJS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv9">
                                {show[9]  && <img className="h-10 w-10" src="./src/assets/npm.svg" alt="NPM"/>}
                                {!show[9] && <span>npm</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv10">
                                {show[10] && <img className="h-10 w-10" src="./src/assets/postman.svg" alt="Postman"/>}
                                {!show[10] && <span>Postman</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv11">
                                {show[11] && <img className="h-10 w-10" src="./src/assets/github.svg" alt="Github"/>}
                                {!show[11] && <span>GitHub</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv12">
                                {show[12] && <img className="h-10 w-10" src="./src/assets/express.svg" alt="ExpressJS"/>}
                                {!show[12] && <span>ExpressJS</span>}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-row-3 gap-3 border border-pdarkgray rounded-lg bg-pdarkgray text-pgray">
                        <h1>Other Skills</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum repellat omnis, dignissimos quia porro. Cupiditate aspernatur velit porro labore, maxime, eligendi unde rerum necessitatibus magnam natus quod temporibus enim!</p>
                        <div className="flex flex-wrap items-center justify-around">                
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {show && <img className="h-10 w-10" src="./src/assets/html.svg" alt="HTML"/>}
                                {!show && <span>HTML</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {show && <img className="h-10 w-10" src="./src/assets/css.svg" alt="CSS"/>}
                                {!show && <span>CSS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {show && <img className="h-10 w-10" src="./src/assets/javascript.svg" alt="Javascript"/>}
                                {!show && <span>Javascrippt</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {show && <img className="h-10 w-10" src="./src/assets/react.svg" alt="ReactJS"/>}
                                {!show && <span>React JS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {show && <img className="h-10 w-10" src="./src/assets/tailwind.svg" alt="Tailwind"/>}
                                {!show && <span>Tailwind</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110">
                                {show && <img className="h-10 w-10" src="./src/assets/github.svg" alt="Github"/>}
                                {!show && <span>GitHub</span>}
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

export default About
