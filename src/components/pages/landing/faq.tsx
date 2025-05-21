import { hotels } from '@/data/dummyData';
import { useState } from 'react';
import { motion } from 'motion/react';

export function Faq() {
  const [openFaq, _] = useState(0);
  const faqs = [
    {
      title: 'What time is check-in and check-out?',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, sequi.',
    },
    {
      title: 'Does Serenity offer airport transfers?',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, sequi.',
    },
    {
      title: 'Does the hotel have a spa and wellness center?',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, sequi.',
    },
    {
      title: 'How can I modify or cancel my reservation?',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, sequi.',
    },
    {
      title: 'Do you offer honeymoon or romantic packages?',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, sequi.',
    },
  ];
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
      className="py-20 px-4 flex items-center justify-center"
    >
      <div className="w-full flex flex-col gap-14">
        <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
          <div className="flex flex-col flex-1/2 gap-4">
            <span className="rounded-full self-start px-4 text-sm py-2 border border-neutral-300 text-neutral-950">
              FAQ
            </span>
            <div className="flex flex-col">
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
                className="text-neutral-950 tracking-tighter text-3xl md:text-4xl lg:text-5xl"
              >
                Got Questions?
              </motion.h1>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                viewport={{
                  once: true,
                }}
                className="text-neutral-950 tracking-tighter text-3xl md:text-4xl lg:text-5xl"
              >
                We've Got Answers!
              </motion.h1>
            </div>
          </div>

          <p className="text-neutral-600 flex-1/2 lg:flex-1/3 md:text-sm tracking-tighter">
            Find everything you need to know about your stay at Serenity. From
            check-in details to exclusive experiences, we've covered it all!
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-10 items-start">
          <div className="flex-1/2 grid gap-6">
            {faqs.map((item, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: (index + 1) * 0.2,
                  delay: (index + 1) * 0.2,
                }}
                viewport={{
                  once: true,
                }}
                key={index}
                className="rounded-md border border-neutral-300 flex flex-col gap-1 py-3 px-2"
              >
                <h1 className="text-base tracking-tighter">{item.title}</h1>

                {openFaq === index && (
                  <p className="text-neutral-500 tracking-tighter text-sm">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="hidden md:block md:flex-1/2">
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
              src={hotels[4].image}
              className="rounded-md w-full object-cover h-[400px] "
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
