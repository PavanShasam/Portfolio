import { useLocation, useRoute } from "wouter";

export function useBasePath() {
  return "/Portfolio";
}

export function useBaseRoute(pattern: string) {
  const basePath = useBasePath();
  const [match, params] = useRoute(basePath + pattern);
  return [match, params] as const;
}

export function useBaseLocation() {
  const basePath = useBasePath();
  const [location, setLocation] = useLocation();
  
  const baseLocation = location.startsWith(basePath) 
    ? location.slice(basePath.length) || "/"
    : location;

  const setBaseLocation = (to: string) => {
    if (to === "/") {
      setLocation(basePath + to);
    } else {
      setLocation(basePath + (to.startsWith("/") ? to : "/" + to));
    }
  };

  return [baseLocation, setBaseLocation] as const;
}
