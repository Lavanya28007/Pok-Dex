export default function Footer(){
  return(
    <footer className="bg-linear-to-r from-gray-900 via-slate-900 to-gray-900 border-t border-purple-500/20 text-center py-8 mt-20 shadow-inner shadow-purple-500/5">
      <p className="text-gray-400 text-lg">
        <span className="font-semibold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          PokéDex SEO Project
        </span>
        {" • "}
        <span>Built with Next.js</span>
      </p>
      <p className="text-gray-500 text-sm mt-2">
        Explore the world of Pokémon with comprehensive stats and data
      </p>
    </footer>
  )
}