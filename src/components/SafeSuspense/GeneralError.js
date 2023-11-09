import { Text } from "@chakra-ui/react";

export const GeneralError = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <Text>Oh no</Text>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {error.message ? error.message : JSON.stringify(error)}
      </pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
