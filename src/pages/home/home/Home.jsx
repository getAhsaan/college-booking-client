import SearchFilter from "../../../components/searchFilter/SearchFilter";
import CollegeGallery from "../collegeGallery/CollegeGallery";
import ResearchSection from "../researchSection/ResearchSection";
import ReviewSection from "./reviewSection/ReviewSection";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <SearchFilter />
      <CollegeGallery />
      <ResearchSection />
      <ReviewSection />
    </div>
  );
};

export default Home;
