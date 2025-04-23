import ServiceCard from "../components/common/ServiceCard";

import maid from "../assets/images/maid.jpeg"

const MaidServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Maid Services</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Map through maid services from API */}
        <ServiceCard 
          title="Deep Cleaning"
          description="Complete home deep cleaning service"
          price="₹499/hour"
          image={maid}
          link="/service/1"
        />
        <ServiceCard 
          title="Cooking"
          description="Complete home deep cleaning service"
          price="₹299/hour"
          image={maid}
          link="/service/1"
        />
        <ServiceCard 
          title="Laundary works"
          description="Complete home deep cleaning service"
          price="₹200/hour"
          image={maid}
          link="/service/1"
        />
      </div>
    </div>
  );
};

export default MaidServices;