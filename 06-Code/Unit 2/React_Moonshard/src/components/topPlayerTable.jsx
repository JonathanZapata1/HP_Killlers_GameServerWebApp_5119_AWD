import Table from 'react-bootstrap/Table';

<<<<<<< HEAD:06-Code/Unit 2/React_Moonshard/src/components/topPlayerTable.jsx
import '../assets/css/components/topPlayerTable.css';

=======
>>>>>>> d4fb267b4063c7177b1373f0c4930d0e4dde2bf1:06-Code/Unit 2/React_Moonshard/src/components/sections/topPlayerTable.js
function DarkExample() {
  return (
    <div className='top-table' >
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Christopher</td>
          <td>Yepez</td>
          <td>@cristo777</td>
        </tr>
        <tr>
          <td>4</td>
          <td >Sebas</td>
          <td>Yanzapanta</td>
          <td>@yobs99</td>
        </tr>
        <tr>
          <td>5</td>
          <td >...</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>6</td>
          <td >...</td>
          <td>...</td>
          <td>...</td>
        </tr>

      </tbody>
    </Table>
    </div>
  );
}

export default DarkExample;