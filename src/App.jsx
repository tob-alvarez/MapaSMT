import Layout from "../components/common/Layout/Layout";
import Mapa from "../components/Mapa/Mapa";
import ProviderMapa from "../components/context/MapaContext"

function App() {

  return (
    <>
      <Layout>
        <ProviderMapa>
          <Mapa/>
        </ProviderMapa>
      </Layout>
    </>
  );
}

export default App;
