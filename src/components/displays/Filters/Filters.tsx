import { HeightFilters } from "./HeightFilters";
import { TypeFilters } from "./TypeFilters";
import { WeightFilters } from "./WeightFilters";

export const Filters = () => {
  return (
    <div className="grid gap-7">
      <TypeFilters />
      <HeightFilters />
      <WeightFilters />
    </div>
  );
};
