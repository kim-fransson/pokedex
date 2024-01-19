import { Button, Dialog, Modal, ModalOverlay } from "react-aria-components";
import FilterIcon from "@icons/filter.svg?react";
import { AnimatePresence, motion } from "framer-motion";
import { filterCount, hasFilters } from "@/utils";
import { useEffect, useMemo, useState } from "react";
import { Filters } from "@/components/displays/Filters/Filters";

import CloseIcon from "@icons/close.svg?react";

export interface FiltersTriggerProps {
  defaultFilters: Filters;
  onApplyFilters: (filters: Filters) => void;
}

export const FiltersTrigger = ({
  onApplyFilters,
  defaultFilters = [[], [], []],
}: FiltersTriggerProps) => {
  const [isOpen, setOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const MotionButton = useMemo(() => motion(Button), []);
  const MotionModal = useMemo(() => motion(Modal), []);
  const MotionModalOverlay = useMemo(() => motion(ModalOverlay), []);

  useEffect(() => {
    setFilters(defaultFilters);
  }, [defaultFilters]);

  const resetFilters = () => {
    setFilters([[], [], []]);
  };

  return (
    <>
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onPress={() => setOpen(true)}
        className="px-6 py-3 flex items-center gap-2 font-bold text-sm text-dark-gray rounded-full border-2
      border-dark-gray/16 bg-white outline-none focus-visible:ring-2 ring-dark-blue"
      >
        {hasFilters(defaultFilters) ? (
          <span className="h-4 min-w-4 rounded-full bg-blue text-dark-blue text-center text-xs">
            {filterCount(defaultFilters)}
          </span>
        ) : (
          <FilterIcon className="w-4 h-4" />
        )}
        Filters
      </MotionButton>
      <AnimatePresence>
        {isOpen && (
          <MotionModalOverlay
            isOpen
            isDismissable={true}
            onOpenChange={(open) => {
              setFilters(defaultFilters);
              setOpen(open);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-sm z-40"
          >
            <MotionModal
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.4, ease: "anticipate" }}
              exit={{ x: "100%", transition: { duration: 0.2 } }}
              className="max-w-md outline-none z-50 fixed top-0 bottom-0 right-0 bg-light-gray shadow-lg rounded-tl-3xl rounded-bl-3xl"
            >
              <Dialog aria-label="filters" className="outline-none h-full">
                {({ close }) => (
                  <div className="p-5 h-full flex flex-col gap-5">
                    <h2 className="text-dark-gray font-bold text-xl">
                      Filters
                    </h2>

                    <hr className="divide-x border-dark-gray/24 -mx-5" />

                    <Filters filters={filters} onChange={setFilters} />
                    <div className="flex gap-4 mt-auto">
                      <MotionButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-lg outline-none focus-visible:ring-2 ring-dark-blue
                        border border-dark-blue font-bold text-dark-blue py-3 w-full"
                        onPress={resetFilters}
                      >
                        Reset Filters
                      </MotionButton>
                      <MotionButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-lg outline-none focus-visible:ring-2 ring-dark-blue w-full py-3 bg-blue font-bold text-dark-blue"
                        onPress={() => {
                          onApplyFilters(filters);
                          setFilters(filters);
                          close();
                        }}
                      >
                        Apply filters
                      </MotionButton>
                    </div>
                    <MotionButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute right-5 top-5 outline-none focus-visible:ring-2 ring-dark-blue rounded-full"
                      onPress={close}
                    >
                      <CloseIcon />
                    </MotionButton>
                  </div>
                )}
              </Dialog>
            </MotionModal>
          </MotionModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};
