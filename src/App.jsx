import Layout from "../components/common/Layout/Layout";
import Mapa from "../components/Mapa/Mapa";
import ProviderMapa from "../components/context/MapaContext"

function App() {

  return (
    <>
        <ProviderMapa>
          <Layout>
              <Mapa/>
          </Layout>
        </ProviderMapa>
    </>
  );
}

export default App;
