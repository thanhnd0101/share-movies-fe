import { useState } from "react";
import { useSelector } from "react-redux";
import AuthenticatedRightHeader from "./AuthenticatedRightHeader";
import UnauthenticatedRightHeader from "./UnauthenticatedRightHeader";

export default function RightHeader() {
  const isAuthenticated =
    useSelector((state: any) => state.user.token).length > 0;

  const [_, setRerender] = useState(false);
  function refresh() {
    setRerender((state) => !state);
  }
  return (
    <>
      {isAuthenticated ? (
        <AuthenticatedRightHeader refresh={refresh} />
      ) : (
        <UnauthenticatedRightHeader refresh={refresh} />
      )}
    </>
  );
}
