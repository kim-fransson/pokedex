export const hasFilters = (filters: Filters) => {
  return (
    filters[0].length > 0 || filters[1].length > 0 || filters[2].length > 0
  );
};

export const filterCount = (filters: Filters) => {
  return filters[0].length + filters[1].length + filters[2].length;
};

export const getHeightRange = (
  filters: HeightFilter[],
): { min: number; max: number } => {
  if (filters.length === 0) {
    return { min: 0, max: 9999 };
  }

  const ranges: { [key in HeightFilter]: { min: number; max: number } } = {
    small: { min: 0, max: 10 },
    medium: { min: 10, max: 20 },
    large: { min: 20, max: 9999 },
  };

  return filters.reduce(
    (accumulator, currentFilter) => {
      accumulator.min = Math.min(accumulator.min, ranges[currentFilter].min);
      accumulator.max = Math.max(accumulator.max, ranges[currentFilter].max);
      return accumulator;
    },
    { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER },
  );
};

export const getWeightRange = (
  filters: WeightFilter[],
): { min: number; max: number } => {
  if (filters.length === 0) {
    return { min: 0, max: 99999 };
  }

  const ranges: { [key in HeightFilter]: { min: number; max: number } } = {
    small: { min: 0, max: 100 },
    medium: { min: 100, max: 500 },
    large: { min: 500, max: 99999 },
  };

  return filters.reduce(
    (accumulator, currentFilter) => {
      accumulator.min = Math.min(accumulator.min, ranges[currentFilter].min);
      accumulator.max = Math.max(accumulator.max, ranges[currentFilter].max);
      return accumulator;
    },
    { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER },
  );
};
