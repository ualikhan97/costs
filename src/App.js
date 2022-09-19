import classes from './App.module.css'
import { useState } from 'react';

function Modal(props) {
  return (
    <div className='modal'>
      <p>{props.text}</p>
      <button className='btn btn--alt' onClick={props.onClose}>
        Отмена
      </button>
      <button className='btn' onClick={props.onClose}>
        Ок
      </button>
    </div>
  );
}


function Backdrop(props) {
  return <div className='backdrop' onClick={props.onClick} />;
}


function Todo(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={showModalHandler}>
          Удалить
        </button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <Modal text='Вы уверены?' onClose={closeModalHandler} />}
    </div>
  );
}

function App() {


  return (
    <div>
        <h1>Мои задачи</h1>
        <Todo text='изучить реакт' />
    </div>
  )
}

export default App