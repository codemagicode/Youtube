//===================================================
// Named element
//===================================================

import { JSX } from "react";
import { useCurrentFrame } from "remotion";

export const NamedElement = new Proxy(
  {},
  {
    get(_, key: string) {
      return ({ children, ...props }: React.PropsWithChildren<DivProps>) => (
        <div data-element={key} {...props}>
          {children}
        </div>
      );
    },
  }
) as NamedElementType;


type NamedElementType = Record<
  string,
  React.FC<React.HTMLAttributes<HTMLDivElement>>
>;

type DivProps = React.HTMLAttributes<HTMLDivElement>;

//===================================================
// Show component
//===================================================

export const Show = ({ children, at }: ShowProps) => {
  const frame = useCurrentFrame();

  const show = at.some(({ from, to }) => {
    const afterFrom = from === undefined || frame >= from;
    const beforeTo = to === undefined || frame <= to;

    return afterFrom && beforeTo;
  });

  return <>{show ? children : null}</>;
};

type FrameRange = {
    from?: number;
    to?: number;
}

type ShowProps = {
    children: React.ReactElement | JSX.Element | string | number
    at: FrameRange[]
}