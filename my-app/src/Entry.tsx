type EntryProps = {
    img: {
        src: string
        alt: string
    }
    country: string;
    map: string;
    title: string;
    date: string;
    description: string;
}

export default function Entry(props: EntryProps) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="info-container">
                <img className="marker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINfICFcdbosHp2VzHHDsPEXsoYI1cSYgxbZDyXnHDxEwzlyFW7djzh4eTskyJy-4uGTY&usqp=CAU" alt ="marker" />
                <span className="country">{props.country}</span>
                <a href={props.map}>View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.date}</p>
                <p className="entry-text">{props.description}</p>
            </div>
        </article>
    )
}