import './App.css'

import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Posts } from './pages/Posts'
import { CreatePost } from './pages/CreatePost'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='posts' element={<Posts />} />
          <Route path='create-post' element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
