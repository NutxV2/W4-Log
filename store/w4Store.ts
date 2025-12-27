import axios from "axios"
import { create } from "zustand"

type User = {
  id: string
  name: string
  created_at: string
}

type W4Store = {
  user: User | null
  getUsers: () => Promise<void>
}

const useW4Store = create<W4Store>((set) => ({
  user: null,

  getUsers: async () => {
    try {
      const res = await axios.get("/api/user")
      set({ user: res.data.data })
    } catch (error) {
      console.error(error)
    }
  }
}))

export default useW4Store
