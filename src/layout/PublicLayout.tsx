import { Outlet } from "react-router-dom";
import Header from "../components/estructura/Header";
import Footer from "../components/estructura/Footer";

export default function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}