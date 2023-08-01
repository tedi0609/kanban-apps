import React from 'react'
import { RecoilRoot } from 'recoil' // Ditambahkan
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SideMenuLayout from './layouts/SideMenuLayout'
import TaskSummary from './features/tasks/components/TaskSummary' // Ditambahkan
// Import component TaskList
import TaskList from './features/tasks/components/TaskList/TaskList'
// Import TaskProgress component
import TaskProgress from './features/tasks/components/TaskProgress/TaskProgress'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <SideMenuLayout />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <TaskSummary />,
      },
      {
        path: '/task-list',
        element: <TaskList />, // diperbarui
      },
      {
        path: '/task-progress',
        element: <TaskProgress />, // diperbarui
      },
    ],
  },
])

function App(): JSX.Element {
  return (
    // Apit dengan RecoilRoot
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
