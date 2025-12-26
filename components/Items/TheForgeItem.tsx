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
      const res = await axios.get("/api/bloxfruit");
      setData(res.data.data);
    } catch (error) {
      console.error("Error fetching The Forge data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-white/5 mb-5 h-25 rounded-lg text-white">
      <div className=" p-3">
        <div className="flex gap-5">
          <div className="bg-black w-25 h-20 rounded-sm flex justify-center items-center flex-col">
            <img
              className="w-10 h-10"
              src="https://img5.pic.in.th/file/secure-sv1/Arcane_pickaxe-Photoroom.png"
              alt=""
            />
            <span className="flex justify-center text-xl">{magmaCount}</span>
          </div>
          <div className="bg-black w-25 h-20 rounded-sm flex justify-center items-center flex-col">
            <img
              className="w-10 h-10"
              src="https://img2.pic.in.th/pic/Magma_Pickaxe.webp"
              alt=""
            />
            <span className="flex justify-center text-xl">{magmaCount}</span>
          </div>
          <div className="bg-black w-25 h-20 rounded-sm flex justify-center items-center flex-col">
            <img
              className="w-10 h-10"
              src="https://img5.pic.in.th/file/secure-sv1/Demonic_Pickaxe-Photoroom.png"
              alt=""
            />
            <span className="flex justify-center text-xl">{demonicCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TheForgeItem;
