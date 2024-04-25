import { memo, FC, ReactNode, useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

import { Page } from '../../enums';
import { useTableView } from '../../hooks/useTableView';
import { PACKAGE_ABBR } from '../../package';
import { DEFAULT_TABLE_VIEW } from '../../reducers/tableViewsReducer';
import { BaseProps, FieldData } from '../../types';
import { humanizeText } from '../../utils/common';
import ModelNav from '../ModelNav';

import ModelIndexTable from './ModelIndexTable';

import ModelTable from '../../aaconveyor/components/ModelTable';
import ModelTableBody from '../../aaconveyor/components/ModelTableBody';
import ModelTableRow from '../../aaconveyor/components/ModelTableRow';
import ModelTableCell from '../../aaconveyor/components/ModelTableCell';
import { SetSlotsContext } from '../../aaconveyor/contexts/SlotsContext';
import { useFormContext } from 'react-hook-form';
import ModelTableHead from '../../aaconveyor/components/ModelTableHead';
import ModelTableHeader from '../../aaconveyor/components/ModelTableHeader';
import { ModelTableProvider } from '../../aaconveyor/contexts/ModelTableContext';
import Conveyor from '../../aaadmin/components/Conveyor';

interface ModelIndexProps extends BaseProps {
  modelName: string;
  fields: string[];
  title?: string | JSX.Element;
  fieldsData?: Record<string, FieldData>;
  editable?: boolean;
  deletable?: boolean;
  children?: ReactNode;
}

const ModelIndex = ({
  id,
  className,
  modelName,
  fields,
  title = humanizeText(modelName),
  fieldsData,
  editable = true,
  deletable = true,
  children,
}: ModelIndexProps) => {
  // Will save onto some storage and retrieve the tableView in the future
  useTableView({
    modelName,
    tableView: JSON.parse(JSON.stringify(DEFAULT_TABLE_VIEW)),
  });

  return <Conveyor />;
  // return (
  //   <Container id={id} className={className}>
  //     <ModelTableProvider data={x} fields={fieldss}>
  // <ModelTable data={x} fields={fieldss}>
  //   <ModelTableHead>
  //     <ModelTableHeader field={'datetimeField'}>
  //       tis the time
  //     </ModelTableHeader>
  //   </ModelTableHead>
  //   <ModelTableBody>
  //     <ModelTableRow>
  //       <ModelTableCell field={'intField'}>Nooo way</ModelTableCell>
  //       <ModelTableCell field={'intField'}>Hmmm</ModelTableCell>
  //       <ModelTableCell field={'goodbye'}>Byeee</ModelTableCell>
  //       <ModelTableCell field={'hello'}>
  //         <Hello x={setFields} />
  //       </ModelTableCell>
  //     </ModelTableRow>
  //   </ModelTableBody>
  // </ModelTable>
  //     </ModelTableProvider>
  //   </Container>
  // );
  // return (
  //   <Container id={id} className={className}>
  //     {children ?? (
  //       <>
  //         <div id={id} className={`${PACKAGE_ABBR}-model-title`}>
  //           <h2>{title}</h2>
  //           {/* TODO: Filter under construction */}
  //           <ModelNav modelName={modelName} modelId={Page.CREATE}>
  //             <Button>Create</Button>
  //           </ModelNav>
  //         </div>
  //         <ModelIndexTable
  //           modelName={modelName}
  //           fields={fields}
  //           fieldsData={fieldsData}
  //           editable={editable}
  //           deletable={deletable}
  //         />
  //       </>
  //     )}
  //   </Container>
  // );
};

export default memo(ModelIndex) as FC<ModelIndexProps>;

const Hello = (props: any) => {
  const stc = useContext(SetSlotsContext);

  return (
    <Button
      onClick={() => {
        // props.x((original: any) => original.slice(1))
        stc((prev) => {
          return { ...prev, intField: <td>'Yessir'</td> };
        });
      }}
    >
      YEP
    </Button>
  );
};