export default function Courses() {
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-3">Courses</h1>
  
        <h2 className="font-medium mt-4">Completed</h2>
        <ul className="list-disc list-inside">
          <li>Abstract Algebra</li>
          <li>Linear Algebra I & II</li>
          <li>Machine Learning</li>
          <li>Analysis of Algorithms</li>
          <li>Computer Organization</li>
          <li>Discrete Math II</li>
        </ul>
  
        <h2 className="font-medium mt-4">Currently Taking (Fall 2025)</h2>
        <ul className="list-disc list-inside">
          <li>Real Analysis I</li>
          <li>Probability</li>
          <li>Database Systems</li>
          <li>Computer System Fundamentals</li>
        </ul>
  
        <h2 className="font-medium mt-4">Planned</h2>
        <ul className="list-disc list-inside">
          <li>Topology</li>
          <li>Abstract Algebra II</li>
          <li>Functional Analysis</li>
        </ul>
      </div>
    );
  }