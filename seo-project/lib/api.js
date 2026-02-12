export async function getPokemon(name){

if(!name) return null

const res = await fetch(
`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
{ cache:"no-store" }
)

if(!res.ok) return null

return res.json()
}
