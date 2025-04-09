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
    <form style={{ width: '100%' }} onSubmit={form.onSubmit((value) => onCreateTask(value.content))}>
      <main className={styles.form}>
        <TextInput
          radius="md"
          classNames={{
            input: styles.input
          }}
          withAsterisk
          placeholder="Add a new task"
          key={form.key('content')}
          {...form.getInputProps('content')}
        />
        <Button />
      </main> 
    </form>
  )
}