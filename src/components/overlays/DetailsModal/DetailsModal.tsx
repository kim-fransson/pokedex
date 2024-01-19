import { Button, Dialog, Modal, ModalOverlay } from "react-aria-components";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useMemo } from "react";
import { PokemonDetails } from "@/components/displays/PokemonDetails/PokemonDetails";
import ArrowBack from "@icons/arrow-back.svg?react";

export interface DetailsModalProps extends PropsWithChildren {
  pokemon: Pokemon;
  isOpen?: boolean;
  onOpenChange?: (value: boolean) => void;
}

export const DetailsModal = ({
  pokemon,
  isOpen = false,
  onOpenChange,
}: DetailsModalProps) => {
  const MotionModal = useMemo(() => motion(Modal), []);
  const MotionModalOverlay = useMemo(() => motion(ModalOverlay), []);

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionModalOverlay
          isOpen
          isDismissable={true}
          onOpenChange={onOpenChange}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 backdrop-blur-sm z-40"
        >
          <MotionModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "anticipate" }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="z-50 fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          >
            <Dialog
              aria-label="pokemon details"
              className="outline-none h-full"
            >
              {({ close }) => (
                <>
                  <PokemonDetails pokemon={pokemon} />
                  <Button
                    className="absolute top-8 z-20 left-10 text-white outline-none"
                    onPress={close}
                  >
                    <ArrowBack className="h-5 w-5" />
                  </Button>
                </>
              )}
            </Dialog>
          </MotionModal>
        </MotionModalOverlay>
      )}
    </AnimatePresence>
  );
};
