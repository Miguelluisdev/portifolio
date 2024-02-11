import { TypeAnimation } from 'react-type-animation';


const TypeWrite: React.FC = () => {


  return (
    <div className='text-branco bg-AzulEscuro bg-opacity-10 flex text-3xl' >
      <TypeAnimation
        sequence={[

          'Front End Developer',
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          'Fale comigo nas redes sociais',
          4000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypeWrite;
