import Devlog_1 from '/src/img/Devlog/Devlog_1.png'
export default function Devlog(){
    return (
        <>
            <div className={'flex justify-center font-outfit font-bold py-3 text-2xl text-center'}>
                Devlog
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
                Along with the smaller sprite sizes I would need to create I also wanted to reduce the color palette. Reducing the number of colors
                I am using has made it so I worry less about perfect shading and can focus on using the striking difference in colors to point
                the player in the right direction or give them a little more information.
            </div>
        </>
    )
}