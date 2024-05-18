import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/styles/index.scss';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RouterProvider } from '@/router';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider />
      </DndProvider>
    </Provider>
  </React.StrictMode>,
);
