import BlogCard from "../../assets/landscape1.jpg";
import BlogCard2 from "../../assets/landscape2.jpg";
import BlogCard3 from "../../assets/landscape3.jpg";
import BlogCard4 from "../../assets/landscape4.jpg";

import React from "react";

const ProjectPage = () => {
  return (
    <section>
      <div className="mx-auto container px-4">
        <h1 className="text-white text-4xl text-center font-bold mb-10">
          Projects
        </h1>

        {/* Card Projects */}

        <div className="flex justify-center flex-wrap gap-8">
          <a className="bg-white rounded-lg overflow-hidden max-w-[400px] flex flex-col">
            <div className="relative rounded-b-md">
              <img
                src={BlogCard}
                alt="Blog Card Image"
                className="object-cover"
              />
            </div>
            <div className="px-4 py-6 flex flex-col gap-3 items-start h-full">
              <h3 className="text-2xl font-semibold">Designing Dashboard</h3>
              <div>
                <span className="px-4 py-1 text-white rounded-full font-medium bg-gray-900 mr-4">
                  2020
                </span>
                <span className="text-gray-500">Dashboard</span>
              </div>
              <p className="mt-2">
                Dolor necessitatibus repudiandae enim fugiat reiciendis ducimus.
                Sed molestias vero atque omnis ratione Asperiores quasi
                molestiae recusandae repellendus explicabo reprehenderit Ipsum
                amet incidunt sapiente reprehenderit iure nisi? Esse doloremque
                aperiam.
              </p>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-md mt-auto">
                ReadMore
              </button>
            </div>
          </a>

          <a className="bg-white rounded-lg overflow-hidden max-w-[400px] flex flex-col">
            <div className="rounded-b-md">
              <img
                src={BlogCard3}
                alt="Blog Card Image"
                className="object-cover"
              />
            </div>
            <div className="px-4 py-6 flex flex-col gap-3 items-start h-full">
              <h3 className="text-2xl font-semibold">Designing Dashboard</h3>
              <div>
                <span className="px-4 py-1 text-white rounded-full font-medium bg-gray-900 mr-4">
                  2020
                </span>
                <span className="text-gray-500">Dashboard</span>
              </div>
              <p className="mt-2">
                Dolor dignissimos maxime aperiam est blanditiis. Magni porro
                nisi aliquam laboriosam molestiae. Accusantium inventore et in
                ullam neque dolore. Nisi ducimus laborum autem aut maxime?
              </p>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-md mt-auto">
                ReadMore
              </button>
            </div>
          </a>


          <a className="bg-white rounded-lg overflow-hidden max-w-[400px] flex flex-col">
            <div className="relative rounded-b-md">
              <img
                src={BlogCard}
                alt="Blog Card Image"
                className="object-cover"
              />
            </div>
            <div className="px-4 py-6 flex flex-col gap-3 items-start h-full">
              <h3 className="text-2xl font-semibold">Designing Dashboard</h3>
              <div>
                <span className="px-4 py-1 text-white rounded-full font-medium bg-gray-900 mr-4">
                  2020
                </span>
                <span className="text-gray-500">Dashboard</span>
              </div>
              <p className="mt-2">
                Dolor necessitatibus repudiandae enim fugiat reiciendis ducimus.
                Sed molestias vero atque omnis ratione Asperiores quasi
                molestiae recusandae repellendus explicabo reprehenderit Ipsum
                amet incidunt sapiente reprehenderit iure nisi? Esse doloremque
                aperiam.
              </p>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-md mt-auto">
                ReadMore
              </button>
            </div>
          </a>


          <a className="bg-white rounded-lg overflow-hidden max-w-[400px] flex flex-col">
            <div className="relative rounded-b-md">
              <img
                src={BlogCard}
                alt="Blog Card Image"
                className="object-cover"
              />
            </div>
            <div className="px-4 py-6 flex flex-col gap-3 items-start h-full">
              <h3 className="text-2xl font-semibold">Designing Dashboard</h3>
              <div>
                <span className="px-4 py-1 text-white rounded-full font-medium bg-gray-900 mr-4">
                  2020
                </span>
                <span className="text-gray-500">Dashboard</span>
              </div>
              <p className="mt-2">
                Dolor necessitatibus repudiandae enim fugiat reiciendis ducimus.
                Sed molestias vero atque omnis ratione Asperiores quasi
                molestiae recusandae repellendus explicabo reprehenderit Ipsum
                amet incidunt sapiente reprehenderit iure nisi? Esse doloremque
                aperiam.
              </p>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-md mt-auto">
                ReadMore
              </button>
            </div>
          </a>
          <a className="bg-white rounded-lg overflow-hidden max-w-[400px] flex flex-col">
            <div className="relative rounded-b-md">
              <img
                src={BlogCard}
                alt="Blog Card Image"
                className="object-cover"
              />
            </div>
            <div className="px-4 py-6 flex flex-col gap-3 items-start h-full">
              <h3 className="text-2xl font-semibold">Designing Dashboard</h3>
              <div>
                <span className="px-4 py-1 text-white rounded-full font-medium bg-gray-900 mr-4">
                  2020
                </span>
                <span className="text-gray-500">Dashboard</span>
              </div>
              <p className="mt-2">
                Dolor necessitatibus repudiandae enim fugiat reiciendis ducimus.
                Sed molestias vero atque omnis ratione Asperiores quasi
                molestiae recusandae repellendus explicabo reprehenderit Ipsum
                amet incidunt sapiente reprehenderit iure nisi? Esse doloremque
                aperiam.
              </p>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-md mt-auto">
                ReadMore
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
