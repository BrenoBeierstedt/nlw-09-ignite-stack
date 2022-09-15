import "./styles/main.css"
import logo from "./assets/logo.svg"
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import {useEffect, useState} from "react";
import * as Dialog from "@radix-ui/react-dialog"
import {GameController} from "phosphor-react";
import {Input} from "./components/Form/Input";

interface Game{
    id: string;
    title: string;
    bannerURL: string;
    _count: {
        ads: number;
    }
}


function App() {

    const [game, setGame] = useState<Game[]>([])

    useEffect(() => {
        fetch("http://192.168.0.15:3000/api/games")
            .then( res => res.json() )
            .then(data => {setGame(data)})
        console.log(game)
    },[])

    return(
        <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20 my-20">
            <img src={logo}/>
            <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-duoGradient text-transparent bg-clip-text">duo</span> está aqui
            </h1>
            <div className="grid grid-cols-6 gap-6 mt-16">
                {game.map(game => {
                    return(
                        <GameBanner
                            bannerUrl={game.bannerURL}
                            adsCount={game._count.ads}
                            title={game.title}
                            key={game.id}
                        />
                    )
                })}

            </div>
            <Dialog.Root>
                <CreateAdBanner/>
                <Dialog.Portal>
                    <Dialog.Overlay className="bg-black/60 inset-0 fixed">
                        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
                            <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>
                            <form className="mt-8 flex flex-col gap-4 ">
                                <div className="flex flex-col gap-2">
                                    <label  htmlFor="game" className="font-semibold">Qual o game?</label>
                                    <Input
                                        type="text"
                                        id="game"
                                        placeholder="Selecione o game que deseja jogar"
                                        className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                                    />

                                </div>
                                <div className="flex flex-col gap-2">
                                    <label  htmlFor="name">Seu nome (ou nickname)</label>
                                    <Input type="text" id="name" placeholder="Como te chamam dentro do game?"/>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label  htmlFor="yearsPlaying">Joga a quantos anos?</label>
                                        <Input type="number" id="yearsPlaying" placeholder="Tudo bem ser ZERO"/>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label  htmlFor="discord">Qual seu Discord?</label>
                                        <Input type="text" id="discord" placeholder="Como te chamam dentro do game?"/>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex flex-col gap-4">
                                        <label  htmlFor="weekDays">Quando Costuma Jogar?</label>
                                        <div className="flex gap-1">
                                            <button className="w-7 h-7 rounded bg-zinc-900" title="Domingo">D</button>
                                            <button className="w-7 h-7 rounded bg-zinc-900" title="Segunda-feira">S</button>
                                            <button className="w-7 h-7 rounded bg-zinc-900" title="Terça-feira">T</button>
                                            <button className="w-7 h-7 rounded bg-zinc-900" title="Quarta-feira">Q</button>
                                            <button className="w-7 h-7 rounded bg-zinc-900" title="Quinta-feira">Q</button>
                                            <button className="w-7 h-7 rounded bg-zinc-900" title="Sexta-feira">S</button>
                                            <button className="w-7 h-7 rounded bg-zinc-900" title="Sábado">S</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label  htmlFor="hourStart">Qual horário do dia?</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            <Input type="time" id="hourStart" placeholder="De"/>
                                            <Input type="time" id="hourEnd" placeholder="Até"/>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Input type="checkbox" id="voiceChannel"/>
                                    Costumo me conectar ao chat de vox
                                </div>
                                <footer className="mt-4 gap-4 flex justify-end">
                                    <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold">Cancelar</Dialog.Close>
                                    <button type="submit" className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3">
                                        <GameController className="h-6 w-6"/> Encontrar duo
                                    </button>
                                </footer>
                            </form>
                        </Dialog.Content>
                    </Dialog.Overlay>
                </Dialog.Portal>
            </Dialog.Root>

        </div>
    )
}

export default App
