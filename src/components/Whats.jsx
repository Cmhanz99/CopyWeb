import React from "react";

const Whats = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="w-full text-center mt-10">
        <h2 className="text-5xl font-semibold">What's I-Nexus</h2>
        <p className="text-slate-500 mt-2">— The story of our encounter and growth —</p>
      </div>
      <div className="mt-10 w-[80%] p-5 shadow bg-slate-100 rounded text-center">
        <p className="leading-loose">
          Ainexus is a small team of four people, consisting of two Japanese and
          two engineers from the Philippines. Based in Cebu, Philippines, we
          have different cultural and linguistic backgrounds, but we use English
          as our common language and work on projects by leveraging each other's
          strengths. Japanese members are mainly in charge of customer support,
          so you can consult with us with peace of mind.
        </p>
        <p className="mt-5 leading-loose">
          We can help you with a wide range of projects, from small
          modifications to full-scale production of websites that you feel are
          too expensive to ask a company. With a bright and lively team color,
          we always face our customers' projects with positive energy. We not
          only deliver the deliverables, but also exceed the customer's
          expectations and put all our effort into achieving the essential goals
          that lie beyond them.
        </p>
        <p className="mt-5 leading-loose">
          We also value change and flexibility, and aim to create a community
          that goes beyond the boundaries of our team. By incorporating the
          diverse perspectives and skills of our trusted colleagues who have
          been involved in the process of the organization's growth, we will aim
          for greater heights while opening up new possibilities together
          without being bound by stereotypes.
        </p>
      </div>
      <div className="w-full  p-20 flex items-center justify-center">
        <div className="flex items-center w-[80%] sm:w-[60%] md:w-[30%] justify-between">
            <i className="fa-brands fa-facebook text-blue-500 text-5xl cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-5xl cursor-pointer"></i>
            <i className="fa-brands fa-line text-5xl text-green-500 cursor-pointer"></i>
            <i className="fa-brands fa-x-twitter text-5xl cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default Whats;
