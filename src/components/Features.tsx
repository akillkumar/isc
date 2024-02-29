import React from 'react';

const Features = () => {
  return (
    <div className={`py-12 bg-background my-8`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {"Explore Opportunities"}
          </h2>
          <p className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {"Beyond Learning"}
          </p>
          <p className="mt-6 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {"IFSC will connect sutdents with NGOs, Civil Society Organizations, and other social impact organizations to provide real-world field immersion and community engagement services."}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Features;
