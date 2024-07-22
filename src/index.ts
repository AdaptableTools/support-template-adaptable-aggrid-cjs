import { AdaptableOptions, AgGridConfig } from '@adaptabletools/adaptable-cjs/types';
import Adaptable from '@adaptabletools/adaptable-cjs/agGrid';
import { GridOptions } from 'ag-grid-community';

import { columnDefs, defaultColDef } from './columnDefs';
import { rowData } from './rowData';

// Build the AdaptableOptions object and set primaryKey and adaptableId
// In this example we are NOT creating any predefined config nor providing any Adaptable Options classes (e.g. filters, entitlements)
// However in the real world you will set up AdapTable Options to fit your requirements and configure your permissions and remote State
// You will also provide Predefined Config so that AdapTable ships for first time use with your required objects
const adaptableOptions: AdaptableOptions = {
  primaryKey: 'id',
  userName: 'support user',
  adaptableId: 'AdapTable Vanilla Support Template',
  predefinedConfig: {},
  userInterfaceOptions: {
    editLookUpItems: [
      {
        scope: { ColumnIds: ['language'] },
      },
    ],
  },
};

// Create an AG Grid GridOptions object with the Column Definitions and Row Data created above
const gridOptions: GridOptions = {
  defaultColDef,
  columnDefs,
  rowData,
};

// Create an AG Grid Config object which contains AG Grid Grid Options and Modules
const agGridConfig: AgGridConfig = {
  modules: [],
  gridOptions,
};

// Asynchronously instantiate AdapTable with Adaptable Options and AG Grid Config
Adaptable.init(adaptableOptions, agGridConfig).then((api) => {
  console.log('AdapTable ready!');
});
