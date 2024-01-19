import { Fragment, useMemo } from "react";

export interface BaseStatsProps {
  data?: { key: string; value: number }[];
  isLoading?: boolean;
}

export const BaseStats = ({ data, isLoading }: BaseStatsProps) => {
  const avg = useMemo(() => {
    if (data) {
      return data.reduce((acc, obj) => acc + obj.value, 0) / data.length;
    }
    return undefined;
  }, [data]);

  if (!data || isLoading) {
    return (
      <div className="grid gap-4">
        {Array.from({ length: 7 }, (_, index) => (
          <div key={index} className="gap-6 flex">
            <div className="skeleton md:h-7 h-6 w-52" />
            <div className="skeleton md:h-7 h-6 w-full" />
          </div>
        ))}
      </div>
    );
  }

  const getProgressColor = (value: number) => {
    if (value < 50) {
      return "base-stats-low";
    } else if (value < 80) {
      return "base-stats-medium";
    } else {
      return "base-stats-high";
    }
  };

  return (
    <div className="grid md:gap-x-6 gap-x-4 gap-y-4 items-center grid-cols-[max-content_max-content_1fr] md:text-lg text-base text-dark-gray font-bold capitalize">
      {data.map(({ key, value }) => (
        <Fragment key={key}>
          <span>{key}</span>
          <span>{value}</span>
          <progress
            className={`base-stats ${getProgressColor(value)}`}
            value={value}
            max="100"
          />
        </Fragment>
      ))}
      {avg && (
        <Fragment>
          <span className="normal-case">Total avg</span>
          <span>{avg.toFixed(1)}</span>
          <progress
            className={`base-stats ${getProgressColor(avg)}`}
            value={avg}
            max="100"
          />
        </Fragment>
      )}
    </div>
  );
};
