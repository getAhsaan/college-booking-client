const SearchFilter = () => {
  return (
    <div className="text-center">
      <input
        type="text"
        name="search"
        id=""
              placeholder="Search by college name"
              className="py-2 px-4 border rounded-full w-[90%] mx-auto md:w-[50%]"
      />
    </div>
  );
};

export default SearchFilter;
