export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex  flex-col items-center  justify-center text-black dark:text-white ">
     {
        children
     }
  </div>
  );
}
