import React, { useState } from "react";
import { useQuery } from "react-query";
import SingleIntern from "./SingleIntern";

const fetchInterns = async () => {
  const response = await fetch("http://localhost:5000/interns");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const Intern = () => {
  const { data, isLoading, isError } = useQuery("interns", fetchInterns);
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (event) => {
    setSearchItem(event?.target?.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const filterInterns = data?.filter((intern) =>
    intern?.intern_name.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <section>
      <div>
        <section class="mt-12 lg:mt-12 mb-10 max-w-5xl mx-auto">
          <div class=" job-back text-white -skew-y-1">
            <div class="container mx-auto skew-y-1">
              <div class="flex flex-col items-center py-10 text-center lg:py-10">
                <div class="w-full px-4 lg:w-1/2 lg:px-0">
                  <div class="mb-8">
                    <h2 class="text-3xl lg:text-4xl font-bold mb-3">
                      Looking for a Intern?
                    </h2>
                    <p class="text-lg lg:text-xl opacity-80">
                      Search the forum for the answer to your question
                    </p>
                  </div>

                  <div class="mb-4">
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          class="w-4 h-4 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          ></path>
                        </svg>
                      </div>

                      <form action="#" method="GET">
                        <input
                          type="search"
                          name="search"
                          value={searchItem}
                          onChange={handleChange}
                          placeholder="Search here for threads"
                          class="p-4 pl-10 text-gray-600 bg-gray-800 rounded w-full  border-none"
                        />
                      </form>
                    </div>
                  </div>

                  <div class="text-lg">
                    <p>
                      Search your Expertise tools?
                      <br class="sm:hidden" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {filterInterns?.map((searchIntern) => (
            <SingleIntern
              searchIntern={searchIntern}
              key={searchIntern._id}
              //   setInternDetails={setInternDetails}
            ></SingleIntern>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intern;

//   <h1>Interns</h1>

// <input
//   type="text"
//   placeholder="Search by intern name"
//   value={searchItem}
//   onChange={handleChange}
// />
