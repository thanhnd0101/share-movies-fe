import { useState } from "react";
import { useSelector } from "react-redux";
import AuthenticatedRightHeader from "./AuthenticatedRightHeader";
import UnauthenticatedRightHeader from "./UnauthenticatedRightHeader";
import { ToastContainer } from "react-toastify";

export default function RightHeader({
  refreshList,
}: {
  refreshList: Function;
}) {
  const isAuthenticated =
    useSelector((state: any) => state.user.token).length > 0;

  const [_, setRerender] = useState(false);
  function refresh() {
    setRerender((state) => !state);
  }
  return (
    <>
      {isAuthenticated ? (
        <AuthenticatedRightHeader refresh={refresh} refreshList={refreshList} />
      ) : (
        <UnauthenticatedRightHeader refresh={refresh} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </>
  );
}
