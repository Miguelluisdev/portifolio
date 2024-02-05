import React, { useRef, useState } from 'react';
import "../../index.css"
const Contact: React.FC = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [enviado] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   if (!emailRef.current?.value.includes("@")) {
  //     alert("Email inválido");
  //     return;
  //   }
  //   setEnviado(true);

  //   setNome("");
  //   setEmail("");
  //   setMensagem("");
  // };

  return (
    <div>
      <form method="POST" action="https://formsubmit.co/miguelluisataideferreira68@gmail.com" className='mx-auto max-w-md w-full pt-48 animate-flip-up animate-once animate-duration-[2000ms] animate-delay-[30ms] animate-ease-out animate-normal animate-fill-backwards'>
        <h2 className='text-2xl font-bold mb-4 font-Montserrat'>Contato</h2>
        <span className='font-Montserrat' >Contato por email ou pelas redes sociais.</span>
        <div className='mb-4'>
          <label htmlFor="nome" className='block mb-2 text-gray-700'>Nome</label>
          <input
            type="text"
            id='nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className='bg-azul-celeste  border border-az rounded-md py-2 px-4 w-full'
            placeholder='digite seu nome'
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-700">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
            placeholder='digite seu email'
            required
            className="bg-azul-celeste rounded-md border border-az py-2 px-4 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mensagem" className="block mb-2 text-gray-700">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="bg-azul-celeste border border-az rounded-md py-2 px-4 w-full h-24"
          />
        </div>
        <button
          type='submit'
          className={`bg-gradient-to-r from-AzulEscuro to-branco hover:bg-az rounded text-white font-bold py-2 px-4 w-full
              ${email === '' || nome.length < 6 ? 'disabled-btn' : ''}`}
          disabled={email === '' || nome.length < 6}
        >
          Enviar
        </button>
        {enviado && (
          <p className='mt-4 text-green-500'>Mensagem enviada com sucesso</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
