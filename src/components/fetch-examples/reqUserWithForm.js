import React, { useState } from "react";
import GitHubUserHook from "./reqUserHook";
import ReqUserSearchForm from "./reqUserSearchForm";

const ReqUserHookForm = () => {
  const [login, setLogin] = useState("moontahoe");

  return (
    <>
      <div>ReqUserHookForm</div>
      <ReqUserSearchForm value={login} onSearch={setLogin} />
      <GitHubUserHook login={login} />
    </>
  );
};

export default ReqUserHookForm;
