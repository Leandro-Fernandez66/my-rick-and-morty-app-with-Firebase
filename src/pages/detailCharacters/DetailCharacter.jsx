import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../characters/styles.module.scss"
import Card from "../characters/components/card/Card";

const DetailCharacter = () => {
  const [character, setCharacter] = useState({});
  const { characterId } = useParams(); // Acceso correcto al parámetro

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${characterId}`
        );
        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacter();
  }, [characterId]); // Dependencia para ejecutar el efecto cuando characterId cambie

  return (
    <div className={styles.general}>
      <div className={styles.wrapperCharacter}>
        <h2 className={styles.title}>Detalles del Personaje</h2>
        {character.name ? (
          <Card character={character} isShowDetails />
        ) : (
          <p>Cargando...</p>
        )}
        </div>
    </div>
  );
};

export default DetailCharacter;
