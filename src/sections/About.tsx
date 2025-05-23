import Image from 'next/image';
import ImageAbout1 from '@/assets/images/about/pexels-fauxels-3183150.jpg';
import ImageAbout2 from '@/assets/images/about/pexels-tara-winstead-8386440.jpg';

const About = () => {
  return (
    <section
      id='about'
      className='flex h-fit w-[100dvw] shrink-0 flex-col overflow-hidden md:grid md:h-[100dvh] md:grid-cols-2 md:shadow-xl'
    >
      <div className='grid w-full gap-[1px] max-md:hidden md:grid-rows-2'>
        <div className='relative h-full w-full shrink-0'>
          <Image
            src={ImageAbout1}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            style={{ objectFit: 'cover' }}
            alt='image-about-1'
          />
        </div>
        <div className='relative h-full w-full shrink-0'>
          <Image
            src={ImageAbout2}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            style={{ objectFit: 'cover' }}
            alt='image-about-2'
          />
        </div>
      </div>
      <div className='flex flex-col gap-16 max-md:px-[7%] max-md:py-20 md:p-20'>
        <div className='text-6xl font-medium text-[#38b6ff]'>About Us</div>

        <div className='grid aspect-[2] w-full grid-cols-2 gap-[1px] md:hidden'>
          <div className='relative aspect-square h-full w-full shrink-0'>
            <Image
              src={ImageAbout1}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              style={{ objectFit: 'cover' }}
              alt='image-about-1'
            />
          </div>
          <div className='relative aspect-square h-full w-full shrink-0'>
            <Image
              src={ImageAbout2}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              style={{ objectFit: 'cover' }}
              alt='image-about-2'
            />
          </div>
        </div>

        <div className='text-lg text-[#535353]'>
          At 3DSolution, we are dedicated to pioneering innovative solutions in
          the tech industry. With a focus on software development, cloud
          services, and solution service, we aim to transform businesses by
          delivering cutting-edge products and services that drive efficiency
          and growth.
          <br />
          <br />
          Our team is comprised of skilled professionals who share a passion for
          pushing the boundaries of what&apos;s possible. By embracing the
          latest technologies, we provide our clients with personalized
          solutions that meet their unique needs and challenges.
          <br />
          <br />
          With a strong commitment to quality, reliability, and customer
          satisfaction, we strive to build lasting relationships with our
          clients and partners. At 3DSolution, we don&apos;t just provide
          services – we create opportunities for success.
        </div>
      </div>
    </section>
  );
};

export default About;
