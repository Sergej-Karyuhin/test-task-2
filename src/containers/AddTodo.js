import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { doSomething, successCallback, failureCallback } from '../data/data.js'

const AddTodo = ({ dispatch }) => {
  let input;

  (function() {
    doSomething()
    .then(successCallback, failureCallback)
    .then(result => {
      result.forEach(item => {
        dispatch(addTodo(item))
      });
    });
  })()

  return (
    <div>
      <form
      className="form"
      onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} className="input" />
        <button type="submit" className="button">
          Добавить
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
