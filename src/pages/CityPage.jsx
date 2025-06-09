import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cities } from '../data/cities'; // 👈 importa aquí
import './CityPage.css';

const cityFiles = import.meta.glob('../data/ciudades/*/*.json');

export default function CityPage() {
  const { countryId, cityId } = useParams();
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const filePath = `../data/ciudades/${countryId}/${cityId}.json`;

    if (cityFiles[filePath]) {
      cityFiles[filePath]().then(module => {
        setCityData(module.default);
        setLoading(false);
      }).catch(error => {
        console.error('Error al cargar los datos de la ciudad:', error);
        setCityData(null);
        setLoading(false);
      });
    } else {
      console.error('No se encontró el archivo:', filePath);
      setCityData(null);
      setLoading(false);
    }
  }, [countryId, cityId]);

  if (loading) return <p>Cargando ciudad...</p>;
  if (!cityData) return <p>No se encontró información para esta ciudad.</p>;

  const { titulo, descripcion, secciones, img } = cityData;

  // ✅ Filtrar otras ciudades del mismo país
  const otrasCiudades = cities[countryId]?.filter(ciudad => ciudad.id !== cityId) || [];

  return (
    <div className="city-page-wrapper">
      <div className="city-page">
        <h1>{titulo}</h1>
        {img && <img src={img} alt={titulo} className="city-main-img" />}
        {descripcion && <p className="city-description">{descripcion}</p>}

        {secciones && secciones.map((seccion, i) => (
          <section key={i}>
            <h2>{seccion.titulo}</h2>
            <div dangerouslySetInnerHTML={{ __html: seccion.html }} />
          </section>
        ))}
      </div>

      {/* ✅ Sidebar dinámico para cualquier país */}
      {otrasCiudades.length > 0 && (
        <aside className="sidebar-right">
          {otrasCiudades.map((ciudad, i) => (
            <Link
              key={i}
              to={`/country/${countryId}/${ciudad.id}`}
              className="city-image-link"
            >
              <img
                src={`/img/cities/${countryId}/${ciudad.id}1.jpg`}
                alt={ciudad.name}
                title={ciudad.name}
              />
            </Link>
          ))}
        </aside>
      )}
    </div>
  );
}
