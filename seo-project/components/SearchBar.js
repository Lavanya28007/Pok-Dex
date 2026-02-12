"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  function handleSearch(e){
    e.preventDefault()
    if(!query.trim()) return
    router.push(`/pokemon/${query.toLowerCase()}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex justify-center gap-2 max-w-xl mx-auto"
    >
      <input
        value={query}
        onChange={e=>setQuery(e.target.value)}
        placeholder="Search Pokémon name..."
        className="border px-4 py-2 rounded-lg w-full outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="bg-black text-white px-6 rounded-lg hover:bg-gray-800"
      >
        Search
      </button>
    </form>
  )
}
