import { Button } from "@material-ui/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const [swState, setSwState] = useState(0);
  const [manifest, setManifest] = useState({
    total: 0,
    expected: 0,
  });

  // If you need to use this function in and out of the useEffect, or in multiple useEffects wrap it in useCallback like so
  // const handleEventCallback = useCallback((event: any) => {
  //   setManifest(event.data.message);
  //   // Rewriting this to avoid swState dependency
  //   setSwState((prev) => (prev !== navigator.serviceWorker.controller ? navigator.serviceWorker.controller : prev));
  // }, []);

  // Moving add/remove to their own event listener with limited dependencies so it only runs once
  useEffect(() => {
    // if you only use the function in the useEffect, define it inside the hook
    function handleEvent(event: any) {
      console.log("handleEvent");
      const progress = () =>
        manifest.total > 0 && manifest.expected > 0 ? Math.floor((manifest.total / manifest.expected) * 100) : 0;

      // Rewriting this to avoid swState dependency
      // const currentSeconds = new Date().getSeconds();
      // console.log({ currentSeconds });
      setSwState((prev) => (prev !== currentSeconds ? currentSeconds : prev));
      setProgress(rawProgress);
    }
    console.log("add");
    window.addEventListener("focus", handleEvent);
    return () => {
      console.log("remove");
      window.removeEventListener("focus", handleEvent);
    };
  }, []);

  const rawProgress = useMemo(
    () => (manifest.total > 0 && manifest.expected > 0 ? Math.floor((manifest.total / manifest.expected) * 100) : 0),
    [manifest.total, manifest.expected]
  );
  useEffect(() => {
    if (rawProgress) {
      setProgress(rawProgress);
    }
    // add 'airbnb/hooks' to your eslintrc
    // so the react-hooks/exhaustive-deps rule screams at your about dependencies
  }, [rawProgress]);

  console.log({ progress, rawProgress });

  function updateManifest() {
    setManifest((prev) => ({
      total: (prev.total + 5) % (prev.expected + 1),
      expected: prev.expected,
    }));
  }
  console.log("render", manifest.expected);

  //redirector.gvt1.com/edgedl/android/studio/install/2020.3.1.23/android-studio-2020.3.1.23-mac.dmg
  https: return (
    <div>
      <h1>Progress: {progress}</h1>
      {/* <Button onClick={updateManifest}>Update Manifest</Button> */}

      <Button onClick={updateManifest}>Mock File Download</Button>
    </div>
  );
}

export default App;
