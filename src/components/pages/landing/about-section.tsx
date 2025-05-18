import { hotels } from '@/data/dummyData';

export function AboutSection() {
  return (
    <section className="flex flex-col py-20 items-center gap-4">
      <div className="flex-col flex items-center gap-6">
        <span className="border rounded-full py-1 tracking-tighter px-3 border-neutral-300 text-neutral-900">
          About us
        </span>

        <header className="gap-6 items-center flex flex-col">
          <h1 className="text-5xl tracking-tighter text-center text-neutral-950">
            Welcome to Serenity
          </h1>

          <p className="text-base text-center w-6/12 tracking-tighter text-neutral-600">
            From luxurious suites to personalized experiences, Serenity Hotel is
            designed to make every guest feel at home. Discover the perfect
            blend of nature, elegance and warmth.
          </p>
        </header>

        <div className="grid w-6/12 mt-10 grid-cols-3 gap-6">
          {hotels.slice(0, 6).map((hotel, index) => (
            <div className="col-span-1">
              <img
                src={hotel.image}
                className={`${index === 4 && 'h-[270px]'} ${index === 1 && 'h-[270px]'} h-[250px] rounded-2xl object-cover w-full`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
