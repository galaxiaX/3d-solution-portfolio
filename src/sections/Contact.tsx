import { FiBox } from 'react-icons/fi';

const Contact = () => {
  return (
    <section
      id='contact'
      className='relative w-[100dvw] shrink-0 bg-[#38B6FF] md:h-[100dvh] md:shadow-xl'
    >
      <div className='flex items-center gap-1 text-4xl font-semibold max-md:p-[7%] md:absolute md:top-[5%] md:left-[5%] md:m-12'>
        <FiBox />
        3DSolution
      </div>

      <div className='grid h-fit w-full gap-12 p-[7%] font-medium text-white max-md:pb-20 md:h-full md:grid-cols-5'>
        <div className='max-md:hidden md:col-span-2'></div>
        <div className='text-4xl md:col-span-3 md:min-h-[300px] md:pr-48'>
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
        <div className='text-xl font-semibold md:col-span-5'>
          hello@reallygreatsite.com
        </div>
      </div>
    </section>
  );
};

export default Contact;
