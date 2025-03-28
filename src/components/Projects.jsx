import React, { useState } from "react";
import Android from "./icons/Android.astro";
function ProjectsDinamic({ PROJECTS }) {
  // Estado para manejar el filtro de tipo de proyecto
  const [selectedType, setSelectedType] = useState("Todos");

  // Filtrar proyectos según el tipo seleccionado
  const filteredProjects =
    selectedType === "Todos"
      ? PROJECTS
      : PROJECTS.filter((project) => project.type === selectedType);

  return (
    <div>
      {/* Filtro estilo chips */}
      <div className="flex gap-4 mb-6">
        {["Todos", "Ecommetrica", "Prometheus", "FreeLancer"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`${
              selectedType === type
                ? "bg-[#003159] text-white"
                : "bg-gray-200 text-black"
            } rounded-full px-6 py-2 text-sm hover:bg-opacity-80 font-semibold transition-colors duration-300`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Mapeo de los proyectos filtrados */}
      {filteredProjects.map(
        ({ image, title, description, link, github, icon }, index) => (
          <article key={index}>
            <h3 className="text-xs md:text-2xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2 overflow-wrap py-4">
              {title}
            </h3>
            <p className="text-lg mb-4 text-pretty">{description}</p>

            {/* Mostrar los íconos */}
            <ul className="flex gap-x-2 flex-col gap-2 md:flex-row mb-2">
              {icon.map((tag, idx) => (
                <li key={idx}>
                  <span
                    className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 border bg-blue-950 border-white/10`}
                  >
                    {/* Mostrar el ícono SVG */}
                    <img src={tag.icon} alt={tag.name} className="w-4 h-4" />
                    {tag.name}
                  </span>
                </li>
              ))}
            </ul>

            {/* Mostrar la imagen del proyecto */}
            <img
              loading="lazy"
              className="rounded shadow-2xl shadow-white/10 aspect-video mb-4"
              src={image}
              alt={`Captura de pantalla del proyecto ${title}`}
            />

            {/* Botones de enlaces */}
            <div className="flex gap-4">
              {link && (
                <a href={link} target="_blank" rel="noopener">
                  <button className="bg-[#003159] hover:bg-opacity-80 text-white rounded-full px-4 py-2 mt-4 hover:bg-[#003159/80] transition-colors duration-300 ease-in-out">
                    Ver proyecto
                  </button>
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener">
                  <button className="bg-[#003159] hover:bg-opacity-80 text-white rounded-full px-4 py-2 mt-4 hover:bg-[#003159/80] transition-colors duration-300 ease-in-out">
                    Ver código
                  </button>
                </a>
              )}
            </div>
          </article>
        )
      )}
    </div>
  );
}

export default ProjectsDinamic;
