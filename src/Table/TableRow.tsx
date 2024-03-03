import { ReactNode, useContext, useState } from 'react';

import { FieldValue } from '@/ModelValue'
import { Slots } from '@/Slots'
import { BaseComponentProps } from '@/types';
import { getFieldName } from '@/utils';

import { TableCell } from './TableCell'
import { TableContext } from './TableContext';

export interface TableRowProps extends BaseComponentProps {
    children?: ReactNode;
}

export const TableRow = ({ children, id, className, style }: TableRowProps) => {
    const { fields } = useContext(TableContext);
    const fieldNames = fields.map((field) => getFieldName(field));
    return (
        <tr id={id} className={className} style={style}>
            <Slots slotKeys={fieldNames}>
                {fields.map((field, index) => (
                    <TableCell key={index} field={field}>
                        <FieldValue field={field} />
                    </TableCell>
                ))}
                {children}
            </Slots>
        </tr>
    );
};
