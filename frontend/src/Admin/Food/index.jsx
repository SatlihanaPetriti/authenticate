import { useState } from 'react';
import { useFoodContext } from '../../Context/FoodContext';
import { Table, Button } from 'react-bootstrap';
import CreateFood from './CreateModal';

const FoodDashboard = () => {
    const [openEdit, setOpenEdit] = useState(false);
    const [openCreate, setCreate] = useState(false);
    const { food } = useFoodContext();

    const handleCreate = () => {
        setCreate(!openCreate);
    }
    const handleEditOpen = () => { }
    const handleDelete = () => { }

    console.log("food---", food);

    return (
        <>
            <h4>Create new element</h4>
            <Button onClick={handleCreate}>Create</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {foods.map((food, index) => {
                        return (
                            <tr key={index}>
                                <td>{food.id}</td>
                                <td>{food.name}</td>
                                <td>{food.description}</td>
                                <td>{food.price}</td>
                                <td><img width={"40px"} height={"40px"} src={`http://localhost:3000/food/uploads/${food.image}`} /></td>
                                <td><Button variant='primary' onClick={handleEditOpen}>Edit</Button> </td>
                                <td><Button variant='danger' onClick={handleDelete}>Delete</Button></td>
                            </tr>
                        )
                    })} */}

                </tbody>
            </Table>

            <CreateFood open={openCreate} close={handleCreate} />
        </>
    );
}

export default FoodDashboard;