import React, { useEffect, useRef } from "react";
import {
  InfiniteLoader,
  List,
  WindowScroller,
  AutoSizer,
} from "react-virtualized";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { generateIndexesForRow, getRowsAmount } from "services/utils";
import { makeStyles } from "@material-ui/core/styles";

const InfiniteList = ({
  itemWidth = 400,
  itemHeight = 360,
  hasMore = false,
  items = [],
  reset = false,
  isFetching = false,
  fetchItems = () => {},
  isMobile = false,
  children,
}) => {
  const useStyles = makeStyles((theme) => ({
    grid: {
      marginTop: isMobile ? theme.spacing(1) : theme.spacing(2),
      marginBottom: isMobile ? theme.spacing(1) : theme.spacing(2),
      justifyContent: "center",
    },
    gridItem: {
      paddingTop: theme.spacing(2),
      paddingRight: isMobile ? theme.spacing(1) : theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: isMobile ? theme.spacing(1) : theme.spacing(2),
    },
    row: {
      display: "flex",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();
  const infiniteLoaderRef = useRef(null);

  useEffect(() => {
    if (reset && infiniteLoaderRef.current) {
      infiniteLoaderRef.current.resetLoadMoreRowsCache(true);
    }
  }, [reset, infiniteLoaderRef]);

  const loadMoreRows = () => {
    if (!isFetching) {
      fetchItems();
    }
  };

  const noRowsRenderer = () => (
    <Grid item>
      <Typography>No events found</Typography>
    </Grid>
  );

  return (
    <section>
      <AutoSizer disableHeight>
        {({ width: rowWidth }) => {
          const rowCount = getRowsAmount(
            rowWidth,
            itemWidth,
            items.length,
            hasMore
          );

          return (
            <InfiniteLoader
              ref={infiniteLoaderRef}
              rowCount={rowCount}
              isRowLoaded={({ index }) => {
                const allItemsLoaded =
                  generateIndexesForRow(
                    index,
                    rowWidth,
                    itemWidth,
                    items.length
                  ).length > 0;

                return !hasMore || allItemsLoaded;
              }}
              loadMoreRows={loadMoreRows}
            >
              {({ onRowsRendered, registerChild }) => (
                <WindowScroller>
                  {({ height, scrollTop }) => (
                    <List
                      className={classes.grid}
                      autoHeight
                      ref={registerChild}
                      height={height}
                      scrollTop={scrollTop}
                      width={rowWidth}
                      rowCount={rowCount}
                      rowHeight={itemHeight}
                      onRowsRendered={onRowsRendered}
                      rowRenderer={({ index, style, key }) => {
                        const itemsForRow = generateIndexesForRow(
                          index,
                          rowWidth,
                          itemWidth,
                          items.length
                        ).map((itemIndex) => items[itemIndex]);

                        return (
                          <div style={style} key={key} className={classes.row}>
                            {itemsForRow.map((item, itemIndex) => (
                              <Grid
                                item
                                className={classes.gridItem}
                                style={{ width: itemWidth }}
                                key={itemIndex}
                              >
                                {children(item)}
                              </Grid>
                            ))}
                          </div>
                        );
                      }}
                      noRowsRenderer={noRowsRenderer}
                    />
                  )}
                </WindowScroller>
              )}
            </InfiniteLoader>
          );
        }}
      </AutoSizer>
    </section>
  );
};

export default InfiniteList;
