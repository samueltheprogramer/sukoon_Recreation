import React from "react";

const Amenities = () => {
  return (
    <div className="lg:px-16 lg:text-2xl lg:gap-8 p-5 text-lg font-[450] text-gray-500 flex flex-col gap-5  ">
      <h1 className="text-xl lg:text-5xl font-semibold font-serif text-black/90">
        Amenities for International Patient Care
      </h1>
      <p>
        Sukoon's International Patient Services team works dedicatedly towards
        providing you with a safe and effective medical journey. Be it your
        onboarding process, consultation, family accommodation or the meticulous
        elements of your recovery programme, we ensure that nothing obstructs
        your path to good health.
      </p>
      <ul className=" lg:px-10 lg:gap-8 flex flex-col gap-5 list-disc pl-5">
        <li>
          Detailed video consultation with expert psychologists before arrival
        </li>
        <li>Assistance with Visa Services</li>
        <li>
          A dedicated international patient manager to take care of all your
          needs at the hospital, including administrative services
        </li>
        <li>
          Concierge Desk at the dedicated International patient services lounge
          to arrange hotel/ guest house, travel within the city, and more.
        </li>
        <li>Complimentary two-way airport transfers</li>
        <li>
          Multiple payment options like cash, credit card or wire transfer.
        </li>
        <li>Interpreters are available at the facility at all times</li>
      </ul>
    </div>
  );
};

export default Amenities;
