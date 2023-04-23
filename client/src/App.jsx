import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ViewItems from './pages/ViewItems'
import EditItem from './pages/EditItem'
import CreateItem from './pages/CreateItem'
import ItemDetails from './pages/ItemDetails'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreateItem title='CUSTOM ITEMS | Customize' />
    },
    {
      path:'/customitems',
      element: <ViewItems title='CUSTOM ITEMS | Custom Items' />
    },
    {
      path: '/customitems/:id',
      element: <ItemDetails title='CUSTOM ITEMS | View' />
    },
    {
      path: '/edit/:id',
      element: <EditItem title='CUSTOM ITEMS | Edit' />
    }
  ])

  return (
    <div className='app'>

      <Navigation />

      { element }

    </div>
  )
}

export default App