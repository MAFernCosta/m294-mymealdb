import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import MealCard from '../components/MealCard'


// Test 1:
describe('MealCard', () => {
  it('Test - 1:zeigt den Mahlzeitnamen und das Bild an', () => {
    const meal = {
      id: '1',
      mealName: 'Spicy Arrabiata Penne',
      mealThumb: 'https://example.com/image.jpg'
    }
    render(
      <MemoryRouter>
        <MealCard meal={meal} handleDelete={() => {}} />
      </MemoryRouter>
    )
    expect(screen.getByText('Spicy Arrabiata Penne')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', meal.mealThumb)
  })
})

// Test 5:
describe('Test 5: MealCard enthält Link zur Detailseite', () => {
  it('enthält einen Link zur Detailseite der Mahlzeit', () => {
    const meal = {
      id: '99',
      mealName: 'Test Meal',
      mealThumb: 'https://example.com/img.jpg'
    }
    render(
      <MemoryRouter>
        <MealCard meal={meal} handleDelete={() => {}} />
      </MemoryRouter>
    )
    const link = screen.getByRole('link', { name: /test meal/i })
    expect(link).toHaveAttribute('href', '/mealdetails/99')
  })
})