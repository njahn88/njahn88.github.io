import Dust2OldImg from '/src/img/Dust2Analysis/Dust2-old.jpg'
import Dust2NewImg from '/src/img/Dust2Analysis/Dust_2_CS2.jpg'
import Dust2AMap from '/src/img/Dust2Analysis/ASite-map.png'
import ASiteCover1 from '/src/img/Dust2Analysis/ASite-Cover1.png'
import ASiteCover1Exposed from '/src/img/Dust2Analysis/ASite-Cover-Exposed.png'
import ASiteCoverB1 from '/src/img/Dust2Analysis/ASite-CoverB-1.png'
import ASiteCoverB2 from '/src/img/Dust2Analysis/ASite-CoverB-2.png'
import ASiteGoose from '/src/img/Dust2Analysis/ASite-Goose1.png'
import ASiteGoose2 from '/src/img/Dust2Analysis/ASite-Goose2.png'
import ASiteCar1 from '/src/img/Dust2Analysis/ASite-Car1.png'
import ASiteCar2 from '/src/img/Dust2Analysis/ASite-Car2.png'

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
            <div className={'flex justify-center pt-10'}>
                <img src={Dust2AMap} alt={'Level Design Analysis'} />
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                For the section of the site that is focused around shorter range engagements the designers added more places for the
                Counter Terrorists team to use as cover, but with these added options for cover the designers needed to consider they
                goals for the long range portion of the site. They handled this by making the cover only provide real benefits for one
                entrance. Most of the cover on the site is beneficial to providing cover from those attacking from the area with the
                shorter engagements, while leaving the player exposed to the area with longer engagements.
            </div>
            <div className={'flex justify-center pt-10'}>
                <div className={'grid grid-cols-2 w-300 gap-10'}>
                    <img src={ASiteCover1} alt={'A Site Cover 1'} className={'w-200'}/>
                    <img src={ASiteCover1Exposed} alt={'Level Design Analysis'} className={'h-100'}/>
                </div>
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                For the first image this gives cover from the "Cat" position of the bomb site, while the second image shows how
                this is also exposing them to the "Long"
                position at the same time. This has balanced this position so that if you want more protected from the "Cat" position
                you must have less protection from the "Long" side. An import note is that this position does allow the player to move
                freely where as the next position restricts the players movement, making a slightly more risky position to hold.
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                These next two images show another position of cover on the A bomb site that provides cover from the "Cat" position and
                the "Long" position, but at the cost of forced reduction of movement capabilities.
            </div>
            <div className={'flex justify-center pt-10'}>
                <div className={'grid grid-cols-2 w-300 gap-10'}>
                    <img src={ASiteCoverB1} alt={'A Site Cover 1'} className={'w-200 h-100'}/>
                    <img src={ASiteCoverB2} alt={'Level Design Analysis'} className={'h-100'}/>
                </div>
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                This position gives cover from the "Cat" and "Long" position at the same time, but does restrict the player from
                being able to move backwards. The lip of the construction as seen by the red arrow in the second image prevents the player from being
                able to move backward or forward depending on where the player is looking. What this means is that if the player is
                being pressured too heavily from the "Cat" position and would like to move away, they must either run to the right (Exposing them completely
                to the "Cat" position) or jump onto the lip and retreat to the "Ramp" (Also exposing them to the "Cat" position).
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                The next and possibly most famous position in all of Dust 2 would be "Goose", a powerful position typically used by players with longer ranged weapons.
                The main goals of this position is to balance the amount of vision of the "Long" position to the amount of cover from the
                "Cat" position. Let's see how they achieved this difficult area.
            </div>
            <div className={'flex justify-center pt-10'}>
                <div className={'grid grid-cols-2 w-300 gap-10'}>
                    <img src={ASiteGoose} alt={'A Site Cover 1'} className={'w-200 h-100'}/>
                    <img src={ASiteGoose2} alt={'Level Design Analysis'} className={'h-100'}/>
                </div>
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                The "Goose" position as seen by the first image allows for the player to see almost all of "Long". This position, tucked into the back corner
                of the A site, does give full protection from the "Cat" position at the cost of not being able to see all of "Long". If the player wants to
                see more of "Long" and defend it completely, they must move to the left as seen in the second picture. What this does is gives the player full
                vision of the "Long" position with little cover while also being fully exposed to the "Cat" position.
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                The final position I would like to look at would be the "Car" position which is away slightly from the main A bomb site. This position
                allows full vision of the the "Cat", "Long", and even some of the "Middle" position with a good amount of cover. It might seem like a position that allows
                full vision of the most import choke points of the bomb site while also providing full cover would be too strong, but there is one
                key design choice that combats this, being the ability to easily reposition.
            </div>
            <div className={'flex justify-center pt-10'}>
                <div className={'grid grid-cols-2 w-300 gap-10'}>
                    <img src={ASiteCar1} alt={'A Site Cover 1'} className={'w-200 h-100'}/>
                    <img src={ASiteCar2} alt={'Level Design Analysis'} className={'h-100'}/>
                </div>
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                With this being one of the strongest positions on the A site to defend against the "Long" and "Cat" positions.
                The developers needed to counter balance that power with a few glaring flaws. These flaws being that the player, while
                having vision of both choke points, is also now able to be attacked from both those points too. The biggest power
                drain from the position would be that if the player is in trouble, they must expose themselves completely to
                both "Long" and "Cat" in order to reposition.
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                The developers of the map had to ensure that every position of the bomb site is balanced. They had "levers" so to
                say corresponding to the amount of cover, vision, and repositioning abilities of any given position. While this does
                not cover positions like "Ramp", "Ninja", "Elevator", and many more it does give an insight into while the
                designers made the choices they did and how even a small miss calculation of power could have led to an imbalance of power
                between teams.
            </div>
        </>
    )
}