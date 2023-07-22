const CollegeGallery = () => {
    return (
      <div>
        <h2 className="text-center text-2xl uppercase font-bold tracking-tight md:text-4xl mt-4 md:mt-8">
          College Gallery
        </h2>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-4">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.ibb.co/tppLzGc/accomplishment-ceremony-education-graduation.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.ibb.co/b5vh1YZ/bigstock-group-graduation-of-students-l-13618079-768x432.jpg"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.ibb.co/B473hxh/graduates.jpg"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.ibb.co/k4ybxgJ/i-Stock-963270762.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.ibb.co/gdy7chz/istockphoto-485776945-612x612.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.ibb.co/gPsrCG1/stock-photo-happy-group-students-graduation-gowns.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CollegeGallery;
