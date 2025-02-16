import styles from "./styles.module.scss"

const DefaultPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lo sentimos no encontramos tu página</h1>
      <p>Prueba con una de las siguientes:</p>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/personajes">Personajes</a>
        </li>
        <li>
          <a href="/sobre-nosotros">Sobre Nosotros</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </div>
  );
};

export default DefaultPage;
