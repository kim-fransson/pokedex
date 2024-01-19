import { EvolutionImage } from "../EvolutionImage/EvolutionImage";
import { EvolutionTrigger } from "../EvolutionTrigger/EvolutionTrigger";

export interface EvolutionProps {
  evolution: Evolution;
}

export const Evolution = ({ evolution }: EvolutionProps) => {
  return (
    <div className="gap-4 flex items-center justify-between">
      <EvolutionImage pokemonId={evolution.fromId} />
      <EvolutionTrigger trigger={evolution.trigger} />
      <EvolutionImage pokemonId={evolution.toId} />
    </div>
  );
};
