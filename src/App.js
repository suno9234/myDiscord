import React from 'react';
import AppLayout from './components/AppLayout';

const App = ()=>{
  return (
    <AppLayout>
      {<div style={{backgroundColor:'blue'}}>test page</div>}
    </AppLayout>
  );
}

export default App;
