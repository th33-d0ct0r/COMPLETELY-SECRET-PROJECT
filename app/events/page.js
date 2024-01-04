import styles from  "./events.module.css"
import Navbar from "../components/Navbar"
import Event from "../components/Event"

export default function Events() {
    return (
        <div className={styles.container}>
            <Navbar page="events" />
            <img src="/events.png" className={styles.bgImg} />
            <div className={styles.section}>
                <Event
                    top="4vh"
                    left="30vw"
                    mode="active"
                    title="Summer Horizon"
                    date="Apr 15 - May 6"
                 />
                <Event
                    top="4vh"
                    left="65vw"
                    mode="non-active"
                    title="Robotronics"
                    date="Coming Soon"
                 />
                <Event
                    top="53vh"
                    left="10vw"
                    mode="non-active"
                    title="Traning Grounds"
                    date="Apr 15 - May 6"
                 />
                <Event
                    top="53vh"
                    left="45vw"
                    mode="non-active"
                    title="Intech"
                    date="Coming Soon"
                 />
                <div className={styles.line}>
                    <div className={styles.completed} />
                    <div className={styles.number} style={{background: "transparent"}}>
                        <div style={{background: "#16e16e"}}>
                            <p style={{color: "#000"}}>1</p>
                        </div>
                    </div>
                    <div className={styles.number} style={{background: "transparent"}}>
                        <div style={{background: "#16e16e"}}>
                            <p style={{color: "#000"}}>2</p>
                        </div>
                    </div>
                    <div className={styles.number}>
                        <div>
                            <p>3</p>
                        </div>
                    </div>
                    <div className={styles.number}>
                        <div>
                            <p>4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}