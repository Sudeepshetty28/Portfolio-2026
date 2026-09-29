"use client";

import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./components/Home";

export default function Page() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return loadingFinished ? (
    <Home />
  ) : (
    <LoadingScreen onFinish={() => setLoadingFinished(true)} />
  );
}