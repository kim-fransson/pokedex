import {
  Button,
  Input,
  SearchField,
  SearchFieldProps,
} from "react-aria-components";
import SearchIcon from "@icons/search.svg?react";
import { useCallback, useState } from "react";
import { useFocusWithin } from "react-aria";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

export const Search = (props: SearchFieldProps) => {
  const [isFocusWithin, setFocusWithin] = useState(false);
  const { focusWithinProps } = useFocusWithin({
    onFocusWithinChange: (isFocusWithin) => setFocusWithin(isFocusWithin),
  });

  const { value, onSubmit } = props;

  const handleSubmit = useCallback(() => {
    if (onSubmit && value) {
      onSubmit(value);
    }
  }, [value, onSubmit]);

  return (
    <div
      className={twMerge(
        "rounded-2xl bg-white shadow-lg py-4 pl-4 pr-2 gap-4 flex items-center",
        isFocusWithin && "ring-2 ring-dark-blue ring-offset-0",
      )}
    >
      <SearchField
        {...props}
        aria-label="search for pokemon"
        className="flex items-center gap-4 flex-1"
      >
        <SearchIcon className="w-6 h-6 text-dark-blue" />
        <Input
          {...focusWithinProps}
          className="bg-transparent outline-none font-medium text flex-1 
        text-dark-blue placeholder:text-dark-blue focus:placeholder:text-dark-blue/60"
          placeholder="Search for your favorite pokemon"
        />
      </SearchField>
      <AnimatePresence>
        {value && (
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <Button
              onPress={handleSubmit}
              className="min-w-36 max-h-10 ml-auto py-2 -my-2 text-center rounded-lg bg-yellow shadow-lg font-bold text-dark-blue
            focus-visible:ring-2 ring-dark-blue outline-none"
            >
              Search
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
