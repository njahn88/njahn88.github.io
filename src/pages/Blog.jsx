import BlogPost from '../components/BlogPost.jsx'

export default function Blog(){
    return(
        <>
            <div className={'flex justify-center items-center flex-wrap'}>
                <BlogPost title={'Level Design Analysis: Counter Strike 2'}  description={'In depth look into the level design decisions of the Counter Strike 2 map and what went into creating one of the most iconic maps in video game history.' }/>
                <hr className={'border-gray-300 mx-6 w-full'} />
            </div>
        </>
    )
}