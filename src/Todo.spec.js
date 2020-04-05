import React from 'react'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Todo from './Todo'
import RenderTodos from './RenderTodos'

describe('<Todos />', () => {
  const mockTodo = { id: 1, todo: 'new todo' }

  it('Should render a todo object', () => {
    const { getByTestId } = render(<Todo todo={mockTodo} />)
    // get element by test-id
    const ItemName = getByTestId('itemName')
    expect(ItemName).toHaveTextContent(mockTodo.todo)
  })

  it('should check if the previous state exists in the input', () => {
    const { getByPlaceholderText, getByText } = render(<Todo todo={mockTodo} />)
    const EditBtn = getByText(/edit/i)
    user.click(EditBtn)

    const updateText = getByPlaceholderText(mockTodo.todo)
    expect(updateText).toBeInTheDocument()
  })

  it('should update the todo via edit input', () => {
    const { getByPlaceholderText, getByText } = render(<Todo todo={mockTodo} />)
    const EditBtn = getByText(/edit/i)
    user.click(EditBtn)

    const updateText = getByPlaceholderText(mockTodo.todo)
    user.type(updateText, 'updated todo')
    expect(updateText).toHaveValue('updated todo')
  })
})
