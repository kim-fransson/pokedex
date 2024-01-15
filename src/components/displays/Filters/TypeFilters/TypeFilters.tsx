import {
  Checkbox,
  CheckboxGroup,
  CheckboxGroupProps,
  CheckboxProps,
  Label,
} from "react-aria-components";
import { TypeBadge } from "../../TypeBadge/TypeBadge";

interface TypeFiltersCheckboxGroupProps
  extends Omit<CheckboxGroupProps, "children"> {
  children?: React.ReactNode;
}

const TypeFiltersCheckboxGroup = ({
  children,
  ...props
}: TypeFiltersCheckboxGroupProps) => {
  return (
    <CheckboxGroup {...props}>
      <Label className="flex flex-col font-medium text-dark-gray/60 mb-2.5">
        Type
      </Label>
      <div className="grid grid-cols-4 md:grid-cols-3 gap-3 justify-start">
        {children}
      </div>
    </CheckboxGroup>
  );
};

interface FilterCheckboxProps extends Omit<CheckboxProps, "children"> {}

const FilterCheckbox = (props: FilterCheckboxProps) => {
  return (
    <Checkbox
      {...props}
      className="group w-fit hover:scale-105 transition-transform cursor-pointer focus-visible:ring-2 ring-dark-blue rounded-full"
    >
      {({ isSelected }) => (
        <TypeBadge type={props.value as Type} active={isSelected} />
      )}
    </Checkbox>
  );
};

export interface TypeFiltersProps {
  selectedFilters: Type[];
  onChange: (filters: Type[]) => void;
}
export const TypeFilters = ({
  onChange,
  selectedFilters,
}: TypeFiltersProps) => {
  return (
    <TypeFiltersCheckboxGroup
      value={selectedFilters}
      onChange={(values) => onChange(values as Type[])}
    >
      <FilterCheckbox value="normal" />
      <FilterCheckbox value="dragon" />
      <FilterCheckbox value="fighting" />
      <FilterCheckbox value="dark" />
      <FilterCheckbox value="flying" />
      <FilterCheckbox value="fairy" />
      <FilterCheckbox value="poison" />
      <FilterCheckbox value="electric" />
      <FilterCheckbox value="ground" />

      <FilterCheckbox value="rock" />
      <FilterCheckbox value="steel" />
      <FilterCheckbox value="bug" />
      <FilterCheckbox value="fire" />
      <FilterCheckbox value="ghost" />
      <FilterCheckbox value="water" />
      <FilterCheckbox value="psychic" />
      <FilterCheckbox value="grass" />
      <FilterCheckbox value="ice" />
    </TypeFiltersCheckboxGroup>
  );
};
