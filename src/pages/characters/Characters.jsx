import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./components/card/Card";
import styles from "./styles.module.scss";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(1); // Estado para la página actual
  const navigate = useNavigate();

  function handleCharacterClick(id) {
    navigate(`/personajes/info/${id}`);
  }

  function handleNextButtonClick() {
    setPage(page + 1);
    if (page === 42) {
      // Rick and Morty tiene 42 páginas
      setPage(1);
    }
  }

  function handleBackButtonClick() {
    setPage(page - 1);
    if (page === 1) {
      setPage(42);
    }
  }

  useEffect(
    function () {
      async function fetchCharacters() {
        try {
          const { data } = await axios.get(
            `https://rickandmortyapi.com/api/character?page=${page}`
          );
          setCharacters(data.results);
        } catch (error) {
          console.error(error);
          setErrorMessage(
            "Oye algo salió mal, no podemos cargar los personajes 😥"
          );
        }
      }

      fetchCharacters();
    },
    [page]
  ); // Dependencia de `page` para que la llamada se haga cada vez que cambie la página

  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <h2 className={styles.title}>Personajes</h2>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={handleBackButtonClick}>
            Anterior
          </button>
          <button className={styles.button} onClick={handleNextButtonClick}>
            Siguiente
          </button>
        </div>
        <div className={styles.list}>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            characters.map(function (character) {
              return (
                <Card
                  key={character.id}
                  character={character}
                  onClick={function () {
                    handleCharacterClick(character.id);
                  }}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Characters;
