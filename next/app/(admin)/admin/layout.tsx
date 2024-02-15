export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body>
        <div>Admin layout</div>
        {children}
      </body>
    </html>
  )
}
