export default function Loading(){
  return (
    <div className="p-10 animate-pulse">

      <div className="h-10 w-80 bg-gray-700 rounded mx-auto mb-10"></div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {Array.from({length:12}).map((_,i)=>(
          <div key={i} className="h-24 bg-gray-800 rounded-2xl"></div>
        ))}
      </div>

    </div>
  )
}
