import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Button } from '../button/Button';
import styles from './Input.module.scss';

interface InputProps {
  onCreateTask: (content: string) => void;
}

export function Input({onCreateTask}: InputProps) {

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      content: '',
    },
    validate: {
      content: (value) => (value.length <= 0  ? 'You must fill in the field before adding a task.' : null),
    },
  });

  return (    
    <main className={styles.main}>
      <form className={styles.form} onSubmit={form.onSubmit((value) => onCreateTask(value.content))}>
        <div className={styles.content}>
          <TextInput
            radius="md"
            classNames={{
              input: styles.input,
              root: styles.inputRoot
            }}
            placeholder="Add a new task"
            key={form.key('content')}
            {...form.getInputProps('content')}
          />
          <Button />
        </div> 
      </form>
    </main>
    
  )
}