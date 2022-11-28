import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <div className='bg-slate-200'>
      {/* <QueryClientProvider client={QueryClient}> */}
      <RouterProvider router={router} />
      {/* </QueryClientProvider> */}
    </div>
  );
}

export default App;
