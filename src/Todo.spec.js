import React from 'react'
import { render } from '@testing-library/react'
import Todo from './Todo'
import RenderTodos from './RenderTodos'

describe('<Todos />', () => {
  const mockTodo = { id: 1, todo: 'buy milk' }
  it('Should render a todo object', () => {
    const { debug, getByTestId } = render(<Todo todo={mockTodo} />)
    // get element by test-id
    const ItemName = getByTestId('itemName')
    expect(ItemName).toHaveTextContent(mockTodo.todo)
    debug()
  })
})
