import { hotels } from '@/data/dummyData';
import { useState } from 'react';

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
    <section className="py-20 px-4 flex items-center justify-center">
      <div className="w-full flex flex-col gap-14">
        <div className="flex items-end gap-6 justify-between">
          <div className="flex flex-col flex-1/2 gap-4">
            <span className="rounded-full self-start px-4 text-sm py-2 border border-neutral-300 text-neutral-950">
              FAQ
            </span>
            <div className="flex flex-col">
              <h1 className="text-neutral-950 tracking-tighter text-5xl">
                Got Questions?
              </h1>
              <h1 className="text-neutral-950 tracking-tighter text-5xl">
                We've Got Answers!
              </h1>
            </div>
          </div>

          <p className="text-neutral-600 flex-1/3 text-sm tracking-tighter">
            Find everything you need to know about your stay at Serenity. From
            check-in details to exclusive experiences, we've covered it all!
          </p>
        </div>

        <div className="flex gap-10 items-start">
          <div className="flex-1/2 grid gap-6">
            {faqs.map((item, index) => (
              <div className="rounded-md border border-neutral-300 flex flex-col gap-1 py-3 px-2">
                <h1 className="text-base tracking-tighter">{item.title}</h1>

                {openFaq === index && (
                  <p className="text-neutral-500 tracking-tighter text-sm">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex-1/2">
            <img
              src={hotels[4].image}
              className="rounded-md w-full object-cover h-[400px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
