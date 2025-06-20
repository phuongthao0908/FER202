import React, { useReducer, useState } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";

// Reducer function
function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.item],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.newName } : item
        ),
      };
    case "SORT_ITEMS":
      const sorted = [...state.items].sort((a, b) =>
        action.by === "name"
          ? a.name.localeCompare(b.name)
          : a.id - b.id // time = id (Date.now)
      );
      return {
        ...state,
        items: sorted,
        sortBy: action.by,
      };
    default:
      return state;
  }
}

// Initial state
const initialState = {
  items: [],
  sortBy: "none", // 'name' | 'time'
};

export default function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const { items, sortBy } = state;

  const [newItemName, setNewItemName] = useState("");
  const [filter, setFilter] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = {
        id: Date.now(),
        name: newItemName.trim(),
      };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleSort = (type) => {
    dispatch({ type: "SORT_ITEMS", by: type });
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="offset-md-3">
          <Form className="mb-3">
            <Form.Group controlId="formItem">
              <Form.Label>Enter Item:</Form.Label>
              <Form.Control
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddItem} className="mt-2">
              Add Item
            </Button>
          </Form>

          <Form.Control
            placeholder="Search item"
            className="mb-3"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />

          <div className="mb-3">
            <Button
              variant={sortBy === "name" ? "dark" : "secondary"}
              className="me-2"
              onClick={() => handleSort("name")}
            >
              Sort A-Z
            </Button>
            <Button
              variant={sortBy === "time" ? "dark" : "secondary"}
              onClick={() => handleSort("time")}
            >
              Sort by Time
            </Button>
          </div>

          <h5>Item List</h5>
          <ListGroup>
            {items
              .filter((item) =>
                item.name.toLowerCase().includes(filter.toLowerCase())
              )
              .map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  {editingId === item.id ? (
                    <>
                      <Form.Control
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        size="sm"
                        className="me-2"
                      />
                      <div className="d-flex gap-2">
                        <Button
                          variant="success"
                          size="sm"
                          onClick={() => {
                            dispatch({
                              type: "EDIT_ITEM",
                              id: item.id,
                              newName: editedName,
                            });
                            setEditingId(null);
                          }}
                        >
                          Save
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      {item.name}
                      <div className="d-flex gap-2">
                        <Button
                          variant="warning"
                          size="sm"
                          onClick={() => {
                            setEditingId(item.id);
                            setEditedName(item.name);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </>
                  )}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
