import { Provider } from 'react-redux';
import { store } from './state';
import CellList from "./components/cell-list";
import CodeCell from './components/code-cell';
import CodeEditor from './components/code-editor';
import { useState } from 'react';

function App() {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
      </Provider>

  );
}

export default App
