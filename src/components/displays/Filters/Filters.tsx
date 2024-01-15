import { HeightFilters } from "./HeightFilters";
import { TypeFilters } from "./TypeFilters";
import { WeightFilters } from "./WeightFilters";

export interface FiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export const Filters = ({ filters, onChange }: FiltersProps) => {
  return (
    <div className="grid gap-7">
      <TypeFilters
        selectedFilters={filters[0]}
        onChange={(newTypeFilters) =>
          onChange([newTypeFilters, filters[1], filters[2]])
        }
      />
      <HeightFilters
        selectedFilters={filters[1]}
        onChange={(newHeightFilters) =>
          onChange([filters[0], newHeightFilters, filters[2]])
        }
      />
      <WeightFilters
        selectedFilters={filters[2]}
        onChange={(newWeightFilters) =>
          onChange([filters[0], filters[1], newWeightFilters])
        }
      />
    </div>
  );
};
