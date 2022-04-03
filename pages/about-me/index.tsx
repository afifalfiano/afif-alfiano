import { motion } from "framer-motion";
import Meta from "../../components/meta";



const AboutMe = () => { 
    return (
        <motion.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .1, duration: 1, type: 'tween'}}>
        <Meta />
        <div className="container px-5 py-8 mx-auto">
            <div className="flex justify-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 text-center md:text-left pb-8">
            About Me.
            </h1>
            </div>
            <div className="prose prose-slate">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter leading-tight ">Hi 👋, I'm Afif Alfiano</h1>
                <ul>
                    <li>
                    🌱 I’m currently learning React JS, Next JS
                    </li>
                    <li>
                    📝 I regularly write articles on https://afifalfiano.my.id
                    </li>
                    <li>
                    💬 Ask me about Angular 2+, Vue JS, React JS
                    </li>
                    <li>
                    📫 How to reach me afifalfiano2@gmail.com
                    </li>
                    <li>
                    ⚡ Fun fact Explorer and Researcher
                    </li>
                </ul>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter leading-tight pt-5 ">🧑🏽‍💻 Experience   </h1>
                <ul>
                    <li>
                        <div>
                        <h1 className="text-xl md:text-xl font-semibold tracking-tighter leading-tight ">💻  Badan Sistem Informasi - Universitas Islam Indonesia</h1>
                        <ul>
                            <li>
                                <div>
                                <h1 className="text-xl md:text-xl font-semibold tracking-tighter leading-tight ">📚 &nbsp; Frontend Developer (Sep 2020 - Present)</h1>
                                <ul >
                                <li> Implement the design into an application using the Angular frontend framework. </li>
                                <li> Integrate API with backend to communicate data. </li>
                                <li> Contribute to making some of the components used in the UII application and the showcase is here https://pilarng.github.io/</li>
                                <li> Create unit test, integrate test and e2e test on every project (optional)</li>
                                <li> Cypress for tooling e2e test and jasmine-karma for unit and integrate test.</li>
                                <li> Research and implementation module federation on internal application.</li>
                                </ul>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h1 className="text-xl md:text-xl font-semibold tracking-tighter leading-tight ">🖥 &nbsp; UI/UX Designer (Jan 2020 - Aug 2020)</h1>
                                    <ul>
                                    <li>Create product designs with high-fidelity and wireframe.</li>
                                    <li>Use Figma as a tool for designing a product.</li>
                                    <li>Create documentation or manual books system and video tutorials.</li>
                                    <li>Create an animation for state loading on Figma using Figmotion.</li>
                                    <li>Create some icons for menu applications.</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                            <div>
                                    <h1 className="text-xl md:text-xl font-semibold tracking-tighter leading-tight ">⌨️  &nbsp; IT Support (Jan 2019 - Jan 2020)</h1>
                                    <ul>
                                    <li>Handle website https://bsi.uii.ac.id to manage content and improvement website using WordPress</li>
                                    <li>Communicate politely and calmly to stakeholders when there are system complaints</li>
                                    <li>Reinstall some personal computer or laptop that need to be reinstall</li>
                                    <li>Create flyer and poster to promote UIIAcademy to share knowledge</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                        </div>
                    </li>
                    
                </ul>

            </div>

        </div>
        </motion.div>
    )
}

export default AboutMe;