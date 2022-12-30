const materialGroupOptionsDataMapper = {
  toLocal: (options) =>
    options.map((opsi) => ({
      label: opsi.master_material_group_code,
      value: opsi.master_material_group_code,
    })),
};

export default materialGroupOptionsDataMapper;
