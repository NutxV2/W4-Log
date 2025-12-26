'use client'

const headers = [
  "Status",
  "PC",
  "Name",
  "Level",
  "Melee",
  "Sword",
  "Gun",
  "Accessory",
  "Develfruit",
  "Fruit Inventory",
  "Word",
  "Money",
  "Fragment",
  "Race",
  "Mirror",
  "Valkyries",
]

const BloxFruit = () => {
  return (
    <div className="bg-black mt-5 w-[90%] mx-auto">
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white/5">
              {headers.map((h) => (
                <th
                  key={h}
                  className="px-3 py-2 text-sm font-medium text-white/80 border-b text-center border-white/10"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr className="bg-black hover:bg-white/5 transition">
              {headers.map((h) => (
                <td
                  key={h}
                  className="px-3 py-2 text-sm text-white/70 border-b text-center border-white/5"
                >
                  -
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BloxFruit
