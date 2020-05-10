// is @param different is true it creates production for different purposes (example a created id : 10101/20101/30101)
// if isn't then creates the same products for one purpose (id: 101001/101002/101003)
export const createBlocksChainId = (arg, diffirent=true) => {
  return (
    new Array(arg.types.length)
      .fill('')
      .map((item, i) => {
        return {
          id: +`${diffirent ? i + 1 : 1}0${arg.id}${diffirent ? 1 : i + 1}`,
          name: arg.types[i].name,
          value: arg.types[i].value,
          available: arg.types[i].available ? arg.types[i].available : null,
          parent: {
            id: arg.id,
            name: arg.name
          }
        }
      })
  )
};

export const createMapIdProducts = (productsList) => {
  return productsList.map((product) => {
    const id = product.id;
    return {
      id: product.name
    }
  })
};