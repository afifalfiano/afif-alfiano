import { motion } from "framer-motion";

type TALKS = {
    title: string;
    description: string;
    link: string;
    file: string;
    isFile: boolean;
}

const DATA_TALKS: TALKS[] = [{
    title: 'Web Accessibility',
    description: 'Web accessibility adalah website yang kontennya dirancang agar dapat diakses dengan mudah termasuk oleh penyandang disabilitas.',
    link: 'https://www.youtube.com/embed/bpGIUOrK7cg',
    file: 'https://speakerdeck.com/afifalfiano/web-accessibility',
    isFile: true
  },
  {
    title: 'Tutorial Menggunakan Cypress di Angular',
    description: 'Pada kesempatan kali ini kita akan belajar bersama-sama bagaimana cara menggunakan cypress di Angular khususnya untuk e2e test',
    link: 'https://www.youtube.com/embed/Ervwl-EONSc',
    file: 'https://github.com/afifalfiano/research-cypress',
    isFile: true
  },
  {
    title: 'Testing on Frontend',
    description: 'Berbicara mengenai testing tentu ada banyak hal seperti unit, integrate dan e2e test. Mari kita pelajari secara general seperti apa itu testing',
    link: 'https://www.youtube.com/embed/nKeQ0yam8ps',
    file: 'https://speakerdeck.com/afifalfiano/testing-on-frontend',
    isFile: true
  },
  {
    title: 'Angular CLI with Bazel',
    description: 'Bazel adalah sebuah tool yang dapat meningkatkan performa dan optimize proses building di production maupun development. Metode unggulan bazel adalah first cache.',
    link: 'https://www.youtube.com/embed/DOc3VBQNgZ8',
    file: 'https://speakerdeck.com/afifalfiano/angular-cli-with-bazel',
    isFile: true
  },
  {
    title: 'BSI CoffeeTalk #7 Curiosity, menantang diri sendiri',
    description: 'Pada kesempatan kali ini saya dan mas sigit akan berbagi cerita bagaimana awal mula menjadi developer',
    link: 'https://www.youtube.com/embed/ASa3o0elXiA',
    file: '/talks',
    isFile: false
  }]

const Talks = ({talks}: any) => {
    return (
        <motion.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .1, duration: 1, type: 'tween'}}>
        <div className="container mx-auto mt-16">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
                Talks.
                </h1>
                <div>
                    {talks.map((item: any) => {
                        return (
                            <div className="flex flex-row gap-5 border-2 rounded-lg p-3 my-5">
                                <div className="flex flex-col w-full justify-between items-start">
                                <div>
                                <p key={item.title} className="font-semibold text-2xl pb-3">{item.title}</p>
                                <p className="text-lg">{item.description}</p>
                                </div>
                                    <a href={item.file} target="_blank" rel="noopener noreferrer" className={`mt-5 rounded-lg text-white font-bold py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500 transition-colors  duration-200 delay-200 ${item.isFile ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                                        {item.isFile ? 'Download Materi' : 'Tidak Ada Materi'}
                                    </a>
                                </div>
                                <div className="flex flex-auto h-52">
                                    <iframe src={item.link} className="rounded-lg"></iframe>
                                </div>
                            </div>

                        )
                    })}
                </div>
        </div>
        </motion.div>
    )
}


export const getStaticProps = async () => {
    const talks = DATA_TALKS;
    return {
        props: {
            talks:  talks
        },
    }
}

export default Talks;