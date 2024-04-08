import React, { ReactNode } from "react";

const Courses = () => {
  return (
    <div className={`py-12 bg-background my-8`} id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Courses Offered
          </p>
          <h2 className={`text-base text-primary font-semibold tracking-wide uppercase`}>
            CATEGORIES
          </h2>
          <div className="flex space-x-4 mt-4 text-left p-4">
            <Tab title="Understanding India">
              <ul className="mt-6 pl-8 max-w-2xl text-xl text-gray-500 lg:mx-auto list-disc">
                <li>Why Gandhi still matters?</li>
                <li>Understanding human rights</li>
                <li>Right to Information and human rights</li>
                <li>Understanding sex, Gender & sexuality</li>
                <li>Gender based Violence</li>
                <li>Gandhi and experiential learning</li>
                <li>Gandhi and non violence</li>
                <li>Development studies</li>
                <li>Understanding Caste</li>
                <li>Anti-caste movements</li>
                <li>Religious minorities' status & struggles</li>
                <li>Nationalism and India's freedom struggle</li>
              </ul>
            </Tab>
            <Tab title="Health and Wellness">
              <ul className="mt-6 pl-8 max-w-2xl text-xl text-gray-500 lg:mx-auto list-disc">
                <li>Gender sensitization</li>
                <li>Gender & sexual diversity (LGBTQIAP+)</li>
                <li>Health finance</li>
                <li>Globalisation and health</li>
                <li>Health and nutrition</li>
                <li>Understanding mental health</li>
              </ul>
            </Tab>
            <Tab title="Financial Literacy">
              <ul className="mt-6 pl-8 max-w-2xl text-xl text-gray-500 lg:mx-auto list-disc">
                <li>Financial literacy</li>
                <li>Understanding the stock market</li>
              </ul>
            </Tab>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TabProps {
  title: string;
  children: ReactNode;
}

const Tab = ({ title, children }: TabProps) => {
  return (
    <div className="flex flex-col w-1/3">
      <input
        type="radio"
        className="hidden"
        id={title}
        name="tabs"
      />
      <label
        htmlFor={title}
        className="cursor-pointer bg-primary text-white py-2 px-4 block text-center font-bold rounded-t-lg"
      >
        {title}
      </label>
      <div className="content">
        {children}
      </div>
    </div>
  );
};


export default Courses;