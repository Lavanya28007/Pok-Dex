export default function Loading() {
  return (
    <div className="p-10 text-center animate-pulse">

      <div className="h-10 w-60 bg-gray-700 rounded mx-auto mb-6"></div>

      <div className="w-40 h-40 bg-gray-700 rounded-full mx-auto mb-6"></div>

      <div className="bg-gray-800 rounded-2xl p-6 space-y-3 max-w-md mx-auto">
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded"></div>
      </div>

    </div>
  )
}
