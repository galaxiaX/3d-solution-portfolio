const Hero = () => {
  return (
    <section
      id='home'
      className='relative h-[100dvh] w-[100dvw] shrink-0 bg-gradient-to-tr from-[#8EBBEF] to-[#BEEAFB] shadow-xl'
    >
      <div className='absolute top-[5%] left-[5%] m-12 text-4xl font-semibold'>
        3DSolution
      </div>

      <div className='absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 justify-end'>
        <div className='flex w-[80%] flex-col items-center gap-8'>
          <div className='flex flex-col gap-4'>
            <div className='text-[44px] font-medium'>
              Smart Solution, Real Impact
            </div>
            <div className='text-center text-[24px] font-medium'>
              Custom software solutions designed to scale,
              <br />
              simplify, and accelerate your business
            </div>
          </div>
          <button className='w-fit rounded-full bg-[#38B6FF] px-4 py-2'>
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
