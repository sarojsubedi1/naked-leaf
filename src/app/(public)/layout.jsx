import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CartProvider } from "@/utils/cartContext";

export default function PublicLayout({ children }) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </CartProvider>
    </>
  );
}
