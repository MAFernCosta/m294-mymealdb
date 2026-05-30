import { describe, it, expect, vi, beforeEach } from 'vitest'

import { searchMeal, deleteMeal } from '../api/meals'

// Test 2:
describe('Test 2: searchMeal ruft die richtige URL auf', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => []
    })
  })

  it('ruft die richtige API-URL mit dem Suchbegriff auf', async () => {
    await searchMeal('pasta')
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('mealName:contains=pasta')
    )
  })
})

// Test 3:
describe('Test 3: deleteMeal ruft DELETE auf', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true })
  })

  it('sendet einen DELETE-Request mit der richtigen ID', async () => {
    await deleteMeal('42')
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/meals/42'),
      expect.objectContaining({ method: 'DELETE' })
    )
  })
})

// Test 4: 
describe('searchMeal wirft Fehler bei fehlgeschlagenem Request', () => {
  it('wirft einen Fehler wenn die API nicht erreichbar ist', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false })
    await expect(searchMeal('pasta')).rejects.toThrow('Meals could not be loaded')
  })
})