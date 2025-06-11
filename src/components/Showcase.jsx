import {Link} from "react-router-dom";
import ShowcaseInfo from "./ShowcaseInfo.jsx";

export default function Showcase({title, description, tags, img, layout}) {
    const isInfoFirst = layout === 0;
    return (
        <>
            <div className={'grid grid-cols-2 gap-3 grid-rows-1 w-250 py-3'}>
                <div className={`w-100 ${isInfoFirst ? 'col-start-1' : 'col-start-2'} row-start-1 flex justify-center items-center`}>
                    <img src={img} alt={title} />
                </div>
                <div className={`${isInfoFirst ? 'col-start-2' : 'col-start-1'} row-start-1`}>
                    <ShowcaseInfo title={title} description={description} tags={tags} />
                </div>
            </div>
        </>
    )
}