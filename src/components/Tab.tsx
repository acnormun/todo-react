import styles from './Tab.module.css'
import {Button} from './Button'

export function Tab(){
    return (
        <form className={styles.addTask}>
            <textarea/>
            <Button/>
        </form>
    )
}