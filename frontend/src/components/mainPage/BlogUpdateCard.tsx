const BlogUpdateCard = () => {
  return (
    <div className="flex w-[40%]  items-center">
      <div className="w-[40%] h-full overflow-hidden">
        <img
          src="https://challenge3storedpictures.s3.us-east-2.amazonaws.com/general-assets/mainPageBlogPic.jpg"
          alt=""
          className="object-cover h-[100%] w-[100%]"
        />
      </div>
      <div className="flex flex-col h-[70%] w-[50%] mx-[5%] items-center justify-evenly">
        <div className="flex flex-row justify-between pr-16 w-[100%]">
          <div>
            <p className="text-[#A9AFBB] font-inter text-base">July 13, 2023</p>
          </div>
          <div>
            <ul className="list-disc">
              <li className="text-[#A9AFBB] font-inter text-base">Admin</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="font-work font-bold text-lg text-left w-full">
            The Impact of Covid-19 on travel & tourism industry
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogUpdateCard;
