import { Fragment } from "react";

export interface AboutProps {
  isLoading?: boolean;
  data?: { key: string; value: string }[];
}

export const About = ({ data, isLoading }: AboutProps) => {
  if (!data || isLoading) {
    return (
      <div className="grid gap-6">
        <div className="skeleton md:h-7 h-6 w-52" />
        <div className="skeleton md:h-7 h-6 w-40" />
        <div className="skeleton md:h-7 h-6 w-40" />
        <div className="skeleton md:h-7 h-6 w-56" />
      </div>
    );
  }
  return (
    <div className="inline-grid grid-cols-[max-content_max-content] md:gap-6 gap-4 md:text-lg text-base text-dark-gray font-bold capitalize">
      {data.map(({ key, value }) => (
        <Fragment key={key}>
          <span>{key}</span>
          <span>{value}</span>
        </Fragment>
      ))}
    </div>
  );
};
