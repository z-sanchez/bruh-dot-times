import mockedAPIResponse from "../..//mock/newsApiResponse.json";

const theChosenOne = mockedAPIResponse.data[9];

const TopStory = () => {
  return (
    <div
      className="relative flex w-11/12 h-3/6 rounded-lg mt-6 top-story"
      style={{
        backgroundImage: `url(${theChosenOne.image_url}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute brightness-50 h-full w-full bg-black opacity-30"></div>
      <div className="relative w-full px-3 mb-10 text-3xl self-end">
        <h1 className="text-white text-left  max-h-32 mb-5 font-bold ">
          {theChosenOne.title}
        </h1>
      </div>
    </div>
  );
};

const TopStories = () => {
  return <TopStory />;
};

export { TopStories };
