export function optionsDataMasterMaterialStock() {
  return [
    { value: 'transaksi_material_stock_plant', label: 'Plant' },
    { value: 'transaksi_material_stock_material', label: 'Material' },
    { value: 'transaksi_material_stock_batch', label: 'Batch' },
    {
      value: 'transaksi_material_stock_storage',
      label: 'Storage',
    },
    { value: 'unrestricted', label: 'Unrestricted' },
    { value: 'hold_gi', label: 'Hold Gi' },
    { value: 'hold_gr', label: 'Hold Gr' },
    { value: 'wip_gi', label: 'Wip Gi' },
    { value: 'wip_gr', label: 'Wip Gr' },
  ];
}
