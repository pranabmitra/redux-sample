'use strict';

import configureStore from './store/configure';
import { addTodo, editTodo, deleteTodo, fetchTodoList } from './actions/todo';

let store = configureStore;


const textElem = document.querySelector('[name="text"]'),
  idElem = document.querySelector('[name="id"]'),
  addBtnElem = document.querySelector('#addTodoBtn'),
  listElem = document.querySelector('#todoListContainer');

/* eslint-disable */
const renderDOM = () => {
  let todos = configureStore.getState().todos,
    html;

    html = todos.map((singleTodo) => {
        return `<li>
                  <div>${singleTodo.text}</div>
                  <div>
                    <button onclick="TodoApp.editIt(${singleTodo.id})">Edit</button>
                    <button onclick="TodoApp.deleteIt(${singleTodo.id})">Delete</button>
                  </div>
                </li>`;
    });

  listElem.innerHTML = html.join('');
};

const editIt = (id) => {
  let todos = store.getState().todos,
    selectedToto = todos.find(each => each.id === id);

  textElem.value = selectedToto.text;
  idElem.value = selectedToto.id;
};

const deleteIt = (id) => {
  store.dispatch(deleteTodo(id));
};
/* eslint-enable */


store.subscribe(() => {
  renderDOM();
});

store.dispatch(fetchTodoList());

addBtnElem.addEventListener('click', () => {
  let id = parseInt(idElem.value),
    text = textElem.value;

  if (id) {
    store.dispatch(editTodo(id, text));
  } else {
    store.dispatch(addTodo(text));
  }
});

export { editIt, deleteIt };
