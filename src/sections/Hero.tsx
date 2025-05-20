import TypeWriter from '@/components/TypeWriter';
import { FiBox } from 'react-icons/fi';

const Hero = () => {
  const onClickContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='home'
      className='relative h-[100dvh] w-[100dvw] shrink-0 bg-gradient-to-tr from-[#8EBBEF] to-[#BEEAFB] md:shadow-xl'
    >
      <div className='flex items-center gap-1 text-4xl font-semibold max-md:p-[7%] md:absolute md:top-[5%] md:left-[5%] md:m-12'>
        <FiBox />
        3DSolution
      </div>

      <div className='flex w-full justify-center max-md:h-full max-md:py-24 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:justify-end'>
        <div className='flex flex-col items-center gap-8 md:w-[80%]'>
          <div className='flex flex-col gap-4'>
            <div className='w-full text-[44px] font-medium max-md:text-center md:min-w-[615px] md:whitespace-nowrap'>
              <TypeWriter loop text='Smart Solution, Real Impact' />
            </div>
            <div className='text-center text-[24px] font-medium'>
              Custom software solutions designed to scale,
              <br />
              simplify, and accelerate your business
            </div>
          </div>
          <button
            onClick={onClickContact}
            className='w-fit rounded-full bg-[#38B6FF] px-4 py-2 duration-300 hover:scale-110 active:scale-80'
          >
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
