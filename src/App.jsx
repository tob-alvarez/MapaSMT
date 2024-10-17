import Layout from "../components/common/Layout/Layout";
import { HashRouter, Route, Routes } from "react-router-dom";
import Mapa from "../components/Mapa/Mapa";
import ProviderMapa from "../components/context/MapaContext"
// import PrivateRoute from "../routes/PrivateRoute";
import PanelAdmin from "../components/admin/PanelAdmin";

function App() {

  return (
    <>
      <HashRouter>
        <ProviderMapa>
          <Layout>
            <Routes>
              <Route exact path="/*" element={<Mapa />} />
              <Route
              exact
              path="/admin"
              element={
                // <PrivateRoute>
                  <PanelAdmin />
                // </PrivateRoute>
              }
            />
            </Routes>
          </Layout>
        </ProviderMapa>
      </HashRouter>
    </>
  );
}

export default App;
