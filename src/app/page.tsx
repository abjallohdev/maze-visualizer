"use client";
import { Grid, Navbar } from "@/components";
import React, { useRef } from "react";

const Home = () => {
  const isVisualizerRunning = useRef(false);
  return (
    <div className="flex h-screen w-screen flex-col bg-[#131416]">
      <Navbar isVisualizerRunning={isVisualizerRunning} />
      <Grid isVisualizerRunning={isVisualizerRunning} />
    </div>
  );
};

export default Home;
