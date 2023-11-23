import Header from "../componentes/atomos/Header";
import Footer from "../componentes/atomos/footer";
import AdminTable from "../componentes/moleculas/DataTable";
import NuevoUsuario from "../componentes/moleculas/NuevoUsuario"

function Admin() {
  return (
    <div>
      <Header></Header>
        <AdminTable></AdminTable>
        <NuevoUsuario></NuevoUsuario>
      <Footer></Footer>
    </div>
  );
}

export default Admin;
