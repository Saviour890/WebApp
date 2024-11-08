import React, { useEffect, useState } from 'react';
import "../styles/courses.css"

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:8081/courses');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched courses:', data);
      setCourses(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="courses-page">
      <h1>Available Courses</h1>
      <div className="card-container">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h2>{course.name}</h2>
            <p><strong>University:</strong> {course.university}</p>
            <p><strong>Requirements:</strong> {course.requirements}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
