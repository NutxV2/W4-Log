"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import TheForgeItem from "@/components/Items/TheForgeItem";

const headers = ["Status", "PC", "Name", "Level", "Pickaxe", "Money", "Race"];

const TheForge = () => {
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    try {
      const res = await axios.get("/api/theforge");

      // เอาเฉพาะข้อมูลล่าสุดต่อ username
      const latest = Object.values(
        res.data.data.reduce((acc: any, item: any) => {
          const name = item.name || item.username;
          if (!acc[name] || (item.timestamp ?? 0) > (acc[name].timestamp ?? 0)) {
            acc[name] = {
              ...item,
              name,
              status: item.status?.toUpperCase(),
            };
          }
          return acc;
        }, {})
      );

      setData(latest as any[]);
    } catch (error) {
      console.error("Error fetching The Forge data:", error);
    }
  };

  useEffect(() => {
    getData();
    const interval = setInterval(getData, 3000); // refresh ทุก 3 วิ
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black mt-5 w-[90%] mx-auto">
      <TheForgeItem />
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
            {data.length > 0 ? (
              data.map((row) => (
                <tr
                  key={`${row.name}-${row.timestamp}`}
                  className="bg-black hover:bg-white/5 transition"
                >
                  <td className="px-3 py-2 text-sm text-center border-b border-white/5">
                    <span
                      className={
                        row.status === "ONLINE"
                          ? "text-green-400 bg-green-400/20 rounded-xl px-3 py-1"
                          : "text-red-400 bg-red-400/20 rounded-xl px-3 py-1"
                      }
                    >
                      {row.status}
                    </span>
                  </td>

                  <td className="px-3 py-2 text-sm text-white/70 text-center border-b border-white/5">
                    {row.pc || "-"}
                  </td>

                  <td className="px-3 py-2 text-sm text-white/70 text-center border-b border-white/5">
                    {row.name}
                  </td>

                  <td className="px-3 py-2 text-sm text-white/70 text-center border-b border-white/5">
                    {row.level}
                  </td>

                  <td className="px-3 py-2 text-sm text-white/70 text-center border-b border-white/5">
                    {row.pickaxe || "-"}
                  </td>

                  <td className="px-3 py-2 text-sm text-white/70 text-center border-b border-white/5">
                    ${Number(row.gold).toLocaleString()}
                  </td>

                  <td className="px-3 py-2 text-sm text-white/70 text-center border-b border-white/5">
                    {row.race}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={headers.length}
                  className="py-8 text-center text-white/50 text-sm"
                >
                  No data available at the forge...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TheForge;
