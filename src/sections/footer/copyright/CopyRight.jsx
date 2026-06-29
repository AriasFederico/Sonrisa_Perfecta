import styles from './CopyRight.module.scss';

export const CopyRight = ({data}) => {
  return (
    <div className={styles.copy}>
        <span>© 2026 {data}. Todos los derechos reservados.</span>
        <a href="https://codefex.site/">Desarrollado por Codefex</a>
    </div>
  )
}
