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
      <style jsx>{`
        .App {
          text-align: center;
          padding: 20px;
        }
        .App-footer {
          margin-top: 20px;
          font-size: 14px;
          color: #555;
        }
      `}</style>
      <style>
        {`
        body {
          background-color: #f0f0f0;
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #333;
        }
        p {
          color: #666;
        }
      `}
      </style>
      <style>
        {`
        .App {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          max-width: 600px;
          margin: auto;
        }
      `}
      </style>
      <style>
        {`
        .App-footer {
          background-color: #282c34;
          color: white;
          padding: 10px;
          text-align: center;
        }
      `}
      </style>
      <style>
        {`
        .App h1 {
          font-size: 2em;
          margin-bottom: 20px;
        }
        .App p {
          font-size: 1.2em;
          line-height: 1.5;
        }
      `}
      </style>
      <style>
        {`
        .App h1, .App p {
          transition: color 0.3s ease;
        }
        .App h1:hover, .App p:hover {
          color: #007bff;
        }
      `}
      </style>
      <style>
        {`
        .App {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
      `}
      </style>
      <style>
        {`
        .App-footer {
          position: fixed;
          bottom: 0;
          width: 100%;
        }
      `}
      </style>
    </>
  )
}

export default App
