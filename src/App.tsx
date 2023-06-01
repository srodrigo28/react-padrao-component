import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Login } from "./pages/Login";

export function App(){
  return(
    <>
      <NavBar />
      <Login />
      <Footer />
    </>
  )
}