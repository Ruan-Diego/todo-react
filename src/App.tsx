import styles from './App.module.scss'
import { Button } from './components/button/Button'
import { Header } from './components/header/Header'
import { Input } from './components/input/Input'
import { TaskPage } from './components/taskPage/TaskPage'

function App() {

  return (
    <main>
      <Header/>
      <div className={styles.input}>
        <Input />
        <Button />
      </div>

      <TaskPage/>
    </main>
  )
}

export default App
