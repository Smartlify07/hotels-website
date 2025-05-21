export function AboutSection() {
  const images = [
    'https://res.cloudinary.com/dgpbznsc3/image/upload/v1747688116/3d-rendering-wooden-house_gs3jri.jpg',
    'https://res.cloudinary.com/dgpbznsc3/image/upload/v1747688116/3d-rendering-wooden-house_1_ukbyz7.jpg',
    'https://res.cloudinary.com/dgpbznsc3/image/upload/v1747688115/rural-house-with-stone-pathway_vovftv.jpg',
    'https://res.cloudinary.com/dgpbznsc3/image/upload/v1747688115/photorealistic-wooden-house-interior-with-timber-decor-furnishings_h9i1ej.jpg',
    'https://res.cloudinary.com/dgpbznsc3/image/upload/v1747688116/3d-rendering-wooden-house_1_ukbyz7.jpg',
    'https://res.cloudinary.com/dgpbznsc3/image/upload/v1747688115/photorealistic-wooden-house-with-timber-structure_nkslyu.jpg',
  ];
  return (
    <section className="flex flex-col py-20 px-4 md:px-0 items-center gap-4">
      <div className="flex-col flex items-center gap-6">
        <span className="border rounded-full py-1 tracking-tighter px-3 border-neutral-300 text-neutral-900">
          About us
        </span>

        <header className="gap-6 items-center flex flex-col">
          <h1 className="text-4xl lg:text-5xl tracking-tighter text-center text-neutral-950">
            Welcome to Serenity
          </h1>

          <p className="text-base text-center md:w-6/12 tracking-tighter text-neutral-600">
            From luxurious suites to personalized experiences, Serenity Hotel is
            designed to make every guest feel at home. Discover the perfect
            blend of nature, elegance and warmth.
          </p>
        </header>

        <div className="grid grid-cols-2 md:px-4 lg:w-6/12 mt-10 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="col-span-1">
              <img
                src={image}
                className={`${index === 4 && 'h-[270px]'} ${index === 1 && 'h-[270px]'} h-[250px] rounded-2xl object-cover w-full`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
