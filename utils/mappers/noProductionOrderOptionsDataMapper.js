const noProductionOrderOptionsDataMapper = {
  toLocal: (options) =>
    options.map((opsi) => ({
      value: opsi.no_pd,
    })),
};

export default noProductionOrderOptionsDataMapper;
