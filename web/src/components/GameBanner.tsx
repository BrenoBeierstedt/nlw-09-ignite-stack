
interface GameBannerProps{
    bannerUrl: string;
    title: string;
    adsCount: number;
}
export function GameBanner(props: GameBannerProps){
    return (
        <a href='#' className="relative rounded-lg hover:bg">
            <img src={props.bannerUrl} />
            <div className="w-full pt-16 pb-4 px-4 bg-gameCardGradient bottom-0 right-0 left-0 absolute">
                <strong className="font-bold text-white block">{props.title}</strong>
                <span className="text-zinc-300 text-sm block">{props.adsCount} anúncio(s)</span>
            </div>
        </a>
    )
}