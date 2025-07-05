import Devlog_1 from '/src/img/Devlog/Devlog_1.png'
import Devlog_2 from '/src/img/Devlog/Devlog_2.png'
import Devlog_3 from '/src/img/Devlog/Devlog_3.png'
import Devlog_Gif_1 from '/src/img/Devlog/Devlog_gif_1.gif'

export default function Devlog(){
    return (
        <>
            <div className={'flex justify-center font-outfit font-bold py-3 text-2xl text-center'}>
                Devlog
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit font-bold text-4xl pt-10'}>
                Devlog 1
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit'}>
                With any well designed game you want to start by looking into the design choices that will
                effect the most parts of the game. These could be things like art style, audio style, core
                gameplay mechanics, etc. For this game I started with art style.
            </div>
            <div className={'flex justify-start px-10 md:px-100 pt-5 font-outfit'}>
                I am no artist. This is why I knew from the beginning that the art style I chose would likely
                have a big impact. As someone who frequently gets caught in the "but it looks bad" mindset I wanted
                to make sure whatever I ended up choosing would be easy and wouldn't lead to frustrations
                later on. This is what I have settled on so far.
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit font-bold text-4xl pt-10'}>
                Art Style *WIP*
            </div>
            <div className={'flex justify-start px-10 md:px-100 pt-5 font-outfit'}>
                I knew I wanted to lean towards pixel art as it is an art style that I could use to iterate quickly. Once I knew the
                style of art I wanted I needed to pick a size for the Unity canvas. After a little research I found the resolution of 320 x 180
                to be the best. This resolution allows for perfect up scaling to most all modern screen sizes, excluding widescreen. This smaller
                canvas size means that the sprites I create will be smaller, thus reducing the amount of time I am spending on them.
            </div>
            <div className={'flex justify-center pt-10'}>
                <img src={Devlog_1} alt={'Level Design Analysis'} />
            </div>
            <div className={'flex justify-start px-10 md:px-100 pt-5 font-outfit'}>
                ** If you noticed how similar the ground sprites looks to those in Axiom Verge you would see a very close resemblance, these are just place holders **
                Along with the smaller sprite sizes I would need to create I also wanted to reduce the color palette. Reducing the number of colors
                I am using has made it so I worry less about perfect shading and can focus on using the striking difference in colors to point
                the player in the right direction or give them a little more information.
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit font-bold text-4xl pt-10'}>
                Game Design
            </div>
            <div className={'flex justify-start px-10 md:px-100 pt-5 font-outfit'}>
                One of the most frustrating things for someone who isn't as well versed in video games is the frustration that
                comes with learning a new game. In recent history a lot of games have resorted to just throwing up a text box
                that explains everything to the player. While this does serve the purpose of teaching the player, over use can quickly
                lead to the player feel like they are doing more reading than playing. This is not good. To counter this I have been
                thinking of ways to teach the player about certain mechanics without having to spell it out for them.
            </div>
            <div className={'flex justify-center pt-10'}>
                <img src={Devlog_2} alt={'Level Design Analysis'} />
            </div>
            <div className={'flex justify-start px-10 md:px-100 pt-5 font-outfit'}>
                With this being the first room the player will see, it is important to teach as much as possible. There is no
                text that tells the player they need to jump or that the wall can and needs to be shot. What it does do is allow
                the player to realize there must be a way to get over these spikes, after pressing all the buttons they will find the
                jump button. This process will repeat for the wall blocking the exit. The only way the player will be able to leave the
                starting room is if they know they can jump, shoot, and that some walls can be broken with their bullets. Being able to
                teach the rules of a game without making the player feel dumb is crucial.
            </div>
            <div className={'flex justify-center pt-10'}>
                <img src={Devlog_Gif_1} alt={'Level Design Analysis'} />
            </div>
            <div className={'flex justify-start px-10 md:px-100 pt-5 font-outfit'}>
                Here we can see the second room. Another chance to teach players the basic mechanics of the game while
                remaining fair. What I mentioned earlier about color comes to play here with the wasp enemy. The strikingly
                different colors make the wasp stand out and the colors themselves can give them information on what kind of
                threat it might be.
            </div>
            <div className={'flex justify-start px-10 md:px-100 pt-5 font-outfit'}>
                We want to make sure the game is fair. For a lot of cases this means giving the player all the information they
                need to complete a task and letting them put the pieces together. The player, once entering the room, will know
                they can jump, they can shoot, and possibly that they are able to die in one hit. Once entering the room the player
                has full vision of the new "thing", maybe unsure if it will hurt them or not. I added a single block separating the player
                and the wasp to allow the player as much time as they need to determine what they will do with what they know. If the player waits
                long enough they will see the wasp try to charge them, leading them to believe the wasp is against them.
            </div>
            <div className={'flex justify-start px-10 md:px-100 py-5 font-outfit'}>
                Since all the player knows is that going right means progress, the player should make their way towards the
                ladders in the top right of the room. Once the player jumps towards them they will be able to climb up to
                the next room. Having just visited three total rooms all players will have knowledge of moving, jumping, shooting, climbing,
                and enemies all without a single letter of text and all while remaining fair to the player.
            </div>
            <div className={'flex justify-start px-10 md:px-100 font-outfit font-bold text-4xl pt-10'}>
                For Next Time
            </div>
            <div className={'flex justify-start px-10 md:px-100 py-5 font-outfit'}>
                I plan on next looking into some sounds to add to the game and maybe some music too. Due to the art style I will be
                looking into retro sounds and how to create them, all while making sure to remember the design choices I have already made. After that
                I want to look further into level design and how I can make interesting and fun levels for the players.
            </div>
        </>
    )
}