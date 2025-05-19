import Image from 'next/image';
import ImageServices1 from '@/assets/images/services/pexels-divinetechygirl-1181263.jpg';
import ImageServices2 from '@/assets/images/services/pexels-mikhail-nilov-7988089.jpg';
import ImageServices3 from '@/assets/images/services/pexels-leeloothefirst-8938734.jpg';
import ImageServices4 from '@/assets/images/services/pexels-divinetechygirl-1181244.jpg';

const FadeBackground = ({ height = '100%' }: { height: string }) => {
  return (
    <div
      style={{ height }}
      className='absolute bottom-0 h-[50%] w-full bg-gradient-to-t from-black to-transparent'
    />
  );
};
const Services = () => {
  return (
    <section
      id='services'
      className='flex h-[100dvh] w-[100dvw] shrink-0 items-center justify-center shadow-xl'
    >
      <div className='grid h-full max-h-[60%] w-full max-w-[90%] grid-cols-4 grid-rows-2 gap-2'>
        <div className='col-span-2 shrink-0 p-16 text-6xl font-medium text-[#38b6ff]'>
          Our services
        </div>
        <div className='relative shrink-0 bg-red-400'>
          <Image
            src={ImageServices1}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            objectFit='cover'
            alt='image-services-1'
          />
          <FadeBackground height='50%' />
          <div className='absolute bottom-[32px] w-full text-center text-white drop-shadow-2xl'>
            IT System Consulting Service
          </div>
        </div>
        <div className='relative row-span-2 shrink-0 bg-red-400'>
          <Image
            src={ImageServices2}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            objectFit='cover'
            alt='image-services-2'
          />
          <FadeBackground height='50%' />
          <div className='absolute bottom-[32px] w-full text-center text-white drop-shadow-2xl'>
            System Development Service
          </div>
        </div>
        <div className='shrink-0'></div>
        <div className='relative shrink-0 bg-red-400'>
          <Image
            src={ImageServices3}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            objectFit='cover'
            alt='image-services-3'
          />
          <FadeBackground height='50%' />
          <div className='absolute bottom-[32px] w-full text-center text-white drop-shadow-2xl'>
            Fintech Solution
          </div>
        </div>
        <div className='relative shrink-0 bg-red-400'>
          <Image
            src={ImageServices4}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            objectFit='cover'
            alt='image-services-4'
          />
          <FadeBackground height='50%' />
          <div className='absolute bottom-[32px] w-full text-center text-white drop-shadow-2xl'>
            Mobile Application
            <br />
            Development Service
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
