import {Link} from 'react-router-dom'

export default function BlogPost({title, description}){
    return (
        <>
            <Link to={`/Blog/${title}`}>
                <div className={'flex flex-wrap justify-center cursor-pointer p-5'}>
                    <div className={'row-start-1 flex w-full justify-center font-outfit italic font-bold pt-5'}>
                        {title}
                    </div>
                    <div className={'row-start-2 flex justify-center font-outfit'}>
                        {description}
                    </div>
                </div>
            </Link>
        </>
    )
}