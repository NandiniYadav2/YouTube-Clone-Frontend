export function VideoCard(props: any){
    return(
        <div className="p-3 cursor-pointer">
            <img src={props.thumbImage} className="rounded-xl"></img>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className="rounded-full w-8 h-8" src={props.image}></img>
                </div>
                <div className="col-span-11  pl-3">
                    <div>
                        {/* 지민 (Jimin) 'Closer Than This' Official MV */}
                        {props.title}
                    </div>
                    <div className="col-span-11  text-gray-400 text-base">
                        {/* HYBE LABELS */}
                        {props.author}
                    </div>
                    <div className="col-span-11  text-gray-400 text-base">
                        {/* 146M | 13 days ago */}
                        {props.views} | {props.timestamp}
                    </div>
                </div>
                   
                
            </div>
        </div>
    )
}