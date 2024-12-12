import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import MyNav from './components/MyNav'
import Homepage from './components/Homepage'
import News from './types/News'
import Response from './types/Response'
import Details from './components/Details'

function App() {
  const [articles, setArticles] = useState<News[]>([])
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const getArticles = async () => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('no ok')
        }
      })
      .then((data: Response) => {
        console.log(data)
        setArticles(data.results)
        setLoading(false)
      })
      .catch((error) => {
        setError(true)
        console.log(error)
      })
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route
          path="/"
          element={<Homepage art={articles} loading={loading} error={error} />}
        />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
