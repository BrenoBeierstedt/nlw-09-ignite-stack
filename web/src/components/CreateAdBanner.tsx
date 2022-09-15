import {MagnifyingGlassPlus} from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog"



export function CreateAdBanner(){

    return (
        <div className="pt-1 bg-duoGradient mt-8 self-stretch overflow-hidden rounded-lg ">
            <div className="bg-[#2A2634] px-8 py-6  flex rounded-lg justify-between items-center">
                <div>
                    <strong className="text-2xl text-white front-black block">Não encontrou seu duo?</strong>
                    <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>

                </div>
                <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center">
                    <MagnifyingGlassPlus size={24}/>
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    )
}
