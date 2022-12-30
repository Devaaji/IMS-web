const descriptionProductionOrderDataMapper = {
    toLocal: (options) =>
      options.map((opsi) => ({
        label: opsi.description,
        value: opsi.description,
      })),
  };
  
  export default descriptionProductionOrderDataMapper;
  