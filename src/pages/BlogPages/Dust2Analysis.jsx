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
import BSiteOverview from '/src/img/Dust2Analysis/BSite-Overview.png'
import BSiteMap from '/src/img/Dust2Analysis/BSite-Map.png'
import BSiteSite from '/src/img/Dust2Analysis/BSite-Site.png'
import BSiteSite2 from '/src/img/Dust2Analysis/BSite-Site2.png'
import BSiteBackSite from '/src/img/Dust2Analysis/BSite-Backsite.png'
import BSiteCar1 from '/src/img/Dust2Analysis/BSite-Car1.png'
import BSiteCar2 from '/src/img/Dust2Analysis/BSite-Car2.png'
import Middle1 from '/src/img/Dust2Analysis/Middle-1.png'
import Middle2 from '/src/img/Dust2Analysis/Middle-2.png'
import Middle3 from '/src/img/Dust2Analysis/Middle-3.png'
import PlayerContrast1 from '/src/img/Dust2Analysis/PlayerContrast.png'
import PlayerContrast2 from '/src/img/Dust2Analysis/PlayerContrast2.png'
import PlayerContrast3 from '/src/img/Dust2Analysis/PlayerContrast3.png'
import Dust2Fps from '/src/img/Dust2Analysis/Fps_Dust2.png'



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
            <div className={'flex justify-start px-100 font-outfit font-bold text-4xl pt-10'}>
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
            <div className={'flex justify-start px-100 font-outfit font-bold text-3xl pt-10'}>
                The B bomb site
            </div>
            <div className={'flex justify-center pt-10'}>
                <div className={'grid grid-cols-2 w-300 gap-10'}>
                    <img src={BSiteOverview} alt={'A Site Cover 1'} className={'w-200 h-100'}/>
                    <img src={BSiteMap} alt={'Level Design Analysis'} className={'h-100'}/>
                </div>
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                The B bomb site of Dust 2 was designed heavily around short range engagements. Having three main entry points
                and only one of them being easily accessible from the Terrorist team, careful design choices needed to be made
                to ensure healthy and balanced gameplay.
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                The first position I would like to look at this the "Site" position. This position is by far the strongest
                single position on the B bomb site and allows for repositioning, cover, and vision of the entry points
                that could be attacked.
            </div>
            <div className={'flex justify-center pt-10'}>
                <div className={'grid grid-cols-2 w-300 gap-10'}>
                    <img src={BSiteSite} alt={'A Site Cover 1'} className={'w-200 h-100'}/>
                    <img src={BSiteSite2} alt={'Level Design Analysis'} className={'h-100'}/>
                </div>
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                This position has the most vision to cover ratio of all the positions on the sight, but while it strives in these
                areas it lacks in repositioning ability. The player depending on where exactly they are positioned on site will give
                them vision of "tunnels", "window", and "doors", but if there is a lot of pressure coming from the main entrance onto
                the site, "tunnels", then the player will have a lot of trouble getting out from that position and will likely have to
                "go down with the ship". The designers of this site kept in mind the speed at which the attacks will come which is very quick.
                Due to this speed, the positions on the sight need to have a little bit more stability when compared to the positions on
                the A bomb site.
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                The next position I would like to look at is the "Back Plat" position. This position is very similar to the "Goose"
                position back on A site in that the player is given the most amount of vision to the "tunnels", but has very little
                repositioning ability.
            </div>
            <div className={'flex justify-center pt-10'}>
                <img src={BSiteBackSite} alt={'Level Design Analysis'} />
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                The designers wanted to make sure that there was a position that would give the most vision to the most
                important entry point into the site, but also making sure that positon would not be too strong by severely
                limiting the repositioning ability of anyone who chooses to defend from it.
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                The last position I want to look at on the B bomb site would be the "Car" position which serves an almost
                identical role to the "Car" position on the A site which the most amount of vision with the least amount
                of repositioning ability.
            </div>
            <div className={'flex justify-center pt-10'}>
                <div className={'grid grid-cols-2 w-300 gap-10'}>
                    <img src={BSiteCar1} alt={'A Site Cover 1'} className={'w-200 h-100'}/>
                    <img src={BSiteCar2} alt={'Level Design Analysis'} className={'h-100'}/>
                </div>
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                This position allows the player to see the "doors" and "window" entrances to the sight while also
                being able to see any player who enter through the "tunnels". To counter balance the vision this
                position is given is to reduce the movement of the player who will be stuck in the corner and
                limiting the amount of cover given to the player.
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                The developers of the B bomb site had a few key points they wanted to balance being the speed at which
                attackers will be able to get onto the sight and the short range nature of the site. Going into the design
                process they had to add a suitable amount of cover for players to use due to the size of the map as a
                whole and knowing that there would likely only be 2-3 players there at any given time. As a result you have
                a bomb site that encourages quick attacking action and for the defenders, ample cover.
            </div>
            <div className={'flex justify-start px-100 font-outfit font-bold text-3xl pt-10'}>
                Middle
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                The first position that is not on a bomb sight. The developers wanted to give this position the most
                amount of vision possible at the cost of very little cover and three access points.
            </div>
            <div className={'flex justify-center pt-10'}>
                <div className={'grid grid-row-1 w-300 gap-10'}>
                    <img src={Middle1} alt={'A Site Cover 1'} className={'h-100 row-start-1'}/>
                    <img src={Middle2} alt={'Level Design Analysis'} className={'h-100 row-start-1'}/>
                    <img src={Middle3} alt={'Level Design Analysis'} className={'h-100 row-start-1'}/>
                </div>
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                The middle position of Dust 2 is primarily held for players with longer range weapons who want to
                be able to get information or help defend the A or B bomb site. The developers knew that this would
                be too strong of a position if they gave the player too much direct vision and so to counter this they
                added two sets of doors, one for middle and the other for the B bomb site. These doors prevent the player
                from getting full vision of either area unless they reposition, giving up sight of other areas. What is
                position balances is the amount of direct vision of bomb sites, the amount of cover, and the repositioning
                abilities. It leans heavily into the repositioning ability of the player, limits the direct vision given
                to the player, and heavily reduces the amount of cover.
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5 font-bold'}>
                While is analysis mainly covers the Counter Terrorist perspective of the map, it shows how the
                developers had to think in order to create a healthy, fun, and replayable map. Balancing the amount of
                vision, repositioning ability, and cover to give the Counter Terrorists a fair amount of power when
                defending.
            </div>
            <div className={'flex justify-start px-100 font-outfit font-bold text-4xl pt-10'}>
                Visual Clarity
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                Visual clarity is a key objective of any map in counter strike and one of the most important
                considerations when a new map is created. What this means for the developers is that the map
                should be easily readable and clear for anyone playing. In practice this comes in the form
                of lighting. If the lighting of a given part of the map is off it can lead to an unfair advantage
                where players are not able to easily see enemies. Dust 2 is a very bright map which lends itself
                very well to being able to clearly see other players, resulting in a big contrast in colors between
                the map and the players in it.
            </div>
            <div className={'flex justify-center pt-10'}>
                <div className={'grid grid-row-1 w-300 gap-10'}>
                    <img src={PlayerContrast1} alt={'A Site Cover 1'} className={'h-100 row-start-1'}/>
                    <img src={PlayerContrast2} alt={'Level Design Analysis'} className={'h-100 row-start-1'}/>
                    <img src={PlayerContrast3} alt={'Level Design Analysis'} className={'h-100 row-start-1'}/>
                </div>
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                Based on all the pictures above we can see how much the player characters stand out against
                the background of the map. This ensures that the most important things are seen first and
                stand out against everything else.
            </div>
            <div className={'flex justify-start px-100 font-outfit font-bold text-4xl pt-10'}>
                Performance
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                When developing anything for a game performance is one of top priorities. This is amplified
                in competitive shooters where even a single frame lost could be the difference between winning
                and losing. So when developing maps it is critical to not only think about the pure visuals and
                the design choices but also how it will run for players.
            </div>
            <div className={'flex justify-center pt-10'}>
                <img src={Dust2Fps} alt={'Level Design Analysis'} />
            </div>
            <div className={'flex justify-start px-100 font-outfit pt-5'}>
                When playing on my pc which has a GTX 1070 from 2016 I average around 200-300 fps which
                is very high for a system this old. From this testing alone we are able to see that older
                graphics cards will be able to run the map well resulting in a better experience for players.
            </div>
            <div className={'flex justify-start px-100 font-outfit font-bold text-4xl pt-10'}>
                Summary
            </div>
            <div className={'flex justify-start px-100 font-outfit py-5'}>
                Dust 2 takes into account everything from gameplay design choices, visual clarity, and
                performance to ensure the best playing experience for the most amount of players. Taking the
                design choices of the amount of cover, player visibility, and repositioning to allow for
                clear strategy formation and consistent gameplay. After the layout of the map was decided it
                was equally important to retain visual clarity which Dust 2 has done. The brightness of the map
                contrasts greatly with the player models, making sure that the player characters are what people
                will see first. Lastly the performance of the map is very good with little to no hitching, allowing
                for the players to always be competitive. All of this together is what created one of the most
                iconic maps in all of gaming history.
            </div>
        </>
    )
}