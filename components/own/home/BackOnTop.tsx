import { useState } from "react";


const BackOnTop = () => {
    const [show, setShow] = useState(false);

    if (typeof window !== undefined) {
        window.onscroll = () => {
            if (window.pageYOffset > 500) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
    }

    return (
        <>
        {show && (
        <div className="fixed bottom-0 right-0 z-50">
            <button type="button" className="bg-violet-900 text-white p-2 m-4 rounded-full shadow-2xl" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <svg width="32px" height="32px" viewBox="0 0 32 32" id="Lager_31" data-name="Lager 31" xmlns="http://www.w3.org/2000/svg">
            <g id="Group_10" data-name="Group 10">
                <path id="Path_37" data-name="Path 37" d="M11.413,17.387,14,14.754V22.02A1.979,1.979,0,0,0,15.98,24h.04A1.979,1.979,0,0,0,18,22.02V15.057l.26.042,2.248,2.227a2.091,2.091,0,0,0,2.657.293A1.973,1.973,0,0,0,23.42,14.6L17.346,8.581a2.017,2.017,0,0,0-2.833,0l-5.934,6a1.97,1.97,0,0,0,0,2.806A2.016,2.016,0,0,0,11.413,17.387Z" fill="#ffffff"/>
                <path id="Path_38" data-name="Path 38" d="M16,32A16,16,0,1,0,0,16,16,16,0,0,0,16,32ZM16,4A12,12,0,1,1,4,16,12.013,12.013,0,0,1,16,4Z" fill="#ffffff"/>
            </g>
            </svg>
            </button>
        </div>
        )}
        </>
    )
}

export default BackOnTop;