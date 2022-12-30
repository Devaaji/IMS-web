const materialDescriptionOptionsDataMapper = {
  toLocal: (options) =>
    options.map((opsi) => ({
      label: opsi.description,
      value: opsi.description,
    })),
};

export default materialDescriptionOptionsDataMapper;
