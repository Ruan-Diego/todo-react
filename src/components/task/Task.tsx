
import { ActionIcon, Checkbox } from '@mantine/core';
import { Trash } from '@phosphor-icons/react';
import { TaskModel } from "../../models/Task";
import styles from "./Task.module.scss";

interface TaskProps {
  data: TaskModel;
  onToggleChecked: (id: number) => void;
  onDeleteTask: (id:number) => void;
}


export function Task({ data, onToggleChecked, onDeleteTask }: TaskProps) {

  return (
    <main>
        <span className={styles.card}>
          <Checkbox
            onClick={() => onToggleChecked(data.id)}
            color="#5E60CE"
            radius="lg"
            size="sm"
            checked={data.isChecked}
            classNames={{
              input: styles.checkboxInput,
            }}
            readOnly
          />
          <div className={`${styles.content} ${data.isChecked ? styles.checked : ''}`}>
            {data.content}
          </div>

          <ActionIcon 
            variant="subtle" 
            color='gray' 
            size="md" 
            radius="md" 
            aria-label="Settings"
            classNames={{
              root: styles.iconButton,
            }}  
            onClick={() => onDeleteTask(data.id)}
          >

            <Trash  size={16}  />
          </ActionIcon>
        </span>
    </main>
  )
}

