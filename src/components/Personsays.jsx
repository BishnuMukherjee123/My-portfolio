import React from "react";

function Personsays() {
  return (
    <>
      <div id="testimonials" className="py-12 max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-4">Testimonials</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 italic">"Sagar is great!"</p>
            <p className="text-gray-500 mt-2">- John Doe</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 italic">
              "Very professional and communicates well."
            </p>
            <p className="text-gray-500 mt-2">- John Doe</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 italic">"Highly recommend Sagar!"</p>
            <p className="text-gray-500 mt-2">- John Doe</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Personsays;
