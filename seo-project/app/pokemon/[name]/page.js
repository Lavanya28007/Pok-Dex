import { getPokemon } from "../../../lib/api"


export async function generateMetadata({ params }) {
  const { name } = await params

  const data = await getPokemon(name)

  if (!data) {
    return { title: "Pokemon Not Found" }
  }

  return {
    title: `${data.name} stats and abilities`,
    description: `View stats, abilities and type of ${data.name}`,
    openGraph: {
      title: data.name,
      description: `Stats of ${data.name}`,
      images: [data.sprites.front_default]
    }
  }
}


//  PAGE COMPONENT
export default async function Page({ params }) {

  const { name } = await params
  const data = await getPokemon(name)

  if (!data) {
    return <h1 className="text-center text-2xl mt-10">Pokemon Not Found</h1>
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Thing",
    name: data.name,
    description: `${data.name} stats and abilities`,
    image: data.sprites.front_default
  }

  return (
    <div className="p-10 text-center max-w-xl mx-auto">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="text-5xl font-bold capitalize mb-6">{data.name}</h1>

      <img src={data.sprites.front_default} 
      className="mx-auto w-40 mb-6"/>

      <div className="bg-gray-800 rounded-2xl p-6 space-y-3 shadow-lg">
         <p><span className="text-gray-400">Height:</span> {data.height}</p>
      <p><span className="text-gray-400">Weight:</span> {data.weight}</p>
      <p>
        <span className="text-gray-400">Type:</span>{" "}
        {data.types.map(t=>t.type.name).join(", ")}
      </p>

      </div>

    </div>
  )
}
