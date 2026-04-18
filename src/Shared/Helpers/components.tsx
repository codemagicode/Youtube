//===================================================
// Named element
//===================================================

import { JSX } from "react";
import { useCurrentFrame } from "remotion";

const cache: Record<string, React.FC<React.HTMLAttributes<HTMLDivElement>>> = {};

export const NamedElement = new Proxy(
  {},
  {
    get(_, key: string) {
      if (typeof key !== 'string') {
        return undefined;
      }

      if (!cache[key]) {
        const Component = ({ children, ...props }: React.PropsWithChildren<DivProps>) => (
          <div data-element={key} {...props}>
            {children}
          </div>
        );
        Component.displayName = `NamedElement(${key})`;
        cache[key] = Component;
      }
      return cache[key];
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