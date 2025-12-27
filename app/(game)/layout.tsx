import Navbar from "@/components/Navbar/Navbar"

export default function Member({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
    <Navbar />
      <main>{children}</main>
    </>
  )
}
