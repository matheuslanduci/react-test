import { render, screen } from '@testing-library/react'

import App from '../App'

test('renders count, increment and decrement buttons', () => {
  render(<App />)

  expect(screen.getByText('Count: 0')).toBeInTheDocument()
  expect(screen.getByText('Increment')).toBeInTheDocument()
  expect(screen.getByText('Decrement')).toBeInTheDocument()
})

test('the increment button should increment count', () => {
  render(<App />)

  const incrementButton = screen.getByText('Increment')

  incrementButton.click()

  expect(screen.getByText('Count: 1')).toBeInTheDocument()
})

test('the decrement button should decrement count', () => {
  render(<App />)

  const decrementButton = screen.getByText('Decrement')

  decrementButton.click()

  expect(screen.getByText('Count: -1')).toBeInTheDocument()
})
