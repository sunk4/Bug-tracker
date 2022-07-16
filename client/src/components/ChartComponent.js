import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'

const ChartComponent = () => {
  const { isLoading, getAllTickets } = useAppContext()

  useEffect(() => {
    getAllTickets()
  }, [])

  return <div>hello</div>
}

export default ChartComponent
