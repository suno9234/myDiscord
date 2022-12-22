import React from 'react';
import AppLayout from './components/AppLayout';

const App = ()=>{
  return (
    <AppLayout>
      {<div style={{backgroundColor:'green', width:'100%'}}>test page</div>}
    </AppLayout>
  );
}

export default App;
