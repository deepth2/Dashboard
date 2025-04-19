import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Adminform = () => {
  const { employees, userData, setUserData } = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

    const data = userData.map(elem => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(newTask)
        elem.taskCounts.newTask += 1
      }
      return elem
    })

    setUserData(data)
    console.log(data)

    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
    <div className="p-6 bg-zinc-800 rounded-xl shadow-lg mt-8 max-w-5xl mx-auto text-white">
      <h2 className="text-2xl font-semibold mb-6 text-emerald-400">Create New Task</h2>
      <form onSubmit={submitHandler} className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full rounded-md px-3 py-2 bg-zinc-700 border border-zinc-600 focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
              type="text"
              placeholder="e.g. Make a UI design"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full rounded-md px-3 py-2 bg-zinc-700 border border-zinc-600 focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
              type="date"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Assign To (Name)</label>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="w-full rounded-md px-3 py-2 bg-zinc-700 border border-zinc-600 focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
              type="text"
              placeholder="e.g. John"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-md px-3 py-2 bg-zinc-700 border border-zinc-600 focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
              type="text"
              placeholder="e.g. Design, Development"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <label className="block text-sm font-medium mb-1">Task Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="flex-1 min-h-[180px] rounded-md px-3 py-2 bg-zinc-700 border border-zinc-600 focus:ring-2 focus:ring-emerald-500 outline-none text-sm resize-none"
            placeholder="Detailed task description..."
          />
          <button
            type="submit"
            className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default Adminform
