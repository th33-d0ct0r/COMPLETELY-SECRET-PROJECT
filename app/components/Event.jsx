import styles from "./StyleComponents/eventCard.module.css"

export default function Event(props) {
    if (props.mode === "active") {
        return (
            <div className={styles.card2} style={{top: props.top, left: props.left}}>
                <h1>{props.title}</h1>
                <p>{props.date}</p>
                <a>Join</a>
            </div>
        )
    }
  return (
    <div className={styles.card} style={{top: props.top, left: props.left}}>
        <h1>{props.title}</h1>
        <p>{props.date}</p>
        <a>Join</a>
    </div>
  )
}
