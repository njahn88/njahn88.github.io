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
        </>
    )
}