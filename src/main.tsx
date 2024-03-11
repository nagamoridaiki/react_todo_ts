import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { TodoProvider } from './contexts/TodoContext';
import { router } from './routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <RouterProvider
        router={router}
      />
    </TodoProvider>
  </React.StrictMode>
);
