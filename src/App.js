import React from 'react';
import AppLayout from './components/AppLayout';

const App = ()=>{
  return (
    <AppLayout>
      {<div style={{backgroundColor:'green', flex:'1 1'}}>test page</div>}
    </AppLayout>
  );
}

export default App;
