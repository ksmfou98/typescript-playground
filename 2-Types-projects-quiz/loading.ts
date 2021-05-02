{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (Load: ResourceLoadState) => {
    if (Load.state === "loading") {
      console.log("👀 loading...");
    } else if (Load.state === "success") {
      console.log(`😃${Load.response.body}`);
    } else if (Load.state === "fail") {
      console.log(`😱${Load.reason}`);
    }
  };

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
