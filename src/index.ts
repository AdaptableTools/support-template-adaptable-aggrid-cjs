import { AdaptableOptions } from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { ColDef } from '@ag-grid-community/all-modules';

import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';

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
  vendorGrid: {
    columnDefs,
    rowData,
    modules: AllEnterpriseModules,
  },
};

Adaptable.init(adaptableOptions).then((api) => {
  console.log(api, '!!!');
});
