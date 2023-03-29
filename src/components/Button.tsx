import { PlusCircle } from "phosphor-react";
import styles from './Button.module.css'

export function Button(){
    return (
        <button className={styles.button}>
            <strong>Criar</strong>
            <PlusCircle size={24}/>
        </button>
    )
}