import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import Scrollbar from './Shared/ScrollBar/Scrollbar';


function App() {
  return (
    <div className="App">
      <Scrollbar></Scrollbar>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
