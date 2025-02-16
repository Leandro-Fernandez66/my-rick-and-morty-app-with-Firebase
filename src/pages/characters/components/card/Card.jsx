import styles from "./styles.module.scss";

const Card = ({ character, onClick, isShowDetails }) => {
  if (!character) return null;

  return (
    <div className={styles.character} onClick={onClick}>
      <div>
        <img
          src={character.image}
          alt={character.name}
          className={styles.characterImage}
        />
      </div>
      <div className={styles.cardInfo}>
        <h6 className={styles.characterName}>{character.name}</h6>
        <span className={styles.characterStatus}>
          Estado: {character.status}
        </span>
        <span className={styles.characterSpecies}>
          Especie: {character.species}
        </span>
        <span className={styles.characterGender}>
          Género: {character.gender}
        </span>

        {isShowDetails && (
          <>
            <span className={styles.characterOrigin}>
              Origen: {character.origin.name}
            </span>
            <span className={styles.characterOrigin}>
              Lugar: {character.location.name}
            </span>
            <span className={styles.characterOrigin}>
              Episodios:
            </span>
            {character.episode.map((episode, index) => (
              <span key={index} className={styles.characterOrigin}>
                <a href={episode}>Episodio {index + 1}</a>
              </span>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
