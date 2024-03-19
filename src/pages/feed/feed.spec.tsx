// aimport { render } from "@testing-library/react"
import { describe, it } from 'vitest'

import { filterBy } from "@progress/kendo-data-query";

const data = [
  { name: 'jose', popularity: 20 },
  { name: 'joseval', popularity: 38 },
  { name: 'maria', popularity: 80 },
  { name: 'osvaldo', popularity: 34 },
  { name: 'cleiton', popularity: 64 }
]

describe('Feed', () => {
  it('Should display data filtered by name', () => {
    const filter = filterBy(data ?? [], {
      logic: "or",
      filters: [
        { field: "name", operator: "contains", value: 'jose' },
      ]
    })

    expect(filter).toEqual([{ name: 'jose', popularity: 20 }, { name: 'joseval', popularity: 38 }])
  })

  it('Should display data filtered by popularity', () => {
    const filter = filterBy(data ?? [], {
      logic: "or",
      filters: [
        { field: "popularity", operator: "eq", value: '64' },
      ]
    })

    expect(filter).toEqual([{ name: 'cleiton', popularity: 64 }])
  })
})