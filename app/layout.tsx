import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'NFT Construction Network',
  description: 'Connecting builders and investors in the real world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
