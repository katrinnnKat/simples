import React from 'react';
import Header from './components/menu.jsx';
import Blocks from './components/blocks.jsx';
import Plane from './components/plane';
import Gallery from './components/gallery';
import Form from './components/form';
import Footer from './components/footer';
import './App.css';
import './index.css';

function App() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Blocks />
      </section>
      <section>
        <Plane />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <Form />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
