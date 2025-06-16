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
                Since it's introduction over two decades ago the map has seen a handful of changes to adhere to games
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
            <div  className={'flex justify-center mt-10'}>
                Dust 2 was created with the design constraints of the Counter Strike game franchise which have evolved, but can be boiled down to the following:
            </div>
            <div  className={'flex justify-center mt-5 font-bold text-center'}>
                <ul>
                    <li>
                       Gameplay Design
                    </li>
                    <li>
                        Visual Clarity
                    </li>
                    <li>
                        Performance
                    </li>
                </ul>
            </div>
            <div className={'flex justify-start px-100 font-outfit font-bold text-3xl pt-10'}>
                Gameplay Design
            </div>
            <div className={'flex justify-start px-100 font-outfit'}>
                Every map in Counter Strike games must conform to the gameplay design decisions the game has. The first of which is
                the bomb site aspect of every map. A bomb site in Counter Strike is an area of a map which the most action will occur and
                needs to be precise in it's goals. These goals would be to make sure that there is a 'fair' balance of power between the
                Counter Terrorists and the Terrorists teams.
            </div>
            <div className={'flex justify-start px-100 font-outfit font-bold text-3xl pt-10'}>
                The A bomb site
            </div>
            <div className={'flex justify-start px-100 font-outfit'}>
                The A bomb site on Dust 2 has two main features these being both a long and close range combat area. Due to the
                drastic differences in combat encounters, the site needed to be created in a way to facilitate these.
            </div>
        </>
    )
}