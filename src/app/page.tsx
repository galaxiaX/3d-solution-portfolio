// import Image from "next/image";

export default function Home() {
  return (
    <main className='flex h-[100dvh] snap-x snap-mandatory overflow-x-auto scroll-smooth'>
      <section className='h-full w-[100dvw] shrink-0 bg-gradient-to-tr from-[#8EBBEF] to-[#BEEAFB] shadow-xl'>
        <div className='m-12 text-4xl font-semibold'>3DSolution</div>

        <div className='flex w-full justify-end'>
          <div className='flex w-[80%] flex-col items-center gap-4'>
            <div className='text-[44px] font-medium'>
              Smart Solution, Real Impact
            </div>
            <div className='text-[24px] font-medium'>
              Custom software solutions designed to scale, simplify, and
              accelerate your business
            </div>
            <button className='w-fit rounded-full bg-[#38B6FF] px-4 py-2'>
              Contact us
            </button>
          </div>
        </div>
      </section>
      <section className='h-full w-[100dvw] shrink-0 shadow-xl'></section>
      <section className='h-full w-[100dvw] shrink-0 shadow-xl'></section>
      <section className='h-full w-[100dvw] shrink-0 shadow-xl'></section>
      <section className='h-full w-[100dvw] shrink-0 bg-[#38B6FF] shadow-xl'></section>
    </main>
  );
}
