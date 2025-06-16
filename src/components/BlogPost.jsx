import {Link} from 'react-router-dom'

export default function BlogPost({title, description}){
    return (
        <>
            <Link to={`/Blog/${title}`}>
                <div className={'w-200 grid grid-rows-2 cursor-pointer'}>
                    <div className={'row-start-1 flex justify-center font-outfit italic font-bold pt-5'}>
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