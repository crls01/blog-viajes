import { useParams } from 'react-router-dom';
import { cities } from '../data/cities';

export default function CityPage() {
    const { countryId, cityId } = useParams();

    const city = cities[countryId]?.find(c => c.id === cityId);

    if (!city) return <p>Ciudad no encontrada.</p>;

    return (
        <div className="city-page">
            <h1>{city.name}</h1>
            <img src={city.img} alt={city.name} />
            <p>{city.description}</p>
        </div>
    );
}
