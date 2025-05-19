const Location = () => {
  return (
    <section
      id='location'
      className='flex w-[100dvw] shrink-0 flex-col md:grid md:h-[100dvh] md:grid-cols-11 md:shadow-xl'
    >
      <div className='p-16 text-6xl font-medium text-[#38b6ff] md:col-span-5'>
        Location
      </div>
      <div className='w-full bg-blue-400 max-md:aspect-square md:col-span-6'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.036575637011!2d100.51480407688125!3d13.796285196258479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b1600eddcab%3A0xb67828160a6bbc4d!2z4Lij4Lix4LiQ4Liq4Lig4Liy!5e0!3m2!1sen!2sth!4v1747652311349!5m2!1sen!2sth'
          width='100%'
          height='100%'
          className='h-full w-full'
          style={{ border: 0 }}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
    </section>
  );
};

export default Location;
