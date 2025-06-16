import NVGPicture from '../img/NVGImg.jpg'

export default function AboutMe() {
    return (
        <>
            <div className={'flex justify-center items-center py-4 flex-wrap gap-10'}>
                <div className={'col-start-1 row-start-1'}>
                    <div className={'grid grid-rows-[auto auto]'}>
                        <div className={'font-outfit font-bold text-2xl row-start-1'}>
                            Hello! My name is Nathan Jahn.
                        </div>
                        <div className={'row-start-2 font-outfit text-1xl w-100'}>
                            My passions are game design, development, and programming. I hold a degree in Game Design, and over the last year I have gained a lot of experience creating games using the Unity Game engine
                            and built up my online presence in different communities. When it comes to game design, the characters, levels, systems, and mechanics are
                            what I love to explore and analyze. While participating in game jams and doing solo development, I have created several games which has
                            accelerated my understanding of how to make them fun and engaging. I’m excited to keep pushing the boundaries of interactive storytelling and gameplay design,
                            and I’m eager to bring my creativity, technical skills, and problem-solving mindset to a professional team.
                        </div>
                    </div>
                </div>
                <div className={'col-start-2 h-100 w-100 row-start-1'}>
                    <img src={NVGPicture} alt={'Nathan Jahn'} className={'rounded-lg'} />
                </div>
            </div>
        </>
    )
}