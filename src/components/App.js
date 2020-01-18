import React from 'react';
import Header from './Header.js';
import Presentation from './Presentation.js';

function App() {
  return (
    <div className="container-fluid d-flex flex-wrap p-0">
      <section className="mx-auto px-0 col-12 col-sm-12 col-md col-lG col-xl"> 
        <Header />
      </section>
      <section className="mx-0 px-0 col-12 col-sm-12 col-md col-lg col-xl">Descripción</section>
    </div>
  )
}

export default App;