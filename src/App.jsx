import Content from "./components/Content";
import Header from "./components/Header";
import ProductContent from "./components/Content/ProductContent";
import FormContent from "./components/Content/formContent";

function App() {
  return (
    <div>
      <Header />
      <Content
        title="Sobre Nós"
        subtitle="Somos uma loja magnifica especializada em diversos produtos esportivos, juntando a tecnologia para agilizar o seu processo de aquisição"
      />
      <ProductContent />
      <FormContent />
    </div>
  );
}

export default App;
