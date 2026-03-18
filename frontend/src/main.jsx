import { StrictMode } from 'react'
import FoodDashboard from "./Admin/Food";
import { FoodProvider } from './Context/FoodContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
  // <StrictMode>

  <FoodProvider>
    <FoodDashboard />
  </FoodProvider>

  // </StrictMode>,
)
