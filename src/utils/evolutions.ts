export const isLevel = (
  evolutionTrigger: EvolutionTrigger,
): evolutionTrigger is LevelUp => {
  return evolutionTrigger.type === "level-up";
};

export const isUseItem = (
  evolutionTrigger: EvolutionTrigger,
): evolutionTrigger is UseItem => {
  return evolutionTrigger.type === "use-item";
};

export const isTrade = (
  evolutionTrigger: EvolutionTrigger,
): evolutionTrigger is Trade => {
  return evolutionTrigger.type === "trade";
};

export const isOther = (
  evolutionTrigger: EvolutionTrigger,
): evolutionTrigger is Other => {
  return evolutionTrigger.type === "other";
};
