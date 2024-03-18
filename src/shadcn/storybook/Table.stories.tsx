import { ListGroup } from 'react-bootstrap';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Slots,
  Slot,
  Navbar,
  Alert,
  Conveyor,
  TableBody,
  useData,
  Lenses,
  Lens,
  TableRowState,
  Table,
} from '@/index';
import { Button } from '../components/ui/button';


const meta = {
  title: 'shadcn/components/Table',
  component: Slots,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    slotKeys: ['slot1', 'slot2', 'slot3'],
    children: (
      <>
        <Slot slotKey='slot1'>
          <ListGroup.Item>It's </ListGroup.Item>
        </Slot>
        <Slot slotKey='slot2'>
          <ListGroup.Item>a </ListGroup.Item>
        </Slot>
        <Slot slotKey='slot3'>
          <ListGroup.Item>Beaver!</ListGroup.Item>
        </Slot>
        <Slot slotKey='secret-slot'>
          <ListGroup.Item>Or is it?!</ListGroup.Item>
        </Slot>
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  render: (props) => (
    <div>
      <Slots {...props} />
    </div>
  ),
} satisfies Meta<typeof Slots>;

export default meta;
type Story = StoryObj<typeof meta>;


const DemoCell = () => {
  const { data } = useData();
  return (
    <>
      <Lens lens={TableRowState.VALUE}>{data.hello} monkey</Lens>
      <Lens lens={TableRowState.EDIT}>noinput</Lens>
    </>
  );
};

export const TableTest: Story = {
  args: {
    children: (
      <>
      <Navbar modelNames={['hello']}/>
        {/* <Navbar modelNames={['hello']}/> */}
        <Table
          fields={['hello', 'world']}
          data={[
            { hello: 'hello', world: 'world' },
            { hello: 'hellow', world: 'wurld' },
          ]}
          actionsConfig={{ showActions: true }}
        >
          <Table.Body>
            <Table.Row>
              <td>
                <DemoCell />
              </td>
            </Table.Row>
          </Table.Body>
        </Table>
        <div>
        <Button onClick={(e)=> console.log('clicked')} variant='ghost'>{'Button'}</Button>
        <Button onClick={(e)=> console.log('clicked 2')} variant='destructive'>{'Button'}</Button>
        </div>
      </>
    ),
  },
};
