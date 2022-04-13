import { render, screen } from '@testing-library/react'

import App from '../App'

test('renders count, increment and decrement buttons', () => {
  render(<App />)

  expect(screen.getByText('Count: 0')).toBeInTheDocument()
  expect(screen.getByText('Increment')).toBeInTheDocument()
  expect(screen.getByText('Decrement')).toBeInTheDocument()
})

test('should increment the button', () => {
  render(<App />)

  const incrementButton = screen.getByText('Increment')

  incrementButton.click()

  expect(screen.getByText('Count: 1')).toBeInTheDocument()
})

test('should decrement the button', () => {
  render(<App />)

  const decrementButton = screen.getByText('Decrement')

  decrementButton.click()

  expect(screen.getByText('Count: -1')).toBeInTheDocument()
})
