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
      content: (value) => (value.length <= 0  ? 'Preencha o campo antes de adicionar uma tarefa' : null),
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
          //label="Tarefa"
          placeholder="Adicione uma nova tarefa"
          key={form.key('content')}
          {...form.getInputProps('content')}
        />
        <Button />
      </main> 
    </form>
  )
}