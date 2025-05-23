import "@/app/ui/globals.css";
import { workSans } from "./ui/font";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} antialised`}
      >      
        <Header />
          {children}
        <Footer />  
      </body>
    </html>
  );
}
