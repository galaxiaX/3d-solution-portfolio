const Contact = () => {
  return (
    <section
      id='contact'
      className='relative h-[100dvh] w-[100dvw] shrink-0 bg-[#38B6FF] shadow-xl'
    >
      <div className='absolute top-[5%] left-[5%] m-12 text-4xl font-semibold'>
        3DSolution
      </div>

      <div className='grid h-full w-full grid-cols-5 gap-12 p-[7%] font-medium text-white'>
        <div className='col-span-2'></div>
        <div className='col-span-3 min-h-[300px] pr-48 text-4xl'>
          Your final impact statement goes here. Make it memorable!
        </div>
        <div className='flex flex-col gap-4'>
          <div className='text-lg'>connect with us</div>
          <div className='flex flex-col gap-2 text-sm'>
            <div>Instagram</div>
            <div>Twitter</div>
            <div>Facebook</div>
            <div>LinkedIn</div>
          </div>
        </div>
        <div className='flex flex-col gap-4'></div>
        <div className='flex flex-col gap-4'>
          <div className='text-lg'>our locations</div>
          <div className='flex flex-col gap-2 text-sm'>
            <div>Add your location 123 Anywhere St., Any City, ST 12345</div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='text-lg'>our locations 2</div>
          <div className='flex flex-col gap-2 text-sm'>
            <div>Add your location 123 Anywhere St., Any City, ST 12345</div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='text-lg'>our locations 3</div>
          <div className='flex flex-col gap-2 text-sm'>
            <div>Add your location 123 Anywhere St., Any City, ST 12345</div>
          </div>
        </div>
        <div className='col-span-5 text-xl font-semibold'>
          hello@reallygreatsite.com
        </div>
      </div>
    </section>
  );
};

export default Contact;
