import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState([]);
  useEffect(() => {
    //    fetch('https://jsonplaceholder.typicode.com/photos')
        fetch('http://localhost:8080/rest/api')
      .then((response) => response.json())
      .then((json) => setStudents(json));
  }, []);
  useEffect(() => {
    //    fetch('https://jsonplaceholder.typicode.com/photos')
        fetch('http://localhost:8080/rest/api/1')
      .then((response) => response.json())
      .then((json) => setStudent(json));
  }, []);

  return (
    <div>
      <h1>students</h1>
      <table>
        <thead>
          <tr>
            <th>studentId</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {students.map((photo) => (
            <tr key={photo.studentId}>
              <td>{photo.studentId}</td>
              <td>{photo.firstName}</td>
              <td>{photo.lastName}</td>
              <td>{photo.email}</td>
              <td>{photo.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
         <h1>student id 1</h1>
      <table>
        <thead>
          <tr>
            <th>studentId</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
            <tr key={student.studentId}>
              <td>{student.studentId}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
