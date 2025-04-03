import { useState } from 'react';
import { Task } from '../task/Task';
import styles from './TaskPage.module.scss';

// interface TaskPageProps {
// }



export function TaskPage() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            content: 'Isso é uma TASK',
            isChecked: false
        },
        {
            id: 2,
            content: 'Isso é uma TASK 2',
            isChecked: true
        },
        {
            id: 3,
            content: 'Isso é uma TASK 3',
            isChecked: false
        },
        {
            id: 4,
            content: 'Isso é uma TASK 4',
            isChecked: false
        }
    ])
  return (
    <div className={styles.taskPage}>
        <main>
            {tasks.length > 0 ? (
                tasks.map(task => {
                    return <Task key={task.id} content={task.content}/>
                })
            ) : (
                <div>vazio</div>
            )}
        </main>

    </div>
  )
}