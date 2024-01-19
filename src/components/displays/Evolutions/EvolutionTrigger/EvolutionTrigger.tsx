import { isLevel, isOther, isTrade, isUseItem } from "@/utils";
import Arrow from "@icons/arrow-long.svg?react";

export interface EvolutionTriggerProps {
  trigger: EvolutionTrigger;
}

export const EvolutionTrigger = ({ trigger }: EvolutionTriggerProps) => {
  let triggerBy: JSX.Element | null = null;

  if (isLevel(trigger)) {
    triggerBy = (
      <span className="font-bold text-dark-gray">lvl {trigger.minLevel}</span>
    );
  }

  if (isUseItem(trigger)) {
    triggerBy = (
      <div className="flex items-center gap-1">
        <img src={trigger.image} />
        <span className="font-bold text-dark-gray">{trigger.itemName}</span>
      </div>
    );
  }

  if (isTrade(trigger)) {
    triggerBy = <span className="font-bold text-dark-gray">trade</span>;
  }

  if (isOther(trigger)) {
    triggerBy = <span className="font-bold text-dark-gray">?</span>;
  }

  return (
    <div className="grid justify-items-center">
      <Arrow />
      {triggerBy}
    </div>
  );
};
