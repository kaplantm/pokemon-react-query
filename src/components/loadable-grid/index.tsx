import { forwardRef, useMemo } from "react";
import { VirtuosoGrid, GridItemContent } from "react-virtuoso";
import CustomItem from "./custom-item";
import CustomList from "./custom-list";

// https://virtuoso.dev/material-ui-endless-scrolling/

type LoadableGridProps = {
  count: number;
  ItemContent: GridItemContent;
  loadMore: () => void;
  fullyLoaded: boolean;
  isFetchingNextPage: boolean;
};

const LoadableGrid: React.FunctionComponent<LoadableGridProps> = ({
  count,
  ItemContent,
  loadMore,
  fullyLoaded,
  isFetchingNextPage,
}) => {
  const ScrollSeekPlaceholder: React.FunctionComponent<any> = useMemo(
    () =>
      ({ height, index }) =>
        <CustomItem data-index={index}>{ItemContent(-1)}</CustomItem>,
    [ItemContent]
  );
  const CustomListContainer: React.FunctionComponent<any> = useMemo(
    () =>
      forwardRef((props, listRef) => (
        <CustomList
          {...props}
          fullyLoaded={fullyLoaded}
          isFetchingNextPage={isFetchingNextPage}
          key="customListContainer"
          ref={listRef}
        />
      )),
    [fullyLoaded, isFetchingNextPage]
  );
  return (
    <>
      <VirtuosoGrid
        endReached={loadMore}
        style={{ height: "800px", margin: 0, padding: 0 }}
        totalCount={count}
        overscan={12}
        itemContent={ItemContent}
        components={{
          List: CustomListContainer,
          Item: CustomItem,
          ScrollSeekPlaceholder,
        }}
        scrollSeekConfiguration={{
          enter: (velocity) => Math.abs(velocity) > 500,
          exit: (velocity) => Math.abs(velocity) < 60,
        }}
      />
    </>
  );
};

export default LoadableGrid;
