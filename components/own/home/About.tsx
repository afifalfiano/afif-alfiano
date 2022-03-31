export type Stack = {
    name: string;
    color: string;
}

const STACK: Stack[] = [
    {
        name: 'HTML',
        color: '#9c61fb',
    },
    {
        name: 'CSS',
        color: '#9c61fb',
    },
    {
        name: 'Javascript',
        color: '#9c61fb',
    },
    {
        name: 'Angular JS',
        color: '#9c61fb',
    },
    {
        name: 'React JS',
        color: '#9c61fb',
    },
    {
        name: 'Typescript',
        color: '#9c61fb',
    },
    {
        name: 'Figma',
        color: '#9c61fb',
    },
    {
        name: 'PHP',
        color: '#9c61fb',
    },
    {
        name: 'Laravel',
        color: '#9c61fb',
    },
    {
        name: 'Tailwind CSS',
        color: '#9c61fb',
    },
    {
        name: 'Bootstrap',
        color: '#9c61fb',
    },
    {
        name: 'GIMP',
        color: '#9c61fb',
    },
    {
        name: 'Inkscape',
        color: '#9c61fb',
    },

]

const About = () => {

    const stack = STACK.map(item => {
        return (
            <div key={item.name} className="border-2 p-2 rounded-lg hover:text-white hover:bg-[#9c61fb]" style={{'border': `2px solid ${item.color}`}}>
                {item.name}
            </div>
        )
    });

    return (
        <div className="w-full mx-auto bg-[url('../public/assets/about/about.png')] bg-cover bg-no-repeat bg-center	" >
        <div className="container mx-auto md:grid md:grid-cols-2  sm:flex lg:py-36  gap-x-20 py-8 px-8">
            <div className="justify-center items-start lg:flex-auto  lg:flex hidden">
                <img src="../assets/about/about-me.png" alt="About" className="img w-full" width="200" loading="lazy" />
            </div>
            <div className='flex flex-col justify-center items-start flex-auto'>
                <h1 className='lg:text-8xl  lg:pb-8 text-6xl pb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>About Me</h1>
                <p className='lg:text-2xl  lg:pb-10 pb-6 text-xl '>Hello, I'm Afif Alfiano, a web developer based in Indonesia. I have experience in web design using figma, adobe xd and build from scratch.</p>
                <div className="flex flex-wrap gap-5">
                    {stack}
                </div>
            </div>
            </div>
        </div>
    )
}

export default About;