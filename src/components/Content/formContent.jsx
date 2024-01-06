export default function FormContent() {
  return (
    <section className="Form">
      <h2>Fale Conosco</h2>
      <form action="">
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" />

        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea name="mensagem" id="mensagem"></textarea>

        <button alt="Enviar formulário">Enviar</button>
      </form>
    </section>
  );
}
