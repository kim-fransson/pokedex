import { Fragment } from "react";

export interface AboutProps {
  isLoading?: boolean;
  data?: { key: string; value: string }[];
}

export const About = ({ data, isLoading }: AboutProps) => {
  if (!data || isLoading) {
    return (
      <div className="grid gap-6">
        <div className="skeleton h-7 w-52" />
        <div className="skeleton h-7 w-40" />
        <div className="skeleton h-7 w-40" />
        <div className="skeleton h-7 w-56" />
      </div>
    );
  }
  return (
    <div className="inline-grid grid-cols-[max-content_max-content] gap-6 text-lg text-dark-gray font-bold capitalize">
      {data.map(({ key, value }) => (
        <Fragment key={key}>
          <span>{key}</span>
          <span>{value}</span>
        </Fragment>
      ))}
    </div>
  );
};
