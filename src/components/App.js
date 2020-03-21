import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../scss/style.scss';

const App = () => (
  <div className="wrapper">
    <AddTodo />
    <Footer />
    <VisibleTodoList />
  </div>
)

export default App
