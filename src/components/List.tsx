import { ITask } from "../interfaces/ITask";
import styles from "./List.module.css";
export function List(props: any) {
  const lista: ITask[] = props.lista;
  return (
    <div className={styles.list}>
      <header>
        <div className={styles.tarefasCriadas}>
          <p>Tarefas criadas </p>
          <strong> {lista.length}</strong>
        </div>

        <div>
            <p>Tarefas concluidas</p><strong>0</strong>
        </div>
      </header>
      {lista.map((item) => {
        return <p key={item.id}>{item.title ?? ""}</p>;
      })}
    </div>
  );
}
