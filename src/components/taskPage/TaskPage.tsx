import { Badge, Tooltip } from '@mantine/core';
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
                <Tooltip position="top-start" color='#5E60CE' label="Show all my tasks">
                    <div className={styles.badgeOne}>
                        <span className={styles.textDecoration} onClick={() => onFilterTask(false)}>Your Created Tasks</span>
                        <Badge color="gray">{allTasks.length}</Badge>
                    </div>
                </Tooltip>

                <Tooltip position="top-start" color='#5E60CE' label="Show only my completed tasks">
                    <div className={styles.badgeTwo}>
                        <span className={styles.textDecoration} onClick={() => onFilterTask(true)}>Completed tasks</span>
                        <Badge color="gray">{tarefasConcluídas.length} de {tasks.length}</Badge>
                    </div>
                </Tooltip>


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