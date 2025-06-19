import ASiteGoose from "../../img/Dust2Analysis/ASite-Goose1.png";
import ASiteGoose2 from "../../img/Dust2Analysis/ASite-Goose2.png";
import ArkhamStrikeGif from '/src/img/ArkhamCombatAnalysis/ArkhamStrike.gif'
import ArkhamCounterGif from '/src/img/ArkhamCombatAnalysis/ArkhamCounter.gif'

export default function ArkhamKnightCombatAnalysis() {
    return (
        <>
            <div className={'flex justify-center font-outfit font-bold py-3 text-2xl text-center'}>
                Combat Design Analysis: Batman Arkham Knight
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit'}>
                Building on the backs of the games that came before it, the Rocksteady combat designers had to ensure the
                "heart" of the game was still in tact while also adding some new mechanics along the way. What resulted was
                a heavily polished system that consistently pushed the player to learn and adapt to the enemies actions. This is
                why I would like to look into what changes the developers made and the techniques they used to create a combat
                system that anyone could succeed with while also leaving room for skill expression.
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit font-bold text-4xl pt-10'}>
                Opening Combat Encounter
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit'}>
                In the first combat section of the game if the player is unfamiliar with the combat style of the
                Arkham games will only be required to remember three different buttons and their corresponding actions,
                these being "punch", "counter", and "dodge". All of these actions are given text prompts to inform
                new players how and when to perform them. Each one of these actions forms the base of the combat system
                and are shown early on to get players comfortable with what to expect. Many of these actions only require
                the player to press a single button for them to be performed. Rocksteady clearly wanted to make the first
                encounter of the game encompass as much of the combat system as possible without making it seem unfair or
                overwhelming. The way they achieved with was by giving clear instructions on what buttons to press and by
                having the number of enemies on the lower side.
            </div>
            <div className={'flex justify-center pt-10 gap-10 flex-wrap'}>
                <img src={ArkhamStrikeGif} alt={'A Site Cover 1'} className={'w-128 h-72 md:w-192 md:h-108'}/>
                <img src={ArkhamCounterGif} alt={'Level Design Analysis'} className={'w-128 h-72 md:w-192 md:h-108'}/>
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit pt-5'}>
                In the second clip you can see one of the main design choices made by the Rocksteady team and that is
                the color to danger levels. The normal attack from enemies causes a blue indicator to appear over their
                head while a charge attack will cause a red indicator to appear. These colors help the player gauge the
                danger level of each attack while also training the player to associate a color with a button press.
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit pt-5'}>
                Within the first 10 minutes of the playing the game the designers have expertly introduced the core
                mechanics of the game which are attacking, countering, and dodging allowing for new players to feel
                comfortable and begin training their brain to become prepared for whatever new challenges may arise.
            </div>
        </>
    )
}