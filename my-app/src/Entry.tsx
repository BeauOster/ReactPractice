interface TravelEntry {
    img: {
      src: string;
      alt: string;
    };
    title: string;
    country: string;
    googleMapsLink: string;
    dates: string;
    text: string;
  }

type EntryProps = {
    entry: TravelEntry
}

export default function Entry({entry}: EntryProps) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={entry.img.src} alt={entry.img.alt} />
            </div>
            <div className="info-container">
                <img className="marker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINfICFcdbosHp2VzHHDsPEXsoYI1cSYgxbZDyXnHDxEwzlyFW7djzh4eTskyJy-4uGTY&usqp=CAU" alt ="marker" />
                <span className="country">{entry.country}</span>
                <a href={entry.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{entry.title}</h2>
                <p className="trip-dates">{entry.dates}</p>
                <p className="entry-text">{entry.text}</p>
            </div>
        </article>
    )
}