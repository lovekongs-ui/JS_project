function createPaginator(fetchPage) {
  return {
    [Symbol.asyncIterator]() {
      let currentPage = 1;
      let hasMore = true;
      
      return {
        async next() {
          if (!hasMore) {
            return { done: true, value: undefined };
          }
          
          const result = await fetchPage(currentPage);
          hasMore = result.hasMore;
          currentPage++;
          
          return { done: false, value: result.data };
        }
      };
    }
  };
  //TODO: 구현하세요 
  // fetchPage(page) => { data: [], hasMore: boolean }
}

// 테스트
const mockFetch = async (page) => {
  await delay(100);
  return {
    data: [`item-${page}-1`, `item-${page}-2`],
    hasMore: page < 3
  };
};

const paginator = createPaginator(mockFetch);

for await (const items of paginator) {
  console.log(items);
}
// ['item-1-1', 'item-1-2']
// ['item-2-1', 'item-2-2']
// ['item-3-1', 'item-3-2']