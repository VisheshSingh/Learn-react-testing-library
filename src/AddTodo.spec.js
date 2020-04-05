import React from 'react'
import { render } from '@testing-library/react'
import AddTodo from './AddTodo'

it('shoud accept values to add new todo', () => {
  const mockAddTodo = jest.fn()
  const { debug, getByLabelText, getByText } = render(
    <AddTodo addTodo={mockAddTodo} />
  )
  // Get the Input field
  const Input = getByLabelText(/add todo/i)
  debug()
})
