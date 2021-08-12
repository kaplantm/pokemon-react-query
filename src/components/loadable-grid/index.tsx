import { useMemo } from "react";
import { VirtuosoGrid, GridItemContent } from "react-virtuoso";
import CustomItem from "./custom-item";
import CustomList from "./custom-list";

// https://virtuoso.dev/material-ui-endless-scrolling/

type LoadableGridProps = {
  count: number;
  ItemContent: GridItemContent;
};

const LoadableGrid: React.FunctionComponent<LoadableGridProps> = ({
  count,
  ItemContent,
}) => {
  const ScrollSeekPlaceholder: React.FunctionComponent<any> = useMemo(
    () =>
      ({ height, index }) =>
        <CustomItem data-index={index}>{ItemContent(1)}</CustomItem>,
    [ItemContent]
  );
  return (
    <>
      <VirtuosoGrid
        style={{ height: "400px" }}
        totalCount={count}
        // overscan={Math.floor(count * 0.1)}
        itemContent={ItemContent}
        components={{
          List: CustomList,
          Item: CustomItem,
          ScrollSeekPlaceholder,
        }}
        // scrollSeekConfiguration={{
        //   enter: (velocity) => Math.abs(velocity) > 200,
        //   exit: (velocity) => Math.abs(velocity) < 30,
        //   change: (_, range) => console.log({ range }),
        // }}
      />
    </>
  );
};

export default LoadableGrid;
