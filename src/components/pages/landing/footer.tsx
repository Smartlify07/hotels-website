export function Footer() {
  const contactChannels = [
    { label: 'Twitter', link: 'https://x.com/Smartlify01' },
    { label: 'Instagram', link: '' },
    { label: 'Youtube', link: '' },
    { label: 'Facebook', link: '' },
  ];
  return (
    <footer className="bg-neutral-950 mt-6 pt-8">
      <div className=" flex gap-5 justify-between h-[400px] flex-col">
        <div className="flex items-start justify-between px-4">
          <div className="flex flex-col flex-1/2 gap-6">
            <h1 className="text-white text-4xl tracking-tighter">
              Serenity <sup>*</sup>
            </h1>

            <div className="flex items-center gap-4">
              {contactChannels.map((channel) => (
                <a
                  href={channel.link}
                  className="rounded-full px-4 py-1 border border-white/50 text-white/90 tracking-tighter text-sm"
                >
                  {channel.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col flex-1/3 gap-6">
            <p className="text-white tracking-tighter">
              At Serenity, we believe every stay should be extraordinary. From
              luxurious accomodations to curated experiences,{' '}
              <span className="text-white/50">
                we ensure that very moment is unforgettable
              </span>
            </p>

            <button className="rounded-full py-2 px-6 text-neutral-950 bg-white text-sm tracking-tighter self-start">
              See All Special Offer
            </button>
          </div>{' '}
        </div>
        <div className="flex items-center w-full px-4 py-4 justify-between border-t border-t-white">
          <a className="text-white/90 text-sm tracking-tighter">
            Terms & Conditions
          </a>
          <a className="text-white/90 text-sm tracking-tighter">
            Copyright 2025. All Right Reserved
          </a>
          <a className="text-white/90 text-sm tracking-tighter">
            Cookies Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
