import {
  Checkbox,
  CheckboxGroup,
  CheckboxGroupProps,
  CheckboxProps,
  Label,
} from "react-aria-components";
import Large from "@icons/large-height.svg";
import Medium from "@icons/medium-height.svg";
import Small from "@icons/small-height.svg";

interface HeightFiltersCheckboxGroupProps
  extends Omit<CheckboxGroupProps, "children"> {
  children?: React.ReactNode;
}

const HeightFiltersCheckboxGroup = ({
  children,
  ...props
}: HeightFiltersCheckboxGroupProps) => {
  return (
    <CheckboxGroup {...props}>
      <Label className="inline-block font-medium text-dark-gray/60 mb-2.5">
        Height
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
      selected:bg-blue hover:scale-105 transition-all focus-visible:ring-2 ring-dark-blue"
    >
      {children}
    </Checkbox>
  );
};

export interface HeightFiltersProps {
  selectedFilters: HeightFilter[];
  onChange: (filters: HeightFilter[]) => void;
}
export const HeightFilters = ({
  onChange,
  selectedFilters,
}: HeightFiltersProps) => {
  return (
    <HeightFiltersCheckboxGroup
      defaultValue={selectedFilters}
      onChange={(values) => onChange(values as HeightFilter[])}
    >
      <FilterCheckbox value="small">
        <img src={Small} />
      </FilterCheckbox>
      <FilterCheckbox value="medium">
        <img src={Medium} />
      </FilterCheckbox>
      <FilterCheckbox value="large">
        <img src={Large} />
      </FilterCheckbox>
    </HeightFiltersCheckboxGroup>
  );
};
