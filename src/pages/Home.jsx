import Showcase from '../components/Showcase.jsx'
import DieOrPrizeImg from '../img/DieorPrize.png'
import BohemianImg from '../img/bohemian-ret.jpg'

export default function Home() {
    return (
        <>
            <div className={'flex justify-center items-center py-4'}>
                <div className={'font-outfit text-2xl font-bold text-center'}>
                    Game Design, Analysis, Programming and everything in between.
                </div>
            </div>
            <hr className={'border-gray-300 mx-6'} />
            <div className={'flex justify-center items-center py-4 flex-wrap'}>
                <Showcase title={'Die Or Prize'}
                          description={'Die Or Prize is a 2D platforming game which has the player control a \'contestant\', fighting to survive a gauntlet of increasingly difficult levels.'}
                          tags={['Game Design', 'Level Design', 'Audio Design']}
                          img={DieOrPrizeImg}
                          layout={1}
                />
                <hr className={'border-gray-300 mx-6 w-full'} />
                <Showcase title={'Bohemian Retreat'}
                          description={'Bohemian Retreat follows a child as they traverse their camp, discovering the dark and twisted secrets it holds.'}
                          tags={['Game Design', 'Level Design']}
                          img={BohemianImg}
                          layout={0}
                />
                <hr className={'border-gray-300 mx-6 w-full'} />
            </div>
        </>
    )
}