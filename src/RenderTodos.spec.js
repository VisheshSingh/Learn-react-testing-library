import React from 'react'
import { render } from '@testing-library/react'
import RenderTodos from './RenderTodos'
import mockTodos from './mock/mockTodos'

it('should render an array of todos', () => {
  const mockUpdateTodos = jest.fn()
  const mockDeleteTodos = jest.fn()

  const RenderedTodos = render(
    <RenderTodos
      todos={mockTodos}
      updateTodo={mockUpdateTodos}
      deleteTodo={mockDeleteTodos}
    />
  )

  expect(RenderedTodos).toMatchInlineSnapshot(`
    Object {
      "asFragment": [Function],
      "baseElement": <body>
        <div>
          <ul>
            <li>
              <div
                class="sc-AxjAm gOOoVu"
                data-testid="wash-up-wrapper"
              >
                <span
                  class="sc-AxirZ gKuFMS"
                  data-testid="itemName"
                >
                  wash up
                </span>
                <span
                  class="sc-AxiKw dYDbiU"
                >
                  <span>
                    edit
                  </span>
                </span>
                <span
                  class="sc-AxheI fSeRCx"
                  data-testid="itemRemove"
                >
                  delete
                </span>
              </div>
            </li>
            <li>
              <div
                class="sc-AxjAm gOOoVu"
                data-testid="eat-some-cheese-wrapper"
              >
                <span
                  class="sc-AxirZ gKuFMS"
                  data-testid="itemName"
                >
                  eat some cheese
                </span>
                <span
                  class="sc-AxiKw dYDbiU"
                >
                  <span>
                    edit
                  </span>
                </span>
                <span
                  class="sc-AxheI fSeRCx"
                  data-testid="itemRemove"
                >
                  delete
                </span>
              </div>
            </li>
            <li>
              <div
                class="sc-AxjAm gOOoVu"
                data-testid="take-a-nap-wrapper"
              >
                <span
                  class="sc-AxirZ gKuFMS"
                  data-testid="itemName"
                >
                  take a nap
                </span>
                <span
                  class="sc-AxiKw dYDbiU"
                >
                  <span>
                    edit
                  </span>
                </span>
                <span
                  class="sc-AxheI fSeRCx"
                  data-testid="itemRemove"
                >
                  delete
                </span>
              </div>
            </li>
          </ul>
        </div>
      </body>,
      "container": <div>
        <ul>
          <li>
            <div
              class="sc-AxjAm gOOoVu"
              data-testid="wash-up-wrapper"
            >
              <span
                class="sc-AxirZ gKuFMS"
                data-testid="itemName"
              >
                wash up
              </span>
              <span
                class="sc-AxiKw dYDbiU"
              >
                <span>
                  edit
                </span>
              </span>
              <span
                class="sc-AxheI fSeRCx"
                data-testid="itemRemove"
              >
                delete
              </span>
            </div>
          </li>
          <li>
            <div
              class="sc-AxjAm gOOoVu"
              data-testid="eat-some-cheese-wrapper"
            >
              <span
                class="sc-AxirZ gKuFMS"
                data-testid="itemName"
              >
                eat some cheese
              </span>
              <span
                class="sc-AxiKw dYDbiU"
              >
                <span>
                  edit
                </span>
              </span>
              <span
                class="sc-AxheI fSeRCx"
                data-testid="itemRemove"
              >
                delete
              </span>
            </div>
          </li>
          <li>
            <div
              class="sc-AxjAm gOOoVu"
              data-testid="take-a-nap-wrapper"
            >
              <span
                class="sc-AxirZ gKuFMS"
                data-testid="itemName"
              >
                take a nap
              </span>
              <span
                class="sc-AxiKw dYDbiU"
              >
                <span>
                  edit
                </span>
              </span>
              <span
                class="sc-AxheI fSeRCx"
                data-testid="itemRemove"
              >
                delete
              </span>
            </div>
          </li>
        </ul>
      </div>,
      "debug": [Function],
      "findAllByAltText": [Function],
      "findAllByDisplayValue": [Function],
      "findAllByLabelText": [Function],
      "findAllByPlaceholderText": [Function],
      "findAllByRole": [Function],
      "findAllByTestId": [Function],
      "findAllByText": [Function],
      "findAllByTitle": [Function],
      "findByAltText": [Function],
      "findByDisplayValue": [Function],
      "findByLabelText": [Function],
      "findByPlaceholderText": [Function],
      "findByRole": [Function],
      "findByTestId": [Function],
      "findByText": [Function],
      "findByTitle": [Function],
      "getAllByAltText": [Function],
      "getAllByDisplayValue": [Function],
      "getAllByLabelText": [Function],
      "getAllByPlaceholderText": [Function],
      "getAllByRole": [Function],
      "getAllByTestId": [Function],
      "getAllByText": [Function],
      "getAllByTitle": [Function],
      "getByAltText": [Function],
      "getByDisplayValue": [Function],
      "getByLabelText": [Function],
      "getByPlaceholderText": [Function],
      "getByRole": [Function],
      "getByTestId": [Function],
      "getByText": [Function],
      "getByTitle": [Function],
      "queryAllByAltText": [Function],
      "queryAllByDisplayValue": [Function],
      "queryAllByLabelText": [Function],
      "queryAllByPlaceholderText": [Function],
      "queryAllByRole": [Function],
      "queryAllByTestId": [Function],
      "queryAllByText": [Function],
      "queryAllByTitle": [Function],
      "queryByAltText": [Function],
      "queryByDisplayValue": [Function],
      "queryByLabelText": [Function],
      "queryByPlaceholderText": [Function],
      "queryByRole": [Function],
      "queryByTestId": [Function],
      "queryByText": [Function],
      "queryByTitle": [Function],
      "rerender": [Function],
      "unmount": [Function],
    }
  `)
})
