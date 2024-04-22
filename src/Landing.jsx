function Landing() {
    return (
        <div className="grid gap-6 mx-40">
            <div className="flex justify-between">
                <a href="">Logo</a>
                <div className="flex gap-2">
                    <a href="">link 1</a>
                    <a href="">link 2</a>
                    <a href="">link 3</a>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>picture</div>
                <div className="grid grid-rows-3">
                    <h1>Hi I'm Name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores necessitatibus explicabo, quidem laboriosam nisi molestias quod ea vero eius expedita dolorem possimus. Suscipit voluptate aspernatur ad pariatur. Et, consequatur est?</p>
                    <div>
                    <a href="">link 1</a>
                    <a href="">link 2</a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>PUT SKILLS HERE</div>
                <div>PUT SKILLS HERE 2</div>
            </div>
            <div>
                <a href="">CONTACT</a>
            </div>
        </div>
    )
}

export default Landing