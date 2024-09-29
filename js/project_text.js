const project_text = {
  projects: {
    project_marbella: {
      description: {
        description_marbella_1:
          "Chciałbym wyrazić ogromną wdzięczność i podkreślić profesjonalizm Julii w stworzeniu projektu wnętrza restauracji-cukierni. Nawet w tak trudnych warunkach, jak praca zdalna, wszystkie zadania zostały wykonane na czas. Efekt przeszedł nasze oczekiwania — wnętrze jest stylowe, przytulne i w pełni odpowiada naszej wizji.",
        // description_marbella_2:
        // "Projekt został zrealizowany zdalnie w najkrótszym możliwym czasie, z uwzględnieniem wszystkich życzeń klientów i specyfiki lokalnego rynku materiałów.",
        description_marbella_3:
          "Pan Sergij, projekt Art bakery & Wine, Malaga, Hiszpania",
      },
    },
    project_kyiv81ap: {
      description: {
        description_kyiv81ap_1:
          "Another cozy restaurant @artbakery_wine with a bakery, chef's signature desserts, wine, and a pleasant atmosphere in Kyiv, Ukraine.",
        description_kyiv81ap_2:
          "The project was completed remotely in the shortest possible time, considering all client wishes and the specifics of the local market.",
        description_kyiv81ap_3: "Project 2025",
      },
    },
    project_kyiv118ap: {
      description: {
        description_kyiv118ap_1:
          "A contemporary restaurant with a bakery and creative desserts by the chef in Kyiv, Ukraine.",
        description_kyiv118ap_2:
          "This project was successfully completed remotely, adhering to all client specifications and local market requirements.",
        description_kyiv118ap_3: "Project 2020",
      },
    },
    project_kyivgalaxy: {
      description: {
        description_kyivgalaxy_1:
          "A modern restaurant with a bakery and innovative chef's desserts, wine, and a welcoming atmosphere in Kyiv, Ukraine.",
        description_kyivgalaxy_2:
          "The project was executed remotely with consideration of client needs and local market specifics.",
        description_kyivgalaxy_3: "Project 2019",
      },
    },
    project_kyivseven: {
      description: {
        description_kyivseven_1:
          "A stylish restaurant with a bakery and original desserts by the chef in Kyiv, Ukraine.",
        description_kyivseven_2:
          "The project was managed remotely, ensuring all client desires were met within the constraints of the local market.",
        description_kyivseven_3: "Project 2018",
      },
    },
    project_valencia: {
      description: {
        description_valencia_1:
          "A warm and inviting restaurant @artbakery_wine with a bakery, creative chef’s desserts, and a delightful atmosphere in Valencia, Spain.",
        description_valencia_2:
          "The project was carried out remotely, quickly fulfilling all client requests and local material market specifics.",
        description_valencia_3: "Project 2023",
      },
    },
    project_warsaw: {
      description: {
        description_warsaw_1:
          "Wnętrze domu położonego w lesie to nowoczesny styl z akcentem na przytulność. Jest utrzymane w jasnych, neutralnych barwach, co tworzy wrażenie lekkości i przestronności. Dominują odcienie beżu, jasnej szarości i bieli, które nadają wnętrzu spokój i harmonię. Wykorzystanie naturalnych materiałów, takich jak drewno i tkaniny z motywami przyrodniczymi podkreśla związek z otaczającą przyrodą. Kominek – stanowi centralny element wnętrza, a jego wykończenie w naturalnych, spokojnych odcieniach  dodaje ciepła i przytulności.",
        description_warsaw_2:
          "Wnętrze łączy elegancki minimalizm z ciepłymi, przytulnymi elementami, co czyni je idealnym do domu w lesie.",
        description_warsaw_3: "Projekt 2023-2024, Warszawa, Poland",
      },
    },
    project_contacts: {
      description: {
        description_contacts_1:
          "A cozy restaurant @artbakery_wine with a bakery, unique chef's desserts, wine, and a pleasant atmosphere in Warsaw, Poland.",
        description_contacts_2:
          "The project was completed remotely, efficiently meeting all client demands and local market specifics.",
        description_contacts_3: "Projekt 2023-2024, Warszawa, Poland",
      },
    },
    project_oferta: {
      description: {
        description_oferta_1:
          "Gotowy projekt aranżacji poprzedzony jest dokładną analizą oczekiwań i potrzeb klientów.",
        description_oferta_2:
          "Jest to jeden z kluczowych etapów procesu projektowego, ponieważ to klienci będą spędzać czas w stworzonym dla nich wnętrzu.",
        description_oferta_3:
          "Trendy przemijają, ale funkcjonalność, piękno i przytulność są wieczne.",
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const projectId = document
    .getElementById("project-container")
    .getAttribute("data-project-id");

  if (project_text.projects[projectId]) {
    const project = project_text.projects[projectId].description;

    document.getElementById("description_1").textContent =
      project.description_oferta_1 ||
      project.description_contacts_1 ||
      project.description_marbella_1 ||
      project.description_kyiv81ap_1 ||
      project.description_kyiv118ap_1 ||
      project.description_kyivgalaxy_1 ||
      project.description_kyivseven_1 ||
      project.description_valencia_1 ||
      project.description_warsaw_1;

    document.getElementById("description_2").textContent =
      project.description_oferta_2 ||
      project.description_contacts_2 ||
      project.description_marbella_2 ||
      project.description_kyiv81ap_2 ||
      project.description_kyiv118ap_2 ||
      project.description_kyivgalaxy_2 ||
      project.description_kyivseven_2 ||
      project.description_valencia_2 ||
      project.description_warsaw_2;

    document.getElementById("description_3").textContent =
      project.description_oferta_3 ||
      project.description_contacts_3 ||
      project.description_marbella_3 ||
      project.description_kyiv81ap_3 ||
      project.description_kyiv118ap_3 ||
      project.description_kyivgalaxy_3 ||
      project.description_kyivseven_3 ||
      project.description_valencia_3 ||
      project.description_warsaw_3;
  } else {
    console.error("Project not found.");
  }
});
