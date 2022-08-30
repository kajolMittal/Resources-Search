import React from "react";
import { view } from "@risingstack/react-easy-state";
import SearchBar from "material-ui-search-bar";
import LinearProgress from "@material-ui/core/LinearProgress";
import appStore from "./appStore";
import BasicCard from "./cards";

// this is re-rendered whenever the relevant parts of the used data stores change
const FindBar = () => (
  <div className="searchbar">
    <SearchBar
      onRequestSearch={appStore.fetchData}
      placeholder="Enter Animal Description ..."
      autoFocus
    />
    {appStore.isLoading && <LinearProgress />}
    {appStore?.animals?.length
      ? appStore?.animals?.map((data, index) => <BasicCard apiData={data} />)
      : "NO DATA FOUND"}
  </div>
);

export default view(FindBar);
