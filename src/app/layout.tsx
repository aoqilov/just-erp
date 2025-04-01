import "@/assets/sass/main.scss";

import AntdLayout from "@/layout/antdLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <AntdLayout>{children}</AntdLayout>
      </body>
    </html>
  );
}
