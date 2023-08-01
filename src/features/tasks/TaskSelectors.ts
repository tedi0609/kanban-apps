import { selector } from 'recoil'
import {SelectorKeys} from '../../constants/recoilKeys' // Ditambahkan
import { tasksState } from './TaskAtoms'
import type { Task } from '../../types'

export const uncompletedTasksSelector = selector<Task[]>({
  // key: 'uncompleted_tasks', 
  key: SelectorKeys.UNCOMPLETED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder !== 4
    })
  },
})

export const notStartedTasksSelector = selector<Task[]>({
  // key: 'not_started_tasks',
  key: SelectorKeys.NOT_STARTED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 1
    })
  },
})

export const inProgressTasksSelector = selector<Task[]>({
  // key: 'in_progress_tasks',
  key: SelectorKeys.IN_PROGRESS_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 2
    })
  },
})

export const waitingTasksSelector = selector<Task[]>({
  // key: 'waiting_tasks',
  key: SelectorKeys.WAITING_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 3
    })
  },
})

export const completedTasksSelector = selector<Task[]>({
  // key: 'completed_tasks',
  key: SelectorKeys.COMPLETED_TASKS,
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 4
    })
  },
})