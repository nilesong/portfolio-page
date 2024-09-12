import { Link } from "react-router-dom"
import { useState } from "react";

function About (){
    const [show, setShow] = useState([true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]);

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
            {/* HEADER */}
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
                <div className="grid grid-rows-3 gap-4 items-center justify-center mt-10 font-chivo">
                    <div className="flex flex-col gap-3 py-2 border border-pdarkgray rounded-lg bg-pdarkgray text-pgray">
                        <h1 className="text-3xl underline italic text-pgray">Frontend Development</h1>
                        <div className="grid grid-flow-col grid-rows-2 items-center justify-center gap-6 px-60">                
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv0">
                                {show[0] && <img className="h-10 w-10" src="./public/assets/html.svg" alt="HTML"/>}
                                {!show[0] && <span>HTML</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv1">
                                {show[1] && <img className="h-10 w-10" src="./public/assets/css.svg" alt="CSS"/>}
                                {!show[1] && <span>CSS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv2">
                                {show[2] && <img className="h-10 w-10" src="./public/assets/javascript.svg" alt="Javascript"/>}
                                {!show[2] && <span>Javascript</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv3">
                                {show[3] && <img className="h-10 w-10" src="./public/assets/react.svg" alt="ReactJS"/>}
                                {!show[3] && <span>React JS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv4">
                                {show[4] && <img className="h-10 w-10" src="./public/assets/tailwind.svg" alt="Tailwind"/>}
                                {!show[4] && <span>Tailwind</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv5">
                                {show[5] && <img className="h-10 w-10" src="./public/assets/eslint.svg" alt="ESLint"/>}
                                {!show[5] && <span>ESLint</span>}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 py-2 border border-pdarkgray rounded-lg bg-pdarkgray text-pgray">
                        <h1 className="text-3xl underline italic text-pgray">Backend Development</h1>
                        <div className="grid grid-flow-col grid-rows-2 items-center justify-center gap-6">                
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv6">
                                {show[6] && <img className="h-10 w-10" src="./public/assets/mongodb.svg" alt="MongoDB"/>}
                                {!show[6] && <span>MongoDB</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv7">
                                {show[7] && <img className="h-10 w-10" src="./public/assets/nodejs.svg" alt="NodeJS"/>}
                                {!show[7] && <span>NodeJS</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv8">
                                {show[8]  && <img className="h-10 w-10" src="./public/assets/npm.svg" alt="NPM"/>}
                                {!show[8] && <span>npm</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv9">
                                {show[9] && <img className="h-10 w-10" src="./public/assets/postman.svg" alt="Postman"/>}
                                {!show[9] && <span>Postman</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv10">
                                {show[10] && <img className="h-10 w-10" src="./public/assets/express.svg" alt="ExpressJS"/>}
                                {!show[10] && <span>ExpressJS</span>}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 py-2 border border-pdarkgray rounded-lg bg-pdarkgray text-pgray">
                        <h1 className="text-3xl underline italic text-pgray">Other Tools</h1>
                        <div className="grid grid-flow-col grid-rows-2 items-center justify-center gap-6">                
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv11">
                                {show[11] && <img className="h-10 w-10" src="./public/assets/linux.svg" alt="Linux"/>}
                                {!show[11] && <span>Linux</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv12">
                                {show[12] && <img className="h-10 w-10" src="./public/assets/vscode.svg" alt="VS Code"/>}
                                {!show[12] && <span>VS Code</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv13">
                                {show[13] && <img className="h-10 w-10" src="./public/assets/github.svg" alt="GitHub"/>}
                                {!show[13] && <span>GitHub</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv14">
                                {show[14]  && <img className="h-10 w-10" src="./public/assets/chrome.svg" alt="Google Chrome"/>}
                                {!show[14] && <span>Chrome</span>}
                            </div>
                            <div onMouseOver={handleMove} onMouseLeave={handleLeave} className="w-32 h-14 border border-pblack rounded-lg flex items-center justify-center transition ease-in-out duration-300 hover:scale-110" id="sdiv15">
                                {show[15] && <img className="h-10 w-10" src="./public/assets/firefox.svg" alt="Mozilla Firefox"/>}
                                {!show[15] && <span>Firefox</span>}
                            </div>
                        </div>
                    </div>                                 
                </div>
            </div>

            {/* FOOTER */}
            <div className="fixed bottom-0 w-full flex align-center justify-center gap-2 bg-pdarkgray text-pgray">
            <div>MADE BY NEIL ONG</div>
            <a href="https://github.com/nilesong"><img className="h-5 w-5" src="./public/assets/github.svg" alt="Github"/></a>
            </div>
            </>
    )
}

export default About
