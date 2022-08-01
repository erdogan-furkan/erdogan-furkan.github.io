import { useState } from "react";
import Loader from "../../../components/Loader";
import YoutubeEmbed from "../../../components/YoutubeEmbed";
import Image from "../../../../src/assets/images/system-architecture.png";

function ForestFireInformationSystem() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader loading={loading} setLoading={setLoading} />
      ) : (
        <div className="pb-16 fadein text-left">
          <h1 className="font-bold text-4xl text-center p-4 pb-0">
            Forest Fire Information System
          </h1>
          <hr className="border-2 my-4 dark:border-neutral-50/25" />
          <YoutubeEmbed embedId="366OgxysK5c" />
          <hr className="border-2 my-4 dark:border-neutral-50/25" />
          <p>
            Actually, this is a project we did for my bachelor's dissertation
            with
            <a href="https://gitlab.com/bekirkapukaya">
              <i> Bekir Kapukaya </i>
            </a>
            who is a Geomatics Engineer at CSCRS(UHUZAM). Also, this application
            will be used as a base for a forest fire risk analysis system. We
            developed this project with MVC software architecture.
          </p>

          <div>
            <img
              src={Image}
              alt="System architecture"
              className="rounded w-full sm:w-9/12 p-4 mx-auto"
            />
            <h3 className="text-center">System Architecture</h3>
          </div>

          <hr className="border-2 my-4 dark:border-neutral-50/25" />

          <p>The technologies we used in this project are as follows:</p>
          <ul className="list-disc list-inside">
            <li>
              ExpressJS - Technology responsible for server-side web services
            </li>
            <li>EJS - Template engine for JavaScript</li>
            <li>MongoDB - DBMS where user information is stored</li>
            <li>PostgreSQL - DBMS where spatial data is stored</li>
            <li>
              PostGIS - A plugin for PostgreSQL to support geographic data
            </li>
            <li>GeoServer - Map server that manages spatial data services </li>
            <li>OpenLayers - JavaScript library for displaying map data </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default ForestFireInformationSystem;
