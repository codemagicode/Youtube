import { useState } from "react";
import { Html5Audio, Html5Video, Img, useCurrentFrame } from "remotion";

//===================================================
// Named element
//===================================================
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
  children: React.ReactNode
  at: FrameRange[]
}

//===================================================
// SafeAsset component
//===================================================
export const SafeAsset = (props: SafeAssetProps) => {
  const { component: Component, ...rest } = props;
  const [error, setError] = useState(false);

  if (error) {
    const newRest = rest as unknown as HTMLDivElement
    return <div {...newRest} />;
  }

  return <Component {...rest} onError={() => setError(true)} />;
};

type SafeAssetProps = {
  component: typeof Img | typeof Html5Video | typeof Html5Audio;
  src: string;
}