import Dust2OldImg from '/src/img/Dust2Analysis/Dust2-old.jpg'
import Dust2NewImg from '/src/img/Dust2Analysis/Dust_2_CS2.jpg'

export default function Dust2Analysis(){
    return (
        <>
            <div className={'flex justify-center font-outfit font-bold py-3 text-2xl'}>
                Level Design Analysis: Counter Strike 2
            </div>
            <div className={'flex justify-start px-100 font-outfit'}>
                Dust 2, a map which has become synonymous with the Counter Strike franchise, was released in 2001.
                Since it's release over two decades ago the map has seen a handful of changes to adhere to games
                current design choices. While the visuals of the map have changed to match the current games look,
                the design has largely stayed the same. I will be looking at Dust 2 in it's current form in Counter Strike
                2 and how the design choices it was created under have shaped it into one of the most famous maps in video game
                history.
            </div>
            <div className={'flex justify-center pt-10'}>
                <div className={'grid grid-cols-2 w-300 gap-10'}>
                    <img src={Dust2OldImg} alt={'Level Design Analysis'} />
                    <img src={Dust2NewImg} alt={'Level Design Analysis'} />
                </div>
            </div>
        </>
    )
}