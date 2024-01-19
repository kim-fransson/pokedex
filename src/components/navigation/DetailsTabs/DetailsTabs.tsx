import { PropsWithChildren } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { motion } from "framer-motion";
import { AboutScreen, BaseStatsScreen } from "@/components";
import { EvolutionsScreen } from "@/components/screens/EvolutionsScreen/EvolutionsScreen";

const DetailTab = ({ children, id }: PropsWithChildren & { id: string }) => {
  return (
    <Tab
      className="cursor-pointer px-6 relative mb-1 group outline-none 
      focus-visible:ring-2 ring-dark-blue text-xl text-dark-gray/60 selected:text-dark-gray font-bold
      transition-colors"
      id={id}
    >
      {({ isSelected }) => (
        <>
          {children}
          {isSelected && (
            <motion.div
              layoutId="underline"
              className="absolute bg-dark-blue left-0 right-0 h-1 -bottom-1.5 "
            />
          )}
        </>
      )}
    </Tab>
  );
};

const DetailPanel = ({ children, id }: PropsWithChildren & { id: string }) => {
  return (
    <TabPanel className="px-6 py-8 flex-1 relative" id={id}>
      {children}
    </TabPanel>
  );
};

export interface DetailsTabsProps {
  pokemonId: number;
}

export const DetailsTabs = ({ pokemonId }: DetailsTabsProps) => {
  return (
    <Tabs className="flex flex-col bg-white pt-6 rounded-2xl h-[420px] overflow-auto relative z-10">
      <TabList
        className="flex border-b-dark-gray/24 border-b"
        aria-label="pokemon details"
      >
        <DetailTab id="about">About</DetailTab>
        <DetailTab id="base_stats">Base stats</DetailTab>
        <DetailTab id="evolution">Evolution</DetailTab>
      </TabList>
      <DetailPanel id="about">
        <AboutScreen pokemonId={pokemonId} />
      </DetailPanel>

      <DetailPanel id="base_stats">
        <BaseStatsScreen pokemonId={pokemonId} />
      </DetailPanel>

      <DetailPanel id="evolution">
        <EvolutionsScreen pokemonId={pokemonId} />
      </DetailPanel>
    </Tabs>
  );
};
