// ExploreSection.tsx
const ExploreSection = () => {
  return (
    <section id="explore" className="w-full h-auto py-12 bg-gray-100">
      <div className="container mx-auto max-w-[920px] text-center ">
        <h2 className="text-3xl font-bold">Explore Our Features</h2>
        <p className="mt-4">Find out more about what we offer!</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add items or cards here */}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
