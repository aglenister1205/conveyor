import { ListGroup } from 'react-bootstrap';
import type { Meta, StoryObj } from '@storybook/react';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';
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
import Button from '../components/ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../components/ui/hover-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Dialog, DialogClose, DialogDescription, DialogTrigger, DialogTitle, DialogPortal, DialogOverlay, DialogFooter, DialogContent, DialogHeader } from '../components/ui/dialog';
import React from 'react';
import { PaginationContent, Pagination, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../components/ui/pagination';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Textarea } from '../components/ui/textarea';


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
        {/*<Navbar modelNames={['hello']}/>*/}
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
        <Button onClick={(e)=> console.log('clicked')} position='left-edge' variant='outline-primary'>{<FaEdit/>}</Button>
        <Button onClick={(e)=> console.log('clicked 2')} position='right-edge' variant='outline-destructive'>{<FaRegTrashAlt/>}</Button>
        <HoverCard>
          <HoverCardTrigger>
            <Button variant='link'>{'Task 1'}</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <Card>
              <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardDescription>Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Additional content goes here</p>
              </CardContent>
            </Card>
          </HoverCardContent>
        </HoverCard>
        <Dialog>
          <DialogTrigger>
            Open Dialog
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>This is the dialog box Demo</DialogTitle>
              <DialogDescription>
                This is where the components within the dialog box will be displayed
              </DialogDescription>
            </DialogHeader>
            <DialogClose/>
          </DialogContent>
        </Dialog>
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
        <Textarea/>
        </div>
      </>
    ),
  },
};