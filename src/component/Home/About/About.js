import React from "react";

const About = () => {
  return (
    <section className="flex flex-col max-w-6xl mx-auto mt-16 lg:flex-row gap-14">
      <div className="pt-8 pl-4">
        <h3 className="text-3xl font-bold text-accent-400">Access Our Hunt</h3>
        <h3 className="pb-6 text-2xl font-bold">
          learning resource With Hunting
        </h3>
        <p className="w-[500px] text-[18px]  text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived .Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived .
        </p>
      </div>
      <div className="flex-1">
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <img
              alt="daisy"
              src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="diff-item-2">
            <img
              alt="daisy"
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
