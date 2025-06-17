import BlogPost from '../components/BlogPost.jsx'

export default function Blog(){
    return(
        <>
            <div className={'flex justify-center flex-wrap'}>
                <div className={'w-full flex justify-center'}>
                    <div className={'flex justify-center items-center flex-wrap p-5 w-200 text-center'}>
                        <BlogPost title={'Reworking League of Legends Tutorial'}  description={'The tutorial section of any game is what can make or break a players desire to continue playing. As someone who has played league since I was 13, I believe there are some key things Riot could do to better help the steep learning curve that comes with learning League of Legends. ' }/>
                        <hr className={'border-gray-300 mx-6 w-full'} />
                    </div>
                </div>
                <div className={'w-full flex justify-center'}>
                    <div className={'flex justify-center items-center flex-wrap p-5 w-200 text-center'}>
                        <BlogPost title={'Level Design Analysis: Counter Strike 2'}  description={'In depth look into the level design decisions of the Counter Strike 2 map and what went into creating one of the most iconic maps in video game history.' }/>
                        <hr className={'border-gray-300 mx-6 w-full'} />
                    </div>
                </div>
            </div>
        </>
    )
}