import { useEffect, useState } from 'react';
import { BaseProps } from '../../types';
import { Button, Modal } from 'react-bootstrap';
import { TableViewsAction } from '../../reducers/tableViewsReducer';
import { FaPlus } from 'react-icons/fa';

interface ModelIndexTableFilterProps extends BaseProps {
  modelName: string;
  fields: string[];
  filters: any[];
  setFilters: any;
  dispatch: any;
}

const ModelIndexTableFilter = ({
  modelName,
  fields,
  filters,
  setFilters,
  dispatch,
}: ModelIndexTableFilterProps) => {
  const [currentFilter, setCurrentFilter] = useState({
    field: fields[0] || '',
    operator: '==', // Default operator, adjust as needed
    value: '',
    not: false,
  });
  const [currentFilterOR, setCurrentFilterOR] = useState({
    field: fields[0] || '',
    operator: '==', // Default operator, adjust as needed
    value: '',
    not: false,
  });

  useEffect(() => {
    // Dispatch INIT_FILTERS action when the component mounts
    dispatch({
      type: TableViewsAction.INIT,
      payload: { modelName, filters },
    });
  }, []);

  const addFilter = () => {
    const newFilter1 = { ...currentFilter };
    const newFilter2 = { ...currentFilterOR };

    dispatch({
      type: TableViewsAction.ADD_FILTER,
      payload: {
        modelName,
        filter1: newFilter1,
        filter2: newFilter2,
      },
    });

    setFilters([
      ...filters,
      { filter1: newFilter1, filter2: newFilter2, modelName },
    ]);
    setCurrentFilter({
      field: fields[0] || '',
      operator: '==',
      value: '',
      not: false,
    });
    setCurrentFilterOR({
      field: fields[0] || '',
      operator: '==',
      value: '',
      not: false,
    });
    setHideOR(true);
  };

  const removeFilters = () => {
    // Dispatch REMOVE_FILTER action when a filter is removed
    dispatch({
      type: TableViewsAction.REMOVE_FILTER,
      payload: { modelName },
    });
    setFilters([]);
  };

  const [showModal, setShowModal] = useState(false);
  const [hideOR, setHideOR] = useState(true);

  return (
    <div className='conv-filters'>
      <Button
        title='Filter'
        variant='primary'
        onClick={() => setShowModal(true)}
      >
        Filters
      </Button>
      {/* Button to open the modal */}
      {/* Modal component */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Filter: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*Filters*/}
          <select
            value={currentFilter.field}
            onChange={(e) =>
              setCurrentFilter({ ...currentFilter, field: e.target.value })
            }
          >
            {fields.map((field, index) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <option key={index} value={field}>
                {field}
              </option>
            ))}
          </select>

          <label>
            Not
            <input
              id='Not'
              type='checkbox'
              className='not-checkbox'
              checked={currentFilter.not}
              onChange={(e) =>
                setCurrentFilter({ ...currentFilter, not: e.target.checked })
              }
            />
          </label>
          <select
            value={currentFilter.operator}
            onChange={(e) =>
              setCurrentFilter({ ...currentFilter, operator: e.target.value })
            }
          >
            {/* Add your list of operators here */}
            <option value='=='>Equals</option>
            <option value='!='>Not Equal</option>
            <option value='>'>Greater Than</option>
            <option value='<'>Less Than</option>
            <option value=' contains '>Contains</option>

            {/* Add more operators as needed */}
          </select>

          <input
            type='input'
            className='filter-bar'
            value={currentFilter.value}
            onChange={(e) =>
              setCurrentFilter({ ...currentFilter, value: e.target.value })
            }
          />
        </Modal.Body>
        <span hidden={hideOR} className='ms-1'>
          {/*Filters*/}
          OR
          <select
            className='ms-1'
            value={currentFilterOR.field}
            onChange={(e) =>
              setCurrentFilterOR({ ...currentFilterOR, field: e.target.value })
            }
          >
            {fields.map((field, index) => (
              // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <option key={index} value={field}>
                {field}
              </option>
            ))}
          </select>
          <label>
            Not
            <input
              id='Not'
              type='checkbox'
              className='not-checkbox'
              checked={currentFilterOR.not}
              onChange={(e) =>
                setCurrentFilterOR({
                  ...currentFilterOR,
                  not: e.target.checked,
                })
              }
            />
          </label>
          <select
            value={currentFilterOR.operator}
            onChange={(e) =>
              setCurrentFilterOR({
                ...currentFilterOR,
                operator: e.target.value,
              })
            }
          >
            {/* Add your list of operators here */}
            <option value='=='>Equals</option>
            <option value='!='>Not Equal</option>
            <option value='>'>Greater Than</option>
            <option value='<'>Less Than</option>
            <option value=' contains '>Contains</option>

            {/* Add more operators as needed */}
          </select>
          <input
            type='input'
            className='filter-bar'
            value={currentFilterOR.value}
            onChange={(e) =>
              setCurrentFilterOR({ ...currentFilterOR, value: e.target.value })
            }
          />
        </span>
        <Modal.Body>
          Active Filters:
          {/* List of active filters: */}
          {filters.map((filter, index) => (
            // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={index}>
              {filter.filter1.field}
              {filter.filter1.not && <> {'NOT'} </>}
              {filter.filter1.operator}
              {filter.filter1.value}
              {filter.filter2.value && (
                <>
                  OR
                  {filter.filter2.field}
                  {filter.filter2.not && <> {'NOT'} </>}
                  {filter.filter2.operator}
                  {filter.filter2.value}
                </>
              )}
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          {/* "Add Filter" and "Reset Filters" buttons here */}
          <Button
            type='button'
            variant='primary'
            onClick={() => setHideOR(false)}
          >
            OR Group
          </Button>
          <Button type='button' variant='success' onClick={addFilter}>
            Add Filter
          </Button>
          <Button variant='warning' type='button' onClick={removeFilters}>
            Reset Filters
          </Button>
          <Button variant='secondary' onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModelIndexTableFilter;
