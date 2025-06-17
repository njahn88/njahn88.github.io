import AsheStartImg from '/src/img/LolPlayerExperienceRework/AsheStart.png'
import AsheFirstPartTutorialImg from '/src/img/LolPlayerExperienceRework/AsheFirstPartTutorial.png'
import AsheLanePhase from '/src/img/LolPlayerExperienceRework/AsheLanePhase.png'
import RoleBaseIndicator from '/src/img/LolPlayerExperienceRework/RoleBasedIndicators.png'
import LeagueOfLegendsIcons from '/src/img/LolPlayerExperienceRework/LeagueOfLegendsIcons.png'

export default function ReworkLolTutorial() {
    return (
        <>
            <div className={'flex justify-center font-outfit font-bold py-3 text-2xl text-center'}>
                Reworking League of Legends New Player Experience
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit'}>
                League of Legends is one of the most difficult games to get into as a new player. At the time of this post
                League currently has 170 champions each with an average of four usable abilities and one passive ability. Doing
                the math it comes out to ~850 different things a player has to understand to even feel comfortable playing the game.
                This doesn't include the plethora of items the player has access to either. All together a new player has a mountain
                of things they have to understand to start enjoying one of the most popular games of all time. I believe there are
                a few things Riot could do to help shorten that learning time and retain more players.
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit pt-3'}>
                When a new player logs into League of Legends for the first time they are met with three tutorial levels aimed
                at giving a brief introduction to what League of Legends is all about. There are a few things these tutorials
                do well, but a lot more that leave the player guessing or not knowing at all. I've compiled a list of everything
                the tutorials either mention or show the player.
            </div>
            <div className={'flex justify-center font-outfit font-bold pt-5 text-center'}>
                <ul>
                    <li>How to move the champion</li>
                    <li>How to auto attack</li>
                    <li>How to use abilities</li>
                    <li>Attacking Turrets</li>
                    <li>Dangers of Turrets</li>
                    <li>Buying Items</li>
                    <li>Attacking Inhibitors</li>
                    <li>Attacking Nexus</li>
                </ul>
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit pt-3'}>
                If you are a seasoned League of Legends player you can read that list and think of a multitude of
                things that are not mentioned. These core subjects that are not mentioned are the things that players
                will really need to understand before they are able to really enjoy League, here are a few examples.
            </div>
            <div className={'flex justify-center font-outfit font-bold pt-5 text-center'}>
                <ul>
                    <li>Lane Phase</li>
                    <li>Team Fighting</li>
                    <li>Champion Roles</li>
                    <li>When to recall</li>
                    <li>Unless I missed something, the entirety of the jungle</li>
                    <li>Other objectives besides turrets, inhibitors, nexus</li>
                    <li>Summoner Spells</li>
                </ul>
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit pt-3'}>
                I think trying to fit everything the current tutorial levels teach with the
                list I mentioned is unrealistic and could lead to the players not even wanting
                to finish the tutorials at all. This is why I think there needs to be full
                overhaul of the tutorial system and some added UI changes to try and address these issues.
            </div>
            <div className={'flex justify-center font-outfit font-bold py-3 text-4xl text-center items-center'}>
                <hr className={'border-gray-300 mx-6 w-full'} />
                Rework
                <hr className={'border-gray-300 mx-6 w-full'} />
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit pt-3'}>
                One of the most fun parts of League of Legends when I first started playing was seeing all the
                different champions picking one based off of looks and maybe a little look at the abilities. I
                think this the fist step Riot needs to take before getting into the tutorials, get the player
                excited to play as a certain champion even if they don't understand anything else.
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit font-bold text-3xl pt-10'}>
                Letting players choose
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit pt-3'}>
                Before any of the tutorials start I believe Riot should let a new player pick any
                champion they want for free. Allow the player to look through the entire catalogue
                of champions and pick one that looks interesting to them. The reason for doing this
                is to allow players have a choice early on to how they will learn the game. This
                change will effect how the players learn the game and can give a more focused approach
                to starting the game.
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit font-bold text-3xl pt-10'}>
                Role Based Tutorials
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit pt-3'}>
                This would come right after the player makes their choice of champion and the ensuing
                tutorial would be tailored to which every champion they picked. For example if the player
                chose Ashe as their first champion, they would be put into a Bot Lane focused tutorial.
                This tutorial would cover the basics of player movement and attacking while also teaching
                the basics of bot lane lane phase. Everything from the dynamic of ADC and Support, when and why
                to recall, and what to look out for in the jungle. Another example would be if the player chose
                Elise as their first champion, a jungle focused tutorial would be the only thing the player would
                be able to select. It would show them where jungle monsters are, pathing suggestions, objectives,
                ganking, etc. Simply focusing the tutorials to a fit where their champion succeeds the most will
                lead to players having a better understanding of what they actually need to be doing when playing
                a real game.
            </div>
            <div className={'flex justify-center pt-10'}>
                <img src={AsheStartImg} alt={'Level Design Analysis'} className={'h-100'}/>
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit font-bold text-2xl pt-10'}>
                Example
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit pt-3'}>
                We can stick with Ashe for this example and see what a focused bot lane tutorial might
                look like and how it would be better than what is currently available.
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit font-bold text-2xl pt-10'}>
                Start
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit pt-3'}>
                Right at the beginning I think the player should be put into a custom built level similar to
                an arena. This arena would only have the Ashe champion and a target dummy. This would focus
                the player and not have them worry about minions, lanes, turrets, etc. This part of the tutorial
                would explain basic movement and attacking while also introducing the champions abilities.
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit pt-3 font-bold'}>
                * I know
                it would be difficult to add voice lines etc for all champions with this focused approach, but with
                new lightweight AI models I think it could be achieved *
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit pt-3'}>
                The voice over would go through each ability and explain the use cases, best practices, and any other
                ability specific information.
            </div>
            <div className={'flex justify-center pt-10'}>
                <img src={AsheFirstPartTutorialImg} alt={'Level Design Analysis'} className={'h-100'}/>
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit font-bold text-2xl pt-10'}>
                Lane Phase
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit pt-3'}>
                After the player has completed the first part of the tutorial and understands movement, attacking, and
                their champions abilities it would be time to move them to the lane phase portion of their focused tutorial. This
                part of the tutorial would go through the idea of minions, gold, and turrets. The player needs to understand
                why they are killing minions, what gold is used for, why turrets are important, and not just tell the player
                that those things exist. Explaining how as an ADC you are very weak early on and that you need to stay around
                your support, focus on killing minions, and be aware of any potential threats in the jungle.
            </div>
            <div className={'flex justify-center pt-10'}>
                <img src={AsheLanePhase} alt={'Level Design Analysis'} className={'h-100'}/>
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit pt-3'}>
                Instead of just focusing on attacking towers like the current tutorial does, a good change would be to
                show specific ideas. If the player gets too close to the enemy champions and their support is not nearby,
                 then maybe the screen could flash red and voice line could explain that is it important to stay by the
                support character.
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit font-bold text-2xl pt-10'}>
                Mid Game
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit pt-3'}>
                One of topics that is left out of the tutorial is the middle game phase of League of Legends,
                despite it being one of the most important. This portion of the tutorial could sort of flash
                forward, giving the player a full set of items, and positioning them and the other team around
                Baron. This would introduce the other objectives in the game and why they are so critical. While
                the player will not understand the other champions and their abilities, they will see what a typical
                middle game fight will look like.
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit font-bold text-2xl pt-10'}>
                What does this new tutorial format solve
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit pt-3'}>
                Being able to give players a choice in which champion they start as, showing them what
                that champion is good at, and how to play the lane and middle game phase of league will give
                every new player a good understanding of what is expected of them and the strengths and weaknesses
                of their champion.
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit font-bold text-3xl pt-10'}>
                UI Additions
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit pt-3'}>
                A few UI additions could go a long way in helping new players understand what to expect without
                having to have full knowledge of a given enemy champion.
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit font-bold text-2xl pt-10'}>
                Role Based Indicators
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit pt-3'}>
                Role based indicators could be added next to the champions current level indicator. These
                icons would be simple enough for a new player to understand after seeing them a few times and
                would tell the player just by the icon, the potential threat an enemy champion has.
            </div>
            <div className={'flex justify-center pt-10'}>
                <img src={RoleBaseIndicator} alt={'Level Design Analysis'} className={'h-100'}/>
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit pt-3'}>
                This indicator for example would let the player know that that champion is primarily a healing/support
                champion. With that knowledge, without even having to know the champions abilities, the player can
                make certain assumptions as to the power level of the other champion.
            </div>
            <div className={'flex justify-center pt-10'}>
                <img src={LeagueOfLegendsIcons} alt={'Level Design Analysis'} className={'h-20 w-100'}/>
            </div>
            <div className={'flex justify-start px-10 md:px-125 font-outfit pt-3'}>
                League of Legends already has icons for the categories of items in the shop. These icons could be
                repurposed to show types of champions. Just a simple addition to the UI could go a long way to
                smoothing out the learning curve for new players.
            </div>
        </>
    )
}