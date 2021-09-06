export function generateIndexesForRow(
  rowIndex,
  rowWidth,
  itemWidth,
  itemsAmount
) {
  const result = [];
  const maxItemsPerRow = getMaxItemsAmountPerRow(rowWidth, itemWidth);
  const startIndex = rowIndex * maxItemsPerRow;

  for (
    let i = startIndex;
    i < Math.min(startIndex + maxItemsPerRow, itemsAmount);
    i++
  ) {
    result.push(i);
  }

  return result;
}

function getMaxItemsAmountPerRow(rowWidth, itemWidth) {
  return Math.max(Math.floor(rowWidth / itemWidth), 1);
}

export function getRowsAmount(rowWidth, itemWidth, itemsAmount, hasMore) {
  const maxItemsPerRow = getMaxItemsAmountPerRow(rowWidth, itemWidth);

  return Math.ceil(itemsAmount / maxItemsPerRow) + (hasMore ? 1 : 0);
}
