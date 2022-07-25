import Table from 'react-bootstrap/Table';
import './header.css'
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