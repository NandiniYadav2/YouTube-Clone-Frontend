import { VideoCard } from "./VideoCard";



const VIDEOS = [{
    title:"지민 (Jimin) Closer Than This Official MV",
    author:"Hybe Labels",
    image:"HybeLogo.jpg",
    thumbImage:"PhotoJimin.png",
    views:"146M",
    timestamp:"13 days ago"
},{
    title:"지민 (Jimin) Closer Than This Official MV",
    author:"Hybe Labels",
    image:"HybeLogo.jpg",
    thumbImage:"PhotoJimin.png",
    views:"146M",
    timestamp:"13 days ago"
},{
    title:"지민 (Jimin) Closer Than This Official MV",
    author:"Hybe Labels",
    image:"HybeLogo.jpg",
    thumbImage:"PhotoJimin.png",
    views:"146M",
    timestamp:"13 days ago"
},{
    title:"지민 (Jimin) Closer Than This Official MV",
    author:"Hybe Labels",
    image:"HybeLogo.jpg",
    thumbImage:"PhotoJimin.png",
    views:"146M",
    timestamp:"13 days ago"
},{
    title:"지민 (Jimin) Closer Than This Official MV",
    author:"Hybe Labels",
    image:"HybeLogo.jpg",
    thumbImage:"PhotoJimin.png",
    views:"146M",
    timestamp:"13 days ago"
},{
    title:"지민 (Jimin) Closer Than This Official MV",
    author:"Hybe Labels",
    image:"HybeLogo.jpg",
    thumbImage:"PhotoJimin.png",
    views:"146M",
    timestamp:"13 days ago"
},{
    title:"지민 (Jimin) Closer Than This Official MV",
    author:"Hybe Labels",
    image:"HybeLogo.jpg",
    thumbImage:"PhotoJimin.png",
    views:"146M",
    timestamp:"13 days ago"
},{
    title:"지민 (Jimin) Closer Than This Official MV",
    author:"Hybe Labels",
    image:"HybeLogo.jpg",
    thumbImage:"PhotoJimin.png",
    views:"146M",
    timestamp:"13 days ago"
},{
    title:"지민 (Jimin) Closer Than This Official MV",
    author:"Hybe Labels",
    image:"HybeLogo.jpg",
    thumbImage:"PhotoJimin.png",
    views:"146M",
    timestamp:"13 days ago"
},{
    title:"지민 (Jimin) Closer Than This Official MV",
    author:"Hybe Labels",
    image:"HybeLogo.jpg",
    thumbImage:"PhotoJimin.png",
    views:"146M",
    timestamp:"13 days ago"
}];

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
        {VIDEOS.map(video => <div>
            <VideoCard
                    title={video.title} 
                    author={video.author}
                    image={video.image}
                    thumbImage={video.thumbImage}
                    views={video.views}
                    timestamp={video.timestamp}
            ></VideoCard>

        </div>
        )}
    </div>
}