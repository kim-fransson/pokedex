import {
  SelectProps as AriaSelectProps,
  Button,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Popover,
  SelectValue,
  Select as AriaSelect,
} from "react-aria-components";

import Arrow from "@icons/arrow.svg?react";
import Check from "@icons/check.svg?react";

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export const Select = <T extends object>({
  children,
  items,
  ...props
}: SelectProps<T>) => {
  return (
    <AriaSelect {...props} className="group max-w-52">
      <Button
        className="rounded-lg border-2 w-full border-dark-gray/16 flex items-center px-4 py-3 gap-2 bg-white outline-none
      focus-visible:ring-2 ring-dark-blue"
      >
        <SelectValue className="text-sm font-bold text-dark-gray" />
        <Arrow className="ml-auto group-data-[open]:-rotate-180 transition-transform" />
      </Button>
      <Popover className="w-[--trigger-width] entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
        <ListBox
          className="outline-none grid p-2 rounded-lg border-2 border-dark-gray/16 bg-white"
          items={items}
        >
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
};

export const Option = (props: ListBoxItemProps) => {
  return (
    <ListBoxItem
      {...props}
      textValue={props.id as string}
      className="cursor-pointer rounded-lg p-2 text-xs selected:bg-dark-gray/16 focus:bg-dark-gray/8 outline-none flex items-center
      focus-visible:ring-2 ring-dark-blue"
    >
      {({ isSelected }) => (
        <>
          {props.children}
          {isSelected && <Check className="ml-auto h-3 w-3" />}
        </>
      )}
    </ListBoxItem>
  );
};
