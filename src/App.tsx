import { Alert } from '@mantine/core'
import '@mantine/core/styles.css'
import { WarningCircle } from '@phosphor-icons/react'
import { useState } from 'react'
import styles from './App.module.scss'
import { Header } from './components/header/Header'
import { Input } from './components/input/Input'
import { TaskPage } from './components/taskPage/TaskPage'
import tasksMock from './mockData/tasksMock.json'


function App() {
  const [allTasks, setAllTasks] = useState(tasksMock);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  
  const tasks = isFilterActive
  ? allTasks.filter(task => task.isChecked)
  : allTasks;

  const icon = <WarningCircle  />;


  function handleCreateTask(content: string): void {
    const lastId = allTasks.length > 0 ? allTasks[allTasks.length - 1].id : 0;
    const newTask = {
      id: lastId + 1,
      content,
      isChecked: false,
    };
    setAllTasks(prev => [...prev, newTask]);
  }
  
  function handleToggleChecked(id: number) {
    setAllTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }
  
  function handleDeleteTask(id: number): void {
    setAllTasks(prev => prev.filter(task => task.id !== id));
  }
  
    function handleFilterTasks(isFilter: boolean) {
      const hasCompleted = allTasks.some(task => task.isChecked);
    
      if (hasCompleted || !isFilter) {
        setIsFilterActive(isFilter);
      } else {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);

      }
    }
    


  return (
    <main>
      <Header/>
      <div className={styles.input}>
        <Input onCreateTask={handleCreateTask} />
      </div>

      <TaskPage 
        tasks={tasks} 
        allTasks={allTasks}
        onFilterTask={handleFilterTasks}
        onDeleteTask={handleDeleteTask} 
        onToggleChecked={handleToggleChecked} 
      />

    {showAlert && (
      <div className={styles.alert}>
        <Alert
          variant="filled"
          color="#5E60CE"
          radius="md"
          withCloseButton
          title="Hold on!"
          icon={icon}
          onClose={() => setShowAlert(false)}
        >
          You haven't completed any tasks yet.
        </Alert>
      </div>

    )}
    </main>
  )
}

export default App
