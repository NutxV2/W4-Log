"use client"

import { useState } from "react"
import { Settings, Copy, Check } from "lucide-react"
import { DynamicDialog } from "@/components/Bulid Ui/dialog"

export function SettingButton() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const textToCopy = `API_URL=https://api.example.com
TOKEN=YOUR_TOKEN_HERE
MODE=production`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <>
      {/* ปุ่ม Setting */}
      <button
        onClick={() => setOpen(true)}
        className="
          flex items-center gap-2 px-4 py-2 rounded-xl
          text-white/70 hover:text-white
          hover:bg-white/10 transition-all
        "
      >
        <Settings size={18} />
        <span className="text-sm font-medium">MODIFLY</span>
      </button>

      {/* Dialog */}
      <DynamicDialog
        open={open}
        onOpenChange={setOpen}
        title="SETTING FOR SCRIPT"
        description="Script and Other Settings"
        footer={
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-md bg-white text-black"
          >
            Close
          </button>
        }
      >
        <div className="space-y-3">
          {/* กล่องข้อความที่ copy ได้ */}
          <div className="relative bg-black rounded-lg ">
            <pre 
            className="text-sm bg-white/5  text-white border-white/10 rounded-lg p-3 select-text">
            {textToCopy}
            </pre>

            <button
              onClick={handleCopy}
              className="
                absolute top-2 right-2
                flex items-center gap-1 px-2 py-1 rounded-md
                bg-white/10 hover:bg-white/20 text-xs
                transition
              "
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      </DynamicDialog>
    </>
  )
}
