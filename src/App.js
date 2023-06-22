import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharactersPage from './pages/Characters.Page'
import { store } from './redux'

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
   return (
      <Provider store={store}>
         <AppContent />
      </Provider>
   )
}

export default App
