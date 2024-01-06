import Content from "./components/Content";
import Header from "./components/Header";
import ProductContent from "./components/Content/ProductContent";
import FormContent from "./components/FormContent/formContent";
import img1 from "./images/product-1.jpg";
import img2 from "./images/product-2.jpg";
import img3 from "./images/product-3.jpg";

function App() {
  return (
    <div>
      <Header />
      <Content
        title="Sobre Nós"
        subtitle="Somos uma loja magnifica especializada em diversos produtos esportivos, juntando a tecnologia para agilizar o seu processo de aquisição"
      />
      <h1>Nossos Produtos</h1>
      <ProductContent product="Produto 1" image={img1} />
      <ProductContent product="Produto 2" image={img2} />
      <ProductContent product="Produto 3" image={img3} />
      <FormContent />
    </div>
  );
}

export default App;
