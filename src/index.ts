import { AdaptableOptions, AgGridConfig } from '@adaptabletools/adaptable-cjs/types';
import Adaptable from '@adaptabletools/adaptable-cjs/agGrid';
import { GridOptions } from 'ag-grid-enterprise';

import 'ag-grid-enterprise/styles/ag-grid.css';
import 'ag-grid-enterprise/styles/ag-theme-alpine.css';
import '@adaptabletools/adaptable-cjs/base.css';
import '@adaptabletools/adaptable-cjs/themes/light.css';
import '@adaptabletools/adaptable-cjs/themes/dark.css';

import { columnDefs, defaultColDef } from './columnDefs';
import { rowData } from './rowData';

import { agGridModules } from './agGridModules';

// Build the AdaptableOptions object and set primaryKey and adaptableId
// In this example we are NOT creating any Initial State (other than mandatory Layout) nor providing any Adaptable Options classes (e.g. filters, entitlements)
// However in the real world you will set up AdapTable Options to fit your requirements and configure your permissions and remote State
const adaptableOptions: AdaptableOptions = {
  primaryKey: 'id',
  userName: 'support user',
  adaptableId: 'AdapTable Support Template - CJS',
  initialState: {
    Dashboard: {
      Tabs: [
        {
          Name: 'Welcome',
          Toolbars: ['Layout'],
        },
      ],
    },
    StatusBar: {
      StatusBars: [
        {
          Key: 'Center Panel',
          StatusBarPanels: ['Theme'],
        },
      ],
    },
    Layout: {
      CurrentLayout: 'Standard Layout',
      Layouts: [
        {
          Name: 'Standard Layout',
          TableColumns: [
            'name',
            'language',
            'github_stars',
            'license',
            'created_at',
            'has_wiki',
            'updated_at',
            'pushed_at',
            'github_watchers',
            'open_issues_count',
            'closed_issues_count',
            'open_pr_count',
            'closed_pr_count',
            'description',
            'has_projects',
            'has_pages',
            'week_issue_change',
          ],
        },
      ],
    },
  },
};

// Create an AG Grid GridOptions object with the Column Definitions and Row Data created above
const gridOptions: GridOptions = {
  theme: 'legacy',
  defaultColDef,
  columnDefs,
  rowData,
};

// Create an AG Grid Config object which contains AG Grid's GridOptions object
// Because this is CJS we pass in an empty array for the modules peroperty
const agGridConfig: AgGridConfig = {
  modules: agGridModules,
  gridOptions,
};

// Asynchronously instantiate AdapTable with Adaptable Options and AG Grid Config
Adaptable.init(adaptableOptions, agGridConfig).then((api) => {
  console.log('AdapTable ready!');
});
