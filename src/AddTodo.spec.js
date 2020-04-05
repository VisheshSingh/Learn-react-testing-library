import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import AddTodo from './AddTodo'

it('shoud accept values to add new todo', () => {
  const mockAddTodo = jest.fn()
  const { debug, getByLabelText, getByText } = render(
    <AddTodo addTodo={mockAddTodo} />
  )
  // Get the Input field
  const Input = getByLabelText(/add todo/i)
  // Fire a change event on input field
  fireEvent.change(Input, { target: { value: 'a new todo' } })
  // Assertion to check if input value matches
  expect(Input.value).toContain('a new todo')
  // Get the submit button
  const SubmitBtn = getByText(/add todo/i)
  // fire a click event
  fireEvent.click(SubmitBtn)
  // Assertion to check if it calls mockAddTodo
  expect(mockAddTodo).toHaveBeenCalled()
  expect(mockAddTodo).toHaveBeenCalledTimes(1)
  debug()
})
