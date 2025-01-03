import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs.tsx";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState<string>(
    "http://via.placeholder.com/1500x400"
  );

  const [profileUrl, setProfileUrl] = useState<string>(
    "http://via.placeholder.com/100"
  );

  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[calc(100%-80px)] ml-20">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="Banner image"
          className="object-cover w-full h-60"
        />

        <button className="absolute p-2 text-white bg-gray-800 rounded-full top-2 right-2 hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      {/* Channel logo */}

      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileUrl}
          alt="Profile picture"
          className="relative object-cover w-40 h-40 border-white rounded-full"
        />

        <button className="absolute ml-[3.6rem] z-10 mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        {/* Channel info */}
        <div className="mt-4 ml-4">
          <h1 className="text-2xl font-bold ">Naveen Raikwar</h1>
          <p>1M views</p>
          <p className="mt-2">
            This is a short description of the Youtube channel. It gives an
            overview of the content and what viewers can expect.
          </p>

          <button className="px-4 py-2 mt-4 text-white bg-red-600 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>

      <Tabs />
    </div>
  );
};

export default Profile;
