import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRouters';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>
);
