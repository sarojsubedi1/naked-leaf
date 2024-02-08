import Navbar from "@/components/navbar";
import NavBarMobile from "@/components/nav-moblie";
import Footer from "@/components/footer";
import { CartProvider } from "@/utils/cartContext";

export default function PublicLayout({ children }) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <NavBarMobile />
        <main>{children}</main>
        <Footer />
      </CartProvider>
    </>
  );
}
