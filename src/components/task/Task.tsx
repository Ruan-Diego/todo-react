
// interface TaskPageProps {
// }

// const tasks = [
//     {
//         id: 1,
//         content: 'Isso é uma TASK',
//         isChecked: false
//     },
//     {
//         id: 2,
//         content: 'Isso é uma TASK 2',
//         isChecked: true
//     },
//     {
//         id: 3,
//         content: 'Isso é uma TASK 3',
//         isChecked: false
//     },
//     {
//         id: 4,
//         content: 'Isso é uma TASK 4',
//         isChecked: false
//     },
// ]
interface propsTask{
    id?: number,
    content: string,
    isChecked?: boolean
}
export function Task(props: propsTask) {

  return (
    <main>
        <span>
            {props.content}
        </span>
    </main>
  )
}