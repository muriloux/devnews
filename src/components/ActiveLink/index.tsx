import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...othersProps
}: IActiveLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === othersProps.href ? activeClassName : "";

  return <Link {...othersProps}>{cloneElement(children, { className })}</Link>;
}
