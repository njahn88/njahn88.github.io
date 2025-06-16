import {Link} from "react-router-dom";
import ShowcaseInfo from "./ShowcaseInfo.jsx";

export default function Showcase({title, description, tags, img, layout}) {
    const isInfoFirst = layout === 0;
    return (
        <>
            <div className={'flex flex-wrap md:flex-nowrap w-250 py-3 justify-center items-center gap-10'}>
                <div className={'w-[400px]'}>
                    <img src={img} alt={title} />
                </div>
                <div>
                    <ShowcaseInfo title={title} description={description} tags={tags} />
                </div>
            </div>
            <hr className={'border-gray-300 mx-6 w-full'} />
        </>
    )
}