'use client'

import MyworkCard from './MyworkCard'

export default function MyTodayTasks() {
  const morning = new Date()
  const evening = new Date()
  morning.setHours(-1)
  evening.setHours(23)
  evening.setMinutes(59)

  const query = {
    projectId: 'all',
    dueDate: [morning, evening],
    take: 5,
    counter: true
  }

  return <MyworkCard title="🚤 Today" query={query} />
}
