import React from "react";
import { FaUsers, FaPlus, FaChartBar } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex flex-col items-center p-6">
      <header className="text-center my-10">
        <h1 className="text-5xl font-bold text-gray-800">Employee Management System</h1>
        <p className="mt-4 text-lg text-gray-600">Efficiently manage your workforce</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <Card
          title="View Employees"
          icon={<FaUsers className="text-blue-600 text-4xl" />}
          description="See the list of all registered employees."
          buttonText="View"
          link="/employees"
        />
        <Card
          title="Add Employee"
          icon={<FaPlus className="text-green-600 text-4xl" />}
          description="Add new employees to the system."
          buttonText="Add"
          link="/add-employee/_add"
        />
        <Card
          title="Reports"
          icon={<FaChartBar className="text-purple-600 text-4xl" />}
          description="View analytics and reports."
          buttonText="View Reports"
          link="/reports"
        />
      </div>
    </div>
  );
};

const Card = ({ title, icon, description, buttonText, link }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
    <div className="mb-4">{icon}</div>
    <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
    <p className="text-gray-600 my-2">{description}</p>
    <a
      href={link}
      className="mt-4 bg-blue-600 hover:bg-blue-700 text-black px-4 py-2 rounded transition"
    >
      {buttonText}
    </a>
  </div>
);

export default HomePage;
