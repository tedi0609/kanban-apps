import { useState } from 'react'
import TaskCard from './TaskCard'
import TaskModal from '../shared/TaskModal'
import type { Task, CSSProperties } from '../../../../types'
import { TASK_MODAL_TYPE } from '../../../../constants/app'

interface TaskColumnProps {
  columnTitle: string
  progressId: number
  tasks: Task[]
}

const TaskColumn = ({ columnTitle, progressId, tasks }: TaskColumnProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div style={styles.categoryColumn}>
      <div style={styles.columnTitleWrapper}>
        <h2 style={styles.categoryTitle}>{columnTitle}</h2>
        <div
          className="material-icons"
          style={styles.plusIcon}
          onClick={(): void => {
            setIsModalOpen(true)
          }}
        >
          add
        </div>
      </div>
      <div>
        {tasks.map((task: Task) => {
          return <TaskCard key={task.id} task={task} />
        })}
      </div>
      {isModalOpen && (
        <TaskModal
          headingTitle="Add your task"
          type={TASK_MODAL_TYPE.ADD}
          setIsModalOpen={setIsModalOpen}
          defaultProgressOrder={progressId}
          selectedData={{} as Task}
        />
      )}
    </div>
  )
}

const styles: CSSProperties = {
  plusIcon: {
    cursor: 'pointer',
  },
  categoryColumn: {
    width: '22%',
  },
  columnTitleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 4px',
  },
}

export default TaskColumn
