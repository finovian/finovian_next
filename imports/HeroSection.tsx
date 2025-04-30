// HeroSection.tsx
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-full h-screen bg-gray-400 flex items-center justify-center"
    >
      <div className="container mx-auto max-w-[920px] text-center text-white">
        <h2 className="text-4xl font-bold">
          Welcome to My Website this is test dummy section with testing perpose
          of okay and ect
        </h2>
        <p className="mt-4 text-lg">
          This is a brief introduction to the website.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
