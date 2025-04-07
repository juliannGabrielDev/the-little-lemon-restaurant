const Testimonies = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">"This service has changed my life! Highly recommend."</p>
              <h3 className="text-lg font-semibold">John Doe</h3>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">"Amazing experience, will definitely use again!"</p>
              <h3 className="text-lg font-semibold">Jane Smith</h3>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">"Top-notch service and support. Highly satisfied!"</p>
              <h3 className="text-lg font-semibold">Sam Wilson</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonies;