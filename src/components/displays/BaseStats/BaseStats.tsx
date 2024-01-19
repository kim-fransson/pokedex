import { Fragment, useMemo } from "react";

export interface BaseStatsProps {
  data?: { key: string; value: number }[];
  isLoading?: boolean;
}

export const BaseStats = ({ data, isLoading }: BaseStatsProps) => {
  const avg = useMemo(() => {
    if (data) {
      return (
        data.reduce((acc, obj) => acc + obj.value, 0) / data.length
      ).toFixed(1);
    }
    return undefined;
  }, [data]);

  if (!data || isLoading) {
    return (
      <div className="grid gap-4">
        {Array.from({ length: 7 }, (_, index) => (
          <div key={index} className="gap-6 flex">
            <div className="skeleton h-7 w-52" />
            <div className="skeleton h-7 w-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-x-6 gap-y-4 items-center grid-cols-[max-content_max-content_1fr] text-lg text-dark-gray font-bold capitalize">
      {data.map(({ key, value }) => (
        <Fragment key={key}>
          <span>{key}</span>
          <span>{value}</span>
          <progress className="base-stats" value={value} max="100" />
        </Fragment>
      ))}
      {avg && (
        <Fragment>
          <span className="normal-case">Total avg</span>
          <span>{avg}</span>
          <progress className="base-stats" value={avg} max="100" />
        </Fragment>
      )}
    </div>
  );
};
