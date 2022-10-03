import { AdaptableOptions } from '@adaptabletools/adaptable/types';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { ColDef, Module } from '@ag-grid-community/core';

import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';

import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/core/dist/styles/ag-theme-balham-dark.css';
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

export const columnDefs: ColDef[] = [
  {
    field: 'make',
    editable: true,
    type: 'abColDefString',
  },
  {
    field: 'model',
    editable: true,
    type: 'abColDefString',
  },
  {
    field: 'id',
    editable: true,
    type: 'abColDefNumber',
  },
  {
    field: 'year',
    editable: true,
    type: 'abColDefNumber',
  },
  {
    field: 'rating',
    editable: true,
    type: 'abColDefNumber',
  },
  {
    field: 'price',
    editable: true,
    type: 'abColDefNumber',
  },
];

const agGridModules: Module[] = [
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

const adaptableOptions: AdaptableOptions = {
  primaryKey: 'id',
  predefinedConfig: {
    Dashboard: {
      Tabs: [
        {
          Name: 'primary',
          Toolbars: ['Layout', 'Alert', 'QuerySearch'],
        },
      ],
    },
    Shortcut: {
      Shortcuts: [
        {
          Scope: {
            ColumnIds: ['price'],
          },
          ShortcutKey: 'A',
          ShortcutValue: 10,
          ShortcutOperation: 'Multiply',
        },
      ],
    },
  },
  gridOptions: {
    columnDefs,
    rowData,
  },
};

Adaptable.init(adaptableOptions, { agGridModules }).then((api) => {
  console.log(api, '!!!');
});
