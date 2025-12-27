import { Activity } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
const TheForgeItem = () => {
  const [data, setData] = useState<any[]>([]);

  const arcaneCount = data.filter(
    (i) =>
      i.pickaxe?.toLowerCase() === "acanpickaxe" ||
      i.pickaxe?.toLowerCase() === "arcanepickaxe"
  ).length;

  const magmaCount = data.filter(
    (i) => i.pickaxe?.toLowerCase() === "magmapickaxe"
  ).length;

  const demonicCount = data.filter(
    (i) => i.pickaxe?.toLowerCase() === "demonicpickaxe"
  ).length;

  const getData = async () => {
    try {
      const res = await axios.get("/api/theforge");
      setData(res.data.data);
    } catch (error) {
      console.error("Error fetching The Forge data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-white/5 border border-white/10 mb-6 rounded-2xl text-white backdrop-blur-sm shadow-xl">
      <div className="p-4">
        <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
          {/* Item Card 1 */}
          <div className="group bg-black/40 border border-white/5 min-w-[100px] flex-1 h-24 rounded-xl flex justify-center items-center flex-col transition-all duration-300 hover:bg-white/10 hover:border-white/20">
            <div className="relative">
              <img
                className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform"
                src="https://img5.pic.in.th/file/secure-sv1/Arcane_pickaxe-Photoroom.png"
                alt="Arcane Pickaxe"
              />
            </div>
            <span className="mt-1 font-mono text-xl font-bold tracking-wider">
              {magmaCount}
            </span>
          </div>

          {/* Item Card 2 */}
          <div className="group bg-black/40 border border-white/5 min-w-[100px] flex-1 h-24 rounded-xl flex justify-center items-center flex-col transition-all duration-300 hover:bg-white/10 hover:border-white/20">
            <div className="relative">
              <img
                className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(255,100,0,0.3)] group-hover:scale-110 transition-transform"
                src="https://img2.pic.in.th/pic/Magma_Pickaxe.webp"
                alt="Magma Pickaxe"
              />
            </div>
            <span className="mt-1 font-mono text-xl font-bold tracking-wider">
              {magmaCount}
            </span>
          </div>

          {/* Item Card 3 */}
          <div className="group bg-black/40 border border-white/5 min-w-[100px] flex-1 h-24 rounded-xl flex justify-center items-center flex-col transition-all duration-300 hover:bg-white/10 hover:border-white/20">
            <div className="relative">
              <img
                className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(150,0,255,0.3)] group-hover:scale-110 transition-transform"
                src="https://img5.pic.in.th/file/secure-sv1/Demonic_Pickaxe-Photoroom.png"
                alt="Demonic Pickaxe"
              />
            </div>
            <span className="mt-1 font-mono text-xl font-bold tracking-wider">
              {demonicCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TheForgeItem;
