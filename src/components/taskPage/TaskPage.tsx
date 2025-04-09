import { Badge } from '@mantine/core';
import { TaskModel } from '../../models/Task';
import { Empty } from '../empty/Empty';
import { Task } from '../task/Task';
import styles from './TaskPage.module.scss';


interface TaskPageProps {
    tasks: TaskModel[];
    allTasks: TaskModel[];
    onToggleChecked: (id: number) => void;
    onDeleteTask: (id: number) => void;
    onFilterTask: (isFilter: boolean) => void;
}

export function TaskPage({ tasks, allTasks, onToggleChecked, onDeleteTask, onFilterTask }: TaskPageProps) {
    const tarefasConcluídas: TaskModel[] = tasks.filter(task => {
        return task.isChecked;
    });

    return (
      <div className={styles.taskPage}>

        <main className={styles.main}>

            <section className={styles.section}>
  
                <div className={styles.badgeOne}>
                    <span className={styles.textDecoration} onClick={() => onFilterTask(false)}>Tarefas criadas</span>
                    <Badge color="gray">{allTasks.length}</Badge>
                </div>

                <div className={styles.badgeTwo}>
                    <span className={styles.textDecoration} onClick={() => onFilterTask(true)}>Concluídas</span>
                    <Badge color="gray">{tarefasConcluídas.length} de {tasks.length}</Badge>
                </div>

            </section>

            

          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                key={task.id}
                data={task}
                onToggleChecked={onToggleChecked}
                onDeleteTask={onDeleteTask}
              />
            ))
          ) : (
            <div><Empty/></div>
          )}
        </main>
      </div>
    );
  }