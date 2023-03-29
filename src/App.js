/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharactersPage from './pages/Characters.Page'

const AppContent = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" index element={<CharactersPage />} />
         </Routes>
      </BrowserRouter>
   )
}

function App() {
   return <AppContent />
}

export default App
