import { AdaptableOptions, AgGridConfig } from '@adaptabletools/adaptable/types';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { ColDef, GridOptions, Module } from '@ag-grid-community/core';
import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-balham.css';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { SparklinesModule } from '@ag-grid-enterprise/sparklines';
import { GridChartsModule } from '@ag-grid-enterprise/charts';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { SideBarModule } from '@ag-grid-enterprise/side-bar';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';

export const rowData = [
  {
    make: 'Toyota',
    model: 'Celica',
    price: 350,
    year: 2010,
    rating: 1,
    id: 1,
  },
  {
    make: 'Toyota',
    model: 'Yaris',
    price: 10,
    id: 2,
    year: 2011,
    rating: 1,
  },
  {
    make: 'Toyota',
    model: 'Corolla',
    price: 20,
    id: 3,
    year: 2010,
    rating: 2,
  },
  {
    make: 'Ford',
    model: 'Mondeo',
    price: 30,
    id: 4,
    year: 2010,
    rating: 3,
  },
  {
    make: 'Ford',
    model: 'Mondeo',
    price: 40,
    id: 5,
    year: 2017,
    rating: 4,
  },
  {
    make: 'Ford',
    model: 'Focus',
    price: 50,
    id: 6,
    year: 2016,
    rating: 5,
  },
  {
    make: 'Ford',
    model: 'Galaxy',
    price: 60,
    id: 7,
    year: 2017,
    rating: 6,
  },
  {
    make: 'Porsche',
    model: 'Boxter',
    price: 70,
    id: 8,
    year: 2011,
    rating: 7,
  },
  {
    make: 'Porsche',
    model: 'Mission',
    price: 80,
    id: 9,
    year: 2010,
    rating: 8,
  },
  {
    make: 'Mitsubbishi',
    model: 'Outlander',
    price: 90,
    id: 10,
    year: 2011,
    rating: 9,
  },
];

// create AG Grid Column Definitions
const columnDefs: ColDef[] = [
  {
    colId: 'id',
    hide: true,
    suppressColumnsToolPanel: true,
    suppressFiltersToolPanel: true,
  },
  {
    headerName: 'Auto Make',
    field: 'make',
    editable: true,
    filter: true,
    floatingFilter: true,
    sortable: true,
    type: 'abColDefString',
  },
  {
    headerName: 'Model',
    field: 'model',
    editable: true,
    filter: true,
    floatingFilter: true,
    sortable: true,
    type: 'abColDefString',
  },
  {
    headerName: 'Price',
    field: 'price',
    editable: true,
    filter: true,
    floatingFilter: true,
    sortable: true,
    type: 'abColDefNumber',
  },
  {
    headerName: 'Date manufactured',
    field: 'year',
    type: 'abColDefDate',
    filter: true,
    floatingFilter: true,
  },
];

// Build the AdaptableOptions object and set primaryKey and adaptableId
// In this example we are NOT creating any predefined config nor providing any Adaptable Options classes (e.g. filters, entitlements)
// However in the real world you will set up AdapTable Options to fit your requirements and configure your permissions and remote State
// You will also provide Predefined Config so that AdapTable ships for first time use with your required objects
const adaptableOptions: AdaptableOptions = {
  primaryKey: 'id',
  userName: 'support user',
  adaptableId: 'AdapTable Vanilla Support Template',
  predefinedConfig: {},
};

// Create an AG Grid GridOptions object with the Column Definitions and Row Data created above
const gridOptions: GridOptions = {
  columnDefs,
  rowData,
};

// Define the AG Grid Modules required
const modules: Module[] = [
  ClientSideRowModelModule,
  SideBarModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  StatusBarModule,
  MenuModule,
  RangeSelectionModule,
  RichSelectModule,
  ExcelExportModule,
  GridChartsModule,
  SparklinesModule,
  RowGroupingModule,
  ClipboardModule,
];

// Create an AG Grid Config object which contains AG Grid Grid Options and Modules
const agGridConfig: AgGridConfig = {
  modules: modules,
  gridOptions: gridOptions,
};

// Asynchronously instantiate AdapTable with Adaptable Options and AG Grid Config
Adaptable.init(adaptableOptions, agGridConfig).then((api) => {
  console.log(api);
});
