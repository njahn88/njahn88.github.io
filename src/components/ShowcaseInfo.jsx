import {Link} from "react-router-dom";

export default function ShowcaseInfo({title, description, tags}) {
    return (
        <>
            <div className={'text-center'}>
                <div className={'grid grid-rows-4'}>
                    <div className={'font-bold font-outfit text-3xl'}>
                        {title}
                    </div>
                    <div className={'row-start-2 font-outfit text-center'}>
                        {description}
                    </div>
                    <div className={'row-start-3 font-outfit font-bold italic'}>
                        <ul>
                            {tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <Link className={'italic'} to={`/${title}`}>Learn more about {title} here</Link>
                </div>
            </div>
        </>
    )
}