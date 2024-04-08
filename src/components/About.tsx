import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const About = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {"Learn for Change".split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ?  'text-border' : 'text-primary'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              Empowering Through Education: The Institute for System Change Difference
            </h3>
            <p className={`text-gray-600 my-5`}>
              At the heart of the Institute for System Change lies a revolutionary community-driven learning platform dedicated to illuminating the rich tapestry of the Constitution of India alongside pressing social issues such as Gender Equality, Caste Dynamics, Peace and Conflict Resolution, Gandhian Philosophies, and the urgent Climate Crisis. Our mission transcends mere academic discourse, aiming to mend the diminishing spaces for rational and inclusive thought within the Indian educational landscape.
            </p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={secondItem?.img}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                A Dual Reward: Knowledge and Accreditation
              </h3>
              <p className={`text-gray-600 my-5 mb-8`}>
                Dive into our meticulously crafted courses at the Institute for System Change, and emerge not just with profound insights but with recognized academic credits under the New Education Policy (NEP) 2020 and University Grants Commission (UGC) guidelines. Each course, ranging from 1-3 credit offerings, is designed to mirror the rigor and depth of traditional academic courses, with the added flexibility of online learning. 
              </p>
            </div>
          </div>
        </div>
      </div>
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
    </section>
  );
};

export default About;
