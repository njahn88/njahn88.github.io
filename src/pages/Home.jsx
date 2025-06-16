import Showcase from '../components/Showcase.jsx'
import DieOrPrizeImg from '../img/DieorPrize.png'
import BohemianImg from '../img/bohemian-ret.jpg'
import OnlyUpImg from '../img/Only-Up.png'

export default function Home() {
    return (
        <>
            <div className={'flex justify-center items-center py-4 flex-wrap'}>
                <Showcase title={'Die Or Prize'}
                          description={'Die Or Prize is a 2D platforming game which has the player control a \'contestant\', fighting to survive a gauntlet of increasingly difficult levels.'}
                          tags={['Game Design', 'Level Design', 'Audio Design']}
                          img={DieOrPrizeImg}
                          layout={1}
                />
                <Showcase title={'Bohemian Retreat'}
                          description={'Bohemian Retreat follows a child as they traverse their camp, discovering the dark and twisted secrets it holds.'}
                          tags={['Game Design', 'Level Design', 'Character Controller']}
                          img={BohemianImg}
                          layout={0}
                />
                <Showcase title={'Only Up'}
                          description={'Climb to survive the ever rising lava. Fully solo developed and created in three days using Unity Engine.'}
                          tags={['Game Design', 'Art Design',]}
                          img={OnlyUpImg}
                          layout={1}
                />
            </div>
        </>
    )
}