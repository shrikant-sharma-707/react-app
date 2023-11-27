import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/findAllStudent`)
      .then((response) => response.json())
      .then((json) => setStudents(json));
  }, []);

  return (
    <div>
      <h1>student List</h1>
      <table>
        <thead>
          <tr>
            <th>rollNo</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>phoneNumber</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNo}>
              <td>{student.rollNo}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
