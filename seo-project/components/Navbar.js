export default function Navbar() {
  return (
    <nav className="w-full bg-linear-to-r from-gray-900 via-slate-900 to-gray-900 border-b border-purple-500/20 px-8 py-5 flex justify-between items-center shadow-lg shadow-purple-500/10">
      <a href="/" className="group">
        <h1 className="text-3xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-blue-400 transition-all duration-300">
          PokéDex
        </h1>
      </a>

      <div className="flex items-center space-x-8 text-gray-300">
        <a 
          href="/" 
          className="text-lg font-medium hover:text-transparent hover:bg-linear-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300 relative group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a 
          href="/types" 
          className="text-lg font-medium hover:text-transparent hover:bg-linear-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300 relative group"
        >
          Types
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a 
          href="/pokemon/ability/overgrow" 
          className="text-lg font-medium hover:text-transparent hover:bg-linear-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300 relative group"
        >
          Abilities
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>
    </nav>
  )
}