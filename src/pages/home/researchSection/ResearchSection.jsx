const researchData = [
  {
    id: 1,
    title: "The Impact of Artificial Intelligence on Society",
    author: "John Smith",
    year: 2022,
    link: "https://example.com/research-paper-1",
  },
  {
    id: 2,
    title: "Climate Change and Its Effects on Biodiversity",
    author: "Emma Johnson",
    year: 2023,
    link: "https://example.com/research-paper-2",
  },
  {
    id: 3,
    title: "Advancements in Renewable Energy Technologies",
    author: "Michael Lee",
    year: 2021,
    link: "https://example.com/research-paper-3",
  },
  {
    id: 4,
    title: "The Role of Social Media in Shaping Political Discourse",
    author: "Sophia Williams",
    year: 2023,
    link: "https://example.com/research-paper-4",
  },
  {
    id: 5,
    title: "Machine Learning Applications in Healthcare",
    author: "David Brown",
    year: 2022,
    link: "https://example.com/research-paper-5",
  },
  {
    id: 6,
    title: "Implications of Cybersecurity Threats in the Digital Age",
    author: "Olivia Davis",
    year: 2021,
    link: "https://example.com/research-paper-6",
  },
  {
    id: 7,
    title: "Economic Impact of the COVID-19 Pandemic",
    author: "James Anderson",
    year: 2020,
    link: "https://example.com/research-paper-7",
  },
  {
    id: 8,
    title: "Gender Representation in STEM Fields",
    author: "Emily Clark",
    year: 2023,
    link: "https://example.com/research-paper-8",
  },
];

const ResearchSection = () => {
  return (
    <div>
      <h2 className="text-center text-2xl uppercase font-bold tracking-tight md:text-4xl mt-4 md:mt-8">
        Recommended Research Papers
      </h2>
      <ul className="grid md:grid-cols-2 text-center mt-4 w-[90%] md:w-[80%] mx-auto">
        {researchData.map((paper) => (
          <a
            key={paper.id}
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="p-4 bg-gray-300 hover:bg-gray-400 transition-all duration-300 m-2 rounded-full">
              {paper.title}- {paper.author} ({paper.year})
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default ResearchSection;
