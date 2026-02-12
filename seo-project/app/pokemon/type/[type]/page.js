export async function generateMetadata({ params }) {
  const { type } = params

  return {
    title: `${type} Type Pokémon List | Stats & Names`,
    description: `Explore all ${type}-type Pokémon with names, stats, and details.`,
    openGraph: {
      title: `${type} Type Pokémon`,
      description: `Full list of ${type} Pokémon`,
    },
    alternates:{
      canonical:`https://yourdomain.com/pokemon/type/${type}`
    }
  }
}

export default async function Page({ params }) {
  const { type } = await params

  const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`,{
     next:{ revalidate:86400 }
  })

  if(!res.ok){
    return (
      <div className="min-h-screen bg-linear-to-b from-gray-900 via-slate-900 to-black flex items-center justify-center">
        <h1 className="text-center text-3xl font-bold text-red-400">Type not found</h1>
      </div>
    )
  }

  const data = await res.json()

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-slate-900 to-black py-16 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"CollectionPage",
            name:`${type} type Pokemon`,
            description:`List of ${type} type Pokemon`
          })
        }}
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold capitalize mb-4 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {type} Type Pokémon
          </h1>
          <div className="w-32 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg">
            Discover all {type}-type Pokémon and their unique characteristics
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.pokemon.slice(0,20).map(p => (
            <a
              key={p.pokemon.name}
              href={`/pokemon/${p.pokemon.name}`}
              className="group bg-linear-to-br from-slate-800 to-gray-900 rounded-2xl p-6 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50"
            >
              <h2 className="text-xl capitalize text-center font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                {p.pokemon.name}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}