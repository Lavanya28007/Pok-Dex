import Link from "next/link"

export const metadata = {
  title: "All Pokémon Types | Pokédex Directory",
  description:
    "Browse a complete list of Pokémon types and explore Pokémon belonging to each type with stats and abilities.",
  metadataBase: new URL("https://pok-dex-six.vercel.app/"),

  openGraph: {
    title: "All Pokémon Types",
    description:
      "Discover every Pokémon type and view Pokémon belonging to each category.",
    url: "https://pok-dex-six.vercel.app/types",
    siteName: "Pokédex SEO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "All Pokémon Types",
    description:
      "Browse Pokémon types and explore detailed Pokémon data.",
  },

  robots: {
    index: true,
    follow: true,
  },
}



const types = [
  "fire","water","grass","electric","psychic","ice",
  "dragon","dark","fairy","normal","fighting","flying",
  "poison","ground","rock","bug","ghost","steel"
]

export default function TypesPage(){
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-slate-900 to-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Pokémon Types
          </h1>
          <div className="w-32 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg">
            Explore all 18 Pokémon types and discover their unique characteristics
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {types.map(type => (
            <Link
              key={type}
              href={`/pokemon/type/${type}`}
              aria-label={`View ${type} type pokemon`}
              className="group capitalize p-6 rounded-2xl bg-linear-to-br from-slate-800 to-gray-900 text-center hover:scale-105 transition-all duration-300 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-blue-500/30 border border-slate-700/50 hover:border-blue-500/50"
            >
              <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                {type}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}