export default function ProductContent({ product, image }) {
  return (
    <div className="produto">
      <h2>{product}</h2>
      <img src={image} alt={product} />
      <button>Adicionar ao carrinho</button>
    </div>
  );
}
