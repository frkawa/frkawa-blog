import '@/globals.css'

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body className='font-body'>{children}</body>
    </html>
  )
}
