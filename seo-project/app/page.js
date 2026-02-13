import Link from "next/link"
import SearchBar from "@/components/SearchBar"
import PokemonCard from "../components/PokemonCard"

export const metadata = {
  title: "PokéDex | Pokémon Stats Directory",
  description:
    "Browse Pokémon stats, abilities and types in an SEO optimized directory",

  openGraph: {
    title: "PokéDex | Pokémon Stats Directory",
    description:
      "Explore detailed Pokémon stats, abilities and types.",
    url: "https://pok-dex-six.vercel.app",
    siteName: "PokéDex",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PokéDex Directory",
    description:
      "Explore Pokémon stats, abilities and types.",
  },
}


export default function Home() {

  const pokemonList = ["pikachu","charizard","bulbasaur","squirtle","gengar","lucario"]

  const types = ["fire","water","grass","electric"]
  const abilities = ["overgrow","blaze","intimidate","chlorophyll"]

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-900 via-slate-900 to-black">
      
      {/* HERO SECTION */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-6xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Pokémon Stats Directory
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore comprehensive stats, abilities, and types of every Pokémon in one place
          </p>

          <div className="pt-4">
            <SearchBar/>
          </div>
        </div>
      </section>

      {/* FEATURED POKEMON */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-3">
              Featured Pokémon
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pokemonList.map(p => (
              <PokemonCard key={p} name={p}/>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="py-16 px-6 bg-linear-to-b from-slate-900 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-3">
              Browse by Type
            </h2>
            <p className="text-gray-400 text-lg">Discover Pokémon organized by their elemental types</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {types.map(type => (
              <Link
                key={type}
                href={`/pokemon/type/${type}`}
                className="group px-8 py-4 rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 capitalize text-lg"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse"></span>
                  {type}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABILITIES */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-3">
              Browse by Ability
            </h2>
            <p className="text-gray-400 text-lg">Explore Pokémon grouped by their unique abilities</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {abilities.map(a => (
              <Link
                key={a}
                href={`/pokemon/ability/${a}`}
                className="group px-8 py-4 rounded-2xl bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300 capitalize text-lg"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse"></span>
                  {a}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER SPACING
      <div className="h-16"></div> */}

    </main>
  )
}