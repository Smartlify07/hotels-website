import { SearchIcon } from 'lucide-react';

export function HeroSection() {
  const pills = ['Wellness', 'Others', 'Dining'];
  return (
    <section className="min-h-[450px] md:min-h-[500px] px-4 z-[100] flex flex-col justify-between">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row  md:items-center py-6 justify-between w-full">
        <h1 className="text-base w-[200px] text-white tracking-tighter">
          Let's make your stay unforgettable!
        </h1>

        <div className="flex items-center gap-2">
          {pills.map((item, index) => (
            <span
              key={index}
              className="rounded-full py-1 border text-white border-white w-fit flex items-center justify-center px-4 text-base tracking-tighter"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex md:items-end flex-col gap-4 md:gap-0 md:flex-row pb-5 justify-between">
        <h1 className="text-3xl md:text-5xl md:w-5/12 tracking-tighter text-white">
          Not just a hotel, but a place that feels like home
        </h1>

        <div className="relative">
          <input
            className="rounded-full py-2 text-sm px-4 bg-white/10 text-white placeholder:text-white/100 placeholder:tracking-tighter tracking-tight border border-white/60 w-[300px]"
            placeholder="Where do you wanna go?"
          />
          <SearchIcon
            size={18}
            className="absolute text-white right-14 md:right-5 top-2.5"
          />
        </div>
      </div>
    </section>
  );
}
