import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <div className='bg-slate-200'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
