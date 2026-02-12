export default function PokemonCard({ name }) {
  return (
    <a
      href={`/pokemon/${name}`}
      className="group bg-linear-to-br from-slate-800 to-gray-900 rounded-2xl p-6 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 block border border-slate-700/50 hover:border-purple-500/50"
    >
      <h2 className="text-2xl font-bold capitalize text-center mb-3 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
        {name}
      </h2>

      <p className="text-gray-400 text-sm text-center group-hover:text-purple-300 transition-colors duration-300 flex items-center justify-center gap-2">
        <span>View Stats</span>
        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
      </p>
    </a>
  )
}