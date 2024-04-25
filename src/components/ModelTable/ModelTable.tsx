import { memo, FC, useContext, useMemo } from 'react';
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from '../../shadcn/components/ui/table';

import { ConveyorContext } from '../../contexts/ConveyorContext';
import { PACKAGE_ABBR } from '../../package';
import { BaseProps, FieldData } from '../../types';

import ModelTableHeader from './ModelTableHeader';
import ModelTableRow from './ModelTableRow';

interface ModelTableProps extends BaseProps {
  modelName: string;
  fields: string[];
  dataList?: Record<string, any>[];
  fieldsData?: Record<string, FieldData>;
  editable?: boolean;
  deletable?: boolean;
}

const ModelTable = ({
  id,
  className,
  modelName,
  fields,
  dataList = [],
  fieldsData,
  editable = true,
  deletable = true,
}: ModelTableProps) => {
  const showCrud = editable || deletable;
  const memoDataList = useMemo(() => dataList, [JSON.stringify(dataList)]);
  const { primaryKey } = useContext(ConveyorContext);
  return (
    <Table id={id} className={className}>
      <TableHeader id={id} className={className}>
        <TableRow>
          {fields.map((field) => {
            const displayLabelFn = fieldsData?.[field]?.displayLabelFn;
            return (
              <ModelTableHeader
                key={`${PACKAGE_ABBR}-table-header-${field}}`}
                modelName={modelName}
                field={field}
                displayLabelFn={displayLabelFn}
              />
            );
          })}
          {showCrud && <TableHead className={`${PACKAGE_ABBR}-crud-header`} />}
        </TableRow>
      </TableHeader>
      <TableBody id={id} className={className}>
        {memoDataList.map((rowData) => {
          return (
            <ModelTableRow
              key={`${PACKAGE_ABBR}-table-row-${rowData[primaryKey]}`}
              modelName={modelName}
              fields={fields}
              data={rowData}
              fieldsData={fieldsData}
              editable={editable}
              deletable={deletable}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};

export default memo(ModelTable) as FC<ModelTableProps>;
