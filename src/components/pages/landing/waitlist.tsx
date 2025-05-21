import { hotels } from '@/data/dummyData';
import { motion } from 'motion/react';

export function Waitlist() {
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
      className="px-4 md:pt-20 flex items-center justify-center"
    >
      <div className=" w-full flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:items-end md:flex-row md:gap-6 lg:gap-0 justify-between">
          <header className="flex-1/2 flex flex-col gap-4">
            <motion.span
              initial={{
                opacity: 0,
                y: -5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="rounded-full self-start tracking-tight border border-neutral-300 px-3 text-sm py-2"
            >
              Join Waitlist
            </motion.span>

            <motion.h1
              initial={{
                opacity: 0,
                y: 5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-3xl md:text-4xl lg:text-5xl tracking-tighter"
            >
              Join the Serenity Insiders Club!
            </motion.h1>
          </header>

          <p className="text-neutral-500 text-base md:text-sm tracking-tighter flex-1/2">
            Sign up for our newsletter and reveive the travel inspiration,
            exclusive discount, and personalized recommendations - straight to
            your inbox.
          </p>
        </div>

        <div className="relative w-full">
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="absolute left-0 w-full h-full top-0 rounded-2xl bg-black/50"
          ></motion.div>
          <motion.img
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            src={hotels[3].image}
            className="rounded-2xl object-cover w-full h-[600px]"
          />
          <div className="absolute left-0 w-full h-full top-0 flex items-center justify-center">
            <button className="bg-white rounded-full px-4 py-2 text-neutral-950 tracking-tighter">
              Join Our Waitlist
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
