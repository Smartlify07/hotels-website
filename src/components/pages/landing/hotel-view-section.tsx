import { hotels } from '@/data/dummyData';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function HotelViewSection() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="flex flex-col md:flex-row items-stretch gap-10 md:py-10 px-4"
    >
      <div className="flex-1/2">
        <div className="relative h-[450px]">
          <img
            className="rounded-md object-cover h-[450px] w-full"
            src={hotels[2].image}
          />
          <div className="absolute top-0 left-0 bg-black/50 rounded-md h-full w-full"></div>

          <div className="flex flex-col px-4 bottom-4 absolute gap-4">
            <span className="rounded-full self-start tracking-tighter py-1 text-sm px-2 border text-white/80 border-white/50">
              {hotels[2].location}{' '}
            </span>

            <h1 className="text-white font-medium tracking-tighter text-4xl">
              {hotels[2].name}
            </h1>
            <p className="text-white/80 md:w-8/12 tracking-tighter text-sm md:text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae quod dignissimos ducimus provident! Quos culpa eum
              magnam eos sequi ducimus?
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1/2 flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-3 gap-4">
            <img
              className="rounded-lg object-cover col-span-1 w-full h-[170px]"
              src={
                'https://res.cloudinary.com/dgpbznsc3/image/upload/v1747688115/photorealistic-wooden-house-interior-with-timber-decor-furnishings_h9i1ej.jpg'
              }
            />
            <img
              className="rounded-lg object-cover col-span-1 w-full h-[170px]"
              src={
                'https://res.cloudinary.com/dgpbznsc3/image/upload/v1747688116/3d-rendering-wooden-house_gs3jri.jpg'
              }
            />
            <img
              className="rounded-lg object-cover col-span-1 w-full h-[170px]"
              src={
                'https://res.cloudinary.com/dgpbznsc3/image/upload/v1747688116/3d-rendering-wooden-house_1_ukbyz7.jpg'
              }
            />
          </div>

          <div className="flex flex-wrap lg:w-6/12 gap-2">
            <span className="px-4 w-fit text-sm text-neutral-800 tracking-tighter rounded-full border border-neutral-300 py-1">
              Beachfront
            </span>
            <span className="px-4 w-fit text-sm text-neutral-800 tracking-tighter rounded-full border border-neutral-300 py-1">
              Wellness
            </span>
            <span className="px-4 w-fit text-sm text-neutral-800 tracking-tighter rounded-full border border-neutral-300 py-1">
              Adventure
            </span>
            <span className="px-4 w-fit text-sm text-neutral-800 tracking-tighter rounded-full border border-neutral-300 py-1">
              Scenic
            </span>
            <span className="px-4 w-fit text-sm text-neutral-800 tracking-tighter rounded-full border border-neutral-300 py-1">
              Family-friendly
            </span>
            <span className="px-4 w-fit text-sm text-neutral-800 tracking-tighter rounded-full border border-neutral-300 py-1">
              Exclusive
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-white cursor-pointer bg-neutral-950 tracking-tighter text-sm rounded-full py-3 px-6">
              Book Now
            </button>
            <button className="text-neutral-950 cursor-pointer tracking-tighter text-sm border border-neutral-300 rounded-full py-3 px-6">
              See Details
            </button>
          </div>

          <div className="flex items-center gap-6">
            <button className="rounded-full cursor-pointer">
              <ArrowLeft size={20} className="text-neutral-800" />
            </button>

            <button className="rounded-full cursor-pointer border border-neutral-300 size-10 flex items-center justify-center">
              <ArrowRight size={20} className="text-neutral-950" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
