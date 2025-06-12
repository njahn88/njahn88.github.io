import GraduationPicture from '../img/graduation.png'

export default function AboutMe() {
    return (
        <>
            <div className={'flex justify-center items-center py-4 flex-wrap'}>
                <div className={'grid grid-cols-2 gap-5'}>
                    <div className={'col-start-1 h-100 w-100'}>
                        <img src={GraduationPicture} alt={'Nathan Jahn'}/>
                    </div>
                    <div className={'col-start-2'}>
                        <div className={'grid grid-rows-2'}>
                            <div className={'font-outfit text-2xl row-start-1'}>
                                Hello! My name is Nathan Jahn
                            </div>
                            <div className={'row-start-2 font-outfit text-1xl'}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}