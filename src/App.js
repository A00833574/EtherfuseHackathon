import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div className='w-screen h-screen bg-stone-300'>
      <div className='absolute top-1/4'>
        <div className='ml-16'>
          <h1 className='text-[#2d6a97] font-bold text-5xl'>Pledge</h1>
          <h1 className='text-[#689fc7] font-bold text-5xl'>Change</h1>
          <p className='text-blue-950 font-semibold'>Buscamos desentralizar e innovar como apoyamos a los demas. Bienvenido!</p>
        </div>
        <div className='grid justify-center'>
          <p className='text-blue-950'>Correo Electrónico:</p>
          <FloatingLabel
          controlId="floatingInput"
          className="w-96 mx-auto"
          label="E-mail"	
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        </div>
        
        
      </div>
    </div>

  );
}

export default App;
