import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

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
          Добавить квест
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
