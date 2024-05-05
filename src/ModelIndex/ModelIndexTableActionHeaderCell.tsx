import { TableHeaderCell, TableHeaderCellProps } from '@/Table';

import { ACTION_SLOT } from './constants';
import { twMerge } from 'tailwind-merge';

export interface ModelIndexTableActionHeaderCellProps
  extends Omit<TableHeaderCellProps, 'columnId'> {}

export const ModelIndexTableActionHeaderCell = ({
  children,
  className,
  ...props
}: ModelIndexTableActionHeaderCellProps) => {
  return <TableHeaderCell className={twMerge('block mx-12', className)} columnId={ACTION_SLOT} {...props}>{children === undefined ? null : children}</TableHeaderCell>;
};
