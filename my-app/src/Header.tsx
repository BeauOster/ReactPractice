import globeImage from './assets/globe.png';

export default function Header() {
    return (
        <header>
            <img src={globeImage} alt="Globe" />
            <h1>my travel journal</h1>
        </header>
    );
}