import { ListGroup } from 'react-bootstrap';
import type { Meta, StoryObj } from '@storybook/react';
import { FaRegTrashAlt, FaEdit, FaSearch } from 'react-icons/fa';
import "../components/Container/container.css"
import {
  Slots,
  Slot,
  Navbar,
  Conveyor,
  useData,
  Lenses,
  Lens,
} from '@/index';
import Button from '../components/Button/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../components/HoverCard/hover-card';
import { Card, CardContent, CardDescription, CardField, CardHeader, CardTitle, Deck } from '../components/Cards/card';
import { Dialog, DialogClose, DialogDescription, DialogTrigger, DialogTitle, DialogPortal, DialogOverlay, DialogFooter, DialogContent, DialogHeader } from '../components/Dialog/dialog';
import React from 'react';
import { PaginationContent, Pagination, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../components/Pagination/pagination';
import { Popover, PopoverContent, PopoverTrigger } from '../components/Popover/popover';
import { Textarea } from '../components/TextArea/textarea'
import {Table, TableBody, TableHeader, TableHead, TableRow, TableCell, TableCaption} from '../components/Table/table';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../components/NavigationMenu/navigation-menu';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '../components/MenuBar/menubar';
import { Input, Inputs, Label } from '../components/Inputs/inputs';
import { Alert, AlertTitle, AlertDescription } from '../components/Alert/alert';
import Container from '../components/Container/container';

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

const obj=`
{
  timeMachine: 
  {
    time: 'Date'
    name: 'string
  }
}
`


export const TableTest: Story = {
  args: {
    children: (
      <Container>
      <Deck>
      <Card>
              <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardDescription>Description</CardDescription>
              </CardHeader>
              <CardContent>
                <CardField>Additional content goes here</CardField>
                <CardField>Additional content goes here</CardField>
              <CardField>Additional content goes here</CardField>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle</CardTitle>
              </CardHeader>
              <CardContent>
              <CardField>{obj}{obj}</CardField>
              <CardField>Additional content goes here</CardField>
              <CardField>Additional content goes here</CardField>
              </CardContent>
            </Card>
            <Card>
            <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardDescription>Description</CardDescription>
              </CardHeader>
              <CardContent>
                <CardField>Additional content goes here</CardField>
                <CardField>Additional content goes here</CardField>
                <CardField>Additional content goes here</CardField>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardDescription>Description</CardDescription>
              </CardHeader>
              <CardContent>
              <CardField>Additional content goes here</CardField>
              <CardField>Additional content goes here</CardField>
              <CardField>Additional content goes here</CardField>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardDescription>Description</CardDescription>
              </CardHeader>
              <CardContent>
                <CardField>Additional content goes here</CardField>
                <CardField>Additional content goes here</CardField>
              <CardField>Additional content goes here</CardField>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle</CardTitle>
              </CardHeader>
              <CardContent>
              <CardField>{obj}{obj}</CardField>
              <CardField>Additional content goes here</CardField>
              <CardField>Additional content goes here</CardField>
              </CardContent>
            </Card>
            <Card>
            <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardDescription>Description</CardDescription>
              </CardHeader>
              <CardContent>
                <CardField>Additional content goes here</CardField>
                <CardField>Additional content goes here</CardField>
                <CardField>Additional content goes here</CardField>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardDescription>Description</CardDescription>
              </CardHeader>
              <CardContent>
              <CardField>Additional content goes here</CardField>
              <CardField>Additional content goes here</CardField>
              <CardField>Additional content goes here</CardField>
              </CardContent>
            </Card>
            </Deck>
        <Navbar modelNames={['hello']}/>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead className='isolated-column-middle'>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>INV001</TableCell>
              <TableCell className='isolated-column-middle'>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>$250.00</TableCell>
            </TableRow>
          </TableBody>
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
        <Inputs>
          <Input placeholder='search' className='input-left'/>
          <Label className='right-label'>search</Label>
        </Inputs>
        <Inputs>
          <Label className='left-label'>Date</Label>
          <Input className='input-middle' type='datetime-local'/>
          <Label className='right-label'>Picker</Label>
        </Inputs>
        <Inputs>
          <Input placeholder='example.example' className='input-left' type='email'/>
          <Label className='right-label'>@moesol.com</Label>
        </Inputs>
        <Inputs>
          <Label className='left-label'>Number</Label>
          <Input className='input-right' type='number'/>
        </Inputs>
        <Input className='input-alone'/>
        <Input className='input-alone'/>
        <Input className='input-alone'/>
        <Input className='input-alone'/>
        <Textarea/>
        <Inputs className='search-inputs'>
          <Input className='search-input' placeholder='Search...'/>
          <Label onClick={(e) => console.log("searched")} className='search-label'><FaSearch/></Label>
        </Inputs>
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert variant='destructive'>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert variant='success'>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <Pagination>
            <PaginationPrevious/>
            <PaginationItem>1</PaginationItem>
            <PaginationItem>2</PaginationItem>
            <PaginationNext/>
        </Pagination>
      </div>
    </Container>
    ),
  },
};
