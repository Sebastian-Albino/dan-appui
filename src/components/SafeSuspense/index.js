import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { GeneralError } from "@src/components/SafeSuspense/GeneralError";
import { Spinner } from "@chakra-ui/react";

const DefaultFallback = ({ color }) => {
  return <Spinner color={color} />;
};

/**
 *
 * @param {JSX.Element} children
 * @param {string} color
 * @param {JSX.Element} fallback
 * @return {JSX.Element}
 * @constructor
 */
export default function SafeSuspense({
  children,
  color,
  fallback = <DefaultFallback color={color} />
}) {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <GeneralError error={error} resetErrorBoundary={resetErrorBoundary} />
      )}
      onError={(error, info) => isDev && console.error(error, info)}
      resetKeys={[children]}
    >
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}
