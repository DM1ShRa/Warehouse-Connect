"use client"
import React, { useRef } from "react";
import Feed from "@components/Feed";
import GoogleMapView from "@components/GoogleMapsView";
import { useSession } from "next-auth/react";
import AdminPage from "@components/AdminPage";


const LandingPage = () => {
  const feedRef = useRef(null);

  const handleExploreNowClick = () => {
    if (feedRef.current) {
      feedRef.current.scrollIntoView({ behavior: "smooth" });
    }
    
  };
  const {data : session } = useSession();
  if(session?.user.email=='2021.abhishek.jadhav@ves.ac.in'){
    return(
      <AdminPage/>
    )
  }

  return (
    <section className="w-full  flex-col">
      <div className="flex items-start">
        <h1 className="head_text text-center">
          WAREHOUSE<span className="custom_farm_style"> CONNECT</span>
        </h1>
      </div>
      <br />
      <p className="message1">
        WarehouseConnect is an intuitive surplus food distribution platform
      </p>
      <p className="message2">
        efficiently connecting surplus food storage providers with organizations
        in need. It aims to
        <br />
        reduce food waste and enhance the supply chain by optimizing warehouse
        space allocation
        <br />
        and fostering collaboration for a sustainable impact.
      </p>
      <br />
      <br />

      <button
        type="button"
        className="bg-black text-white rounded-lg px-10 py-4 cursor-pointer"
        onClick={handleExploreNowClick}
      >
        Explore Now!
      </button>
      <br />
      <br />



      <div className="mt-10 bg-white rounded-lg shadow-xl w-full max-w-screen-lg overflow-hidden border border-gray-200">
        <GoogleMapView />
      </div>

      <div ref={feedRef} className="flex justify-end">
        <Feed />
      </div>
    </section>
  );
};

export default LandingPage;
