import { hotels } from '@/data/dummyData';
import { Globe } from 'lucide-react';
import { motion } from 'motion/react';

const calculatePrice = (hotel: any) => {
  const percentage = Math.floor(
    ((hotel.originalPrice - hotel.currentPrice) / hotel.currentPrice) * 100
  );
  return percentage;
};

export function HotelsListSection() {
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
      className="flex items-center px-4 md:py-20 flex-col"
    >
      <div className=" flex flex-col gap-16">
        <div className="flex flex-col md:flex-row items-center gap-5 justify-between">
          <header className="flex flex-col flex-1/2 gap-4">
            <span className="rounded-full self-start border-neutral-300 border text-neutral-950 tracking-tighter px-3 py-1">
              Special Offer
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter text-neutral-950">
              Limited-Time Offers You Can't Miss!
            </h1>
          </header>

          <div className="flex flex-col md:flex-1/3 lg:flex-1/5 gap-5">
            <p className="text-neutral-600 tracking-tighter text-sm">
              Enjoy unbeatable rates, complimentary perks and extra insights on
              us. Your perfect getaway just got even better!
            </p>

            <button className="rounded-full self-start bg-neutral-950 text-white text-sm tracking-tighter py-3 px-5">
              See All Special Offer
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hotels.slice(0, 8).map((hotel, index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: index * 0.2,
                  delay: index * 0.2,
                }}
                viewport={{
                  once: true,
                }}
                key={index}
                className="flex flex-col gap-2"
              >
                <div className="relative">
                  <div className="absolute rounded-xl top-0 left-0 bg-black/20 w-full h-full"></div>
                  <img
                    className="rounded-xl w-full col-span-1 object-cover h-[300px]"
                    src={hotel?.image}
                  />
                  <span className="rounded-full absolute top-4 right-4 bg-black/70 text-white text-xs  tracking-tighter py-1 px-3">
                    {calculatePrice(hotel)}% discount
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-neutral-950 tracking-tighter">
                    {hotel.name}
                  </h3>
                  <h5 className="flex items-center gap-0.5 text-neutral-500 text-xs tracking-tighter">
                    <Globe size={12} /> <span>{hotel.location}</span>
                  </h5>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
