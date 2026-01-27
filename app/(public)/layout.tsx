import Footer from "@/components/ui/static/footer";
import { Navbar } from "@/components/ui/static/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}
