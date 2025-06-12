import './App.css'
import Header from './components/header'
import GetDp from './pages/get-dp/GetDp'

function App() {

  return (
    <>
      <Header />
      <div className="App">
        <h1>Welcome to the GetDp App</h1>
        <p>This app allows you to retrieve and display profile pictures.</p>
        <p>Use the navigation to explore different features.</p>
        <p>Enjoy your experience!</p>
      </div>
      <GetDp />
      <footer className="App-footer">
        <p>&copy; 2025 GetDp App. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
