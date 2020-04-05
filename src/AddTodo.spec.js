import React from 'react'
import { render } from '@testing-library/react'
import AddTodo from './AddTodo'

it('shoud accept values to add new todo', () => {
  const mockAddTodo = jest.fn()
  const { debug } = render(<AddTodo addTodo={mockAddTodo} />)
  debug()
})
