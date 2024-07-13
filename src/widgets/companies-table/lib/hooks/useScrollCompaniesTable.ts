import { useCallback, useEffect, useRef, useState } from "react";
import { Company } from "../../../../entities/company-row/model/type/company-row-type";

export const useScrollCompaniesTable = (companies: Company[]) => {
  const [loadedItems, setLoadedItems] = useState<number>(40);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      setLoadedItems((prev) => Math.min(prev + 20, companies.length));
    }
  }, [companies.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  const currentData = companies.slice(0, loadedItems);

  return { loadedItems, containerRef, currentData };
};
