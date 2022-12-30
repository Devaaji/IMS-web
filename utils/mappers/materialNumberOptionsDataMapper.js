const materialNumberOptionsDataMapper = {
  toLocal: (options) =>
    options.map((opsi) => ({
      label: opsi.master_material_code,
      value: opsi.master_material_code,
    })),
};

export default materialNumberOptionsDataMapper;
