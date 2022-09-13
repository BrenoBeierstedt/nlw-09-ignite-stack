import "./styles/main.css"
import logo from "./assets/logo.svg"
import { MagnifyingGlassPlus} from "phosphor-react";

function App() {

    return(
        <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20 my-20">
            <img src={logo}/>
            <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-duoGradient text-transparent bg-clip-text">duo</span> está aqui
            </h1>
            <div className="grid grid-cols-6 gap-6 mt-16">
                <a href='#' className="relative rounded-lg hover:bg">
                    <img src="/image 1.png" />
                    <div className="w-full pt-16 pb-4 px-4 bg-gameCardGradient bottom-0 right-0 left-0 absolute">
                        <strong className="font-bold text-white block">League of Legends</strong>
                        <span className="text-zinc-300 text-sm block">4 anúncios</span>
                    </div>
                </a>
                <a href='#' className="relative rounded-lg " >
                    <img src="/image 2.png"/>
                    <div className="w-full pt-16 pb-4 px-4 bg-gameCardGradient bottom-0 right-0 left-0 absolute">
                        <strong className="font-bold text-white block">Dota2</strong>
                        <span className="text-zinc-300 text-sm block">4 anúncios</span>
                    </div>
                </a>
                <a href='#' className="relative rounded-lg ">
                    <img src="/image 3.png"/>
                    <div className="w-full pt-16 pb-4 px-4 bg-gameCardGradient bottom-0 right-0 left-0 absolute">
                        <strong className="font-bold text-white block">Counter Strike</strong>
                        <span className="text-zinc-300 text-sm block">4 anúncios</span>
                    </div>
                </a>
                <a href='#' className="relative rounded-lg ">
                    <img src="/image 5.png"/>
                    <div className="w-full pt-16 pb-4 px-4 bg-gameCardGradient bottom-0 right-0 left-0 absolute">
                        <strong className="font-bold text-white block">Apex Legends</strong>
                        <span className="text-zinc-300 text-sm block">4 anúncios</span>
                    </div>
                </a>
                <a href='#' className="relative rounded-lg ">
                    <img src="/image 6.png"/>
                    <div className="w-full pt-16 pb-4 px-4 bg-gameCardGradient bottom-0 right-0 left-0 absolute">
                        <strong className="font-bold text-white block">Fortnite</strong>
                        <span className="text-zinc-300 text-sm block">4 anúncios</span>
                    </div>
                </a>
                <a href='#' className="relative rounded-lg ">
                    <img src="/image 7.png"/>
                    <div className="w-full pt-16 pb-4 px-4 bg-gameCardGradient bottom-0 right-0 left-0 absolute">
                        <strong className="font-bold text-white block">World of Warcraft</strong>
                        <span className="text-zinc-300 text-sm block">4 anúncios</span>
                    </div>
                </a>
            </div>
            <div className="pt-1 bg-duoGradient mt-8 self-stretch overflow-hidden rounded-lg ">
                <div className="bg-[#2A2634] px-8 py-6  flex rounded-lg justify-between items-center">
                    <div>
                        <strong className="text-2xl text-white front-black block">Não encontrou seu duo?</strong>
                        <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>

                    </div>
                    <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center">
                        <MagnifyingGlassPlus size={24}/>
                        Publicar anúncio
                    </button>
                </div>
            </div>


        </div>
    )
}

export default App
