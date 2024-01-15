import {
  Checkbox,
  CheckboxGroup,
  CheckboxGroupProps,
  CheckboxProps,
  Label,
} from "react-aria-components";
import Large from "@icons/large-weight.svg?react";
import Medium from "@icons/medium-weight.svg?react";
import Small from "@icons/small-weight.svg?react";

interface WeightFiltersCheckboxGroupProps
  extends Omit<CheckboxGroupProps, "children"> {
  children?: React.ReactNode;
}

const WeightFiltersCheckboxGroup = ({
  children,
  ...props
}: WeightFiltersCheckboxGroupProps) => {
  return (
    <CheckboxGroup {...props}>
      <Label className="inline-block font-medium text-dark-gray/60 mb-2.5">
        Weight
      </Label>
      <div className="flex gap-4">{children}</div>
    </CheckboxGroup>
  );
};

interface FilterCheckboxProps extends Omit<CheckboxProps, "children"> {
  children?: React.ReactNode;
}

const FilterCheckbox = ({ children, ...props }: FilterCheckboxProps) => {
  return (
    <Checkbox
      {...props}
      className="rounded-lg bg-dark-gray/16 w-12 h-12 flex items-center justify-center cursor-pointer
      selected:bg-blue hover:scale-105 transition-transform focus-visible:ring-2 ring-dark-blue"
    >
      {children}
    </Checkbox>
  );
};

export interface WeightFiltersProps {
  selectedFilters: WeightFilter[];
  onChange: (filters: WeightFilter[]) => void;
}
export const WeightFilters = ({
  onChange,
  selectedFilters,
}: WeightFiltersProps) => {
  return (
    <WeightFiltersCheckboxGroup
      value={selectedFilters}
      onChange={(values) => {
        const weights = values as WeightFilter[];
        if (
          weights.includes("small") &&
          weights.includes("large") &&
          !weights.includes("medium")
        ) {
          weights.push("medium");
        }
        onChange(weights);
      }}
    >
      <FilterCheckbox value="small">
        <Small />
      </FilterCheckbox>
      <FilterCheckbox value="medium">
        <Medium />
      </FilterCheckbox>
      <FilterCheckbox value="large">
        <Large />
      </FilterCheckbox>
    </WeightFiltersCheckboxGroup>
  );
};
