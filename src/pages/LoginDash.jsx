import Header from "../componentes/atomos/Header";
import Footer from "../componentes/atomos/footer";
import Login from "../componentes/moleculas/Login";
import CookieBanner from "../componentes/atomos/CookieBanner";

function LoginDash() {
  return (
    <div>
      <Header></Header>
      <Login></Login>
      <CookieBanner></CookieBanner>
      <Footer></Footer>
    </div>
  );
}

export default LoginDash;
