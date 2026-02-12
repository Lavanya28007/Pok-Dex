export async function generateMetadata({ params }) {
  const { ability } = await params

  return {
    title: `${ability} Ability Pokémon List`,
    description: `Pokémon that have the ${ability} ability.`,
    openGraph: {
      title: `${ability} Ability Pokémon`,
      description: `List of Pokémon with ${ability} ability`
    },
    alternates:{
      canonical:`https://yourdomain.com/pokemon/ability/${ability}`
    }
  }
}

export default async function Page({ params }) {
  const { ability } = await params

  const res = await fetch(`https://pokeapi.co/api/v2/ability/${ability}`,{
    next:{ revalidate:86400 }
  })

  if(!res.ok){
    return (
      <div className="min-h-screen bg-linear-to-b from-gray-900 via-slate-900 to-black flex items-center justify-center">
        <h1 className="text-center text-3xl font-bold text-red-400">Ability not found</h1>
      </div>
    )
  }

  const data = await res.json()

  const schema = {
    "@context":"https://schema.org",
    "@type":"CollectionPage",
    name:`${ability} ability Pokemon`,
    description:`List of Pokemon with ${ability} ability`
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-slate-900 to-black py-16 px-6">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold capitalize mb-4 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {ability} Ability Pokémon
          </h1>
          <div className="w-32 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg">
            Explore all Pokémon with the {ability} ability
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.pokemon.slice(0,20).map(p => (
            <a
              key={p.pokemon.name}
              href={`/pokemon/${p.pokemon.name}`}
              className="group bg-linear-to-br from-slate-800 to-gray-900 rounded-2xl p-6 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 border border-slate-700/50 hover:border-purple-500/50"
            >
              <h2 className="text-xl capitalize text-center font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-blue-400 transition-all duration-300">
                {p.pokemon.name}
              </h2>
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}