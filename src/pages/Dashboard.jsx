import Header from "../componentes/atomos/Header";
import Footer from "../componentes/atomos/footer";
import Graficas from "../componentes/moleculas/Graficas";
import Barra from "../componentes/moleculas/Barra";
import Line from "../componentes/moleculas/Line";
import Home from "../componentes/moleculas/Home";
import Sens from "../componentes/moleculas/sens";
import Lux from "../componentes/moleculas/luminisidad";


function Dashboard() {
    return (
      <div>
        <Header></Header>
        <Home></Home>
        <Sens></Sens>
        <Graficas></Graficas>
        <Barra></Barra>
        <Lux></Lux>
        <Line></Line>
        <Footer></Footer>
      </div>
    );
}

export default Dashboard;