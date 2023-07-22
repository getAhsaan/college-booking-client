const researchData = [
  {
    id: 1,
    title: "Title of Research Paper 1",
    author: "Author 1",
    year: 2023,
    link: "https://example.com/research-paper-1",
  },
  {
    id: 2,
    title: "Title of Research Paper 2",
    author: "Author 2",
    year: 2022,
    link: "https://example.com/research-paper-2",
  },
  {
    id: 3,
    title: "Title of Research Paper 1",
    author: "Author 1",
    year: 2023,
    link: "https://example.com/research-paper-1",
  },
  {
    id: 4,
    title: "Title of Research Paper 2",
    author: "Author 2",
    year: 2022,
    link: "https://example.com/research-paper-2",
  },
  {
    id: 5,
    title: "Title of Research Paper 2",
    author: "Author 2",
    year: 2022,
    link: "https://example.com/research-paper-2",
  },
  {
    id: 6,
    title: "Title of Research Paper 2",
    author: "Author 2",
    year: 2022,
    link: "https://example.com/research-paper-2",
  },
  {
    id: 7,
    title: "Title of Research Paper 2",
    author: "Author 2",
    year: 2022,
    link: "https://example.com/research-paper-2",
  },
  {
    id: 8,
    title: "Title of Research Paper 2",
    author: "Author 2",
    year: 2022,
    link: "https://example.com/research-paper-2",
  },
];

const ResearchSection = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-semibold uppercase mt-4 md:mt-8">
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
