import { EventEmitter } from '@stencil/core';
import {
  ModusTableColumn,
  ModusTableDisplayOptions,
  ModusTableRowAction,
  ModusTableRowSelectionOptions,
  ModusTableToolbarOptions,
  ModusTableCellValueChange,
  ModusTableCellLink,
  ModusTableColumnOrderState,
  ModusTableColumnSizingState,
  ModusTableColumnVisibilityState,
  ModusTableRowActionClick,
  ModusTableExpandedState,
  ModusTableSortingState,
  ModusTablePaginationState,
} from './modus-table.models';
import { Table, Updater } from '@tanstack/table-core';
import ModusTableCore from '../modus-table.core';
import Position from './position.model';

export interface TableRowActionsMenuEvent {
  items: ModusTableRowAction[];
  position: Position;
  row: unknown;
}

export type TableCellEdited = Omit<ModusTableCellValueChange, 'data'>;

export default interface TableContext {
  element: HTMLElement;

  columns: ModusTableColumn<unknown>[];

  columnResize: boolean;

  columnReorder: boolean;

  data: unknown[];

  displayOptions?: ModusTableDisplayOptions;

  hover: boolean;

  fullWidth: boolean;

  maxHeight: string;

  maxWidth: string;

  pageSizeList: number[];

  pagination: boolean;

  rowActions: ModusTableRowAction[];

  rowsExpandable: boolean;

  rowSelection: boolean;

  rowSelectionOptions: ModusTableRowSelectionOptions;

  showSortIconOnHover: boolean;

  sort: boolean;

  summaryRow: boolean;

  toolbar: boolean;

  toolbarOptions: ModusTableToolbarOptions | null;

  cellValueChange: EventEmitter<ModusTableCellValueChange>;

  cellLinkClick: EventEmitter<ModusTableCellLink>;

  columnOrderChange: EventEmitter<ModusTableColumnOrderState>;

  columnSizingChange: EventEmitter<ModusTableColumnSizingState>;

  columnVisibilityChange: EventEmitter<ModusTableColumnVisibilityState>;

  rowActionClick: EventEmitter<ModusTableRowActionClick>;

  rowExpanded: EventEmitter<ModusTableExpandedState>;

  rowSelectionChange: EventEmitter<unknown>;

  sortChange: EventEmitter<ModusTableSortingState>;

  paginationChange: EventEmitter<ModusTablePaginationState>;

  componentId: string;

  frozenColumns: string[];

  isColumnResizing: boolean;

  tableInstance: Table<unknown>;

  tableCore: ModusTableCore;

  updateData: (updater: Updater<unknown>, context: TableCellEdited) => void;
  onColumnsChange: (newVal: ModusTableColumn<unknown>[]) => void;
  onColumnResizeChange: (newVal: boolean) => void;
  onColumnReorderChange: () => void;
  onDataChange: (newVal: unknown[]) => void;
  onRowActionsChange: (newVal: ModusTableRowAction[]) => void;
  onRowsExpandableChange: (newVal: boolean) => void;
  onRowSelectionOptionsChange: (newVal: ModusTableRowSelectionOptions, oldVal: ModusTableRowSelectionOptions) => void;
  onSortChange: (newVal) => void;
  onToolbarOptionsChange: (newVal: ModusTableToolbarOptions | null) => void;
}