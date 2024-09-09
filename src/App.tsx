import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function goToLinkedIn() {
    window.location.href = "https://www.linkedin.com/in/andrew-muse/";
  }

  function goToFacebook() {
    window.location.href = "https://www.facebook.com/andrew.muse.9";
  }

  function goToGitHub() {
    window.location.href = "https://github.com/Amuse93";
  }

  return (
    <main>
      <h1>Andrew Muse</h1>
      <br />
      <p>
        Experienced IT Support Specialist with a strong track record in managing IT operations and driving user satisfaction. 
        Proven ability to develop and implement standard operating procedures to streamline incident resolution, 
        along with delivering in-depth training to both technical teams and end-users. Skilled in logistical coordination, 
        including network configurations and relocations, ensuring smooth business continuity. Proficient in Active Directory management, 
        incident ticket tracking, and hands-on troubleshooting of hardware and networking issues. Adept in Python, Java, 
        web development, and Windows Server administration, bringing a combination of technical expertise and customer-focused solutions 
        to enhance IT support services.
      </p>
      <br />
      <button onClick={goToLinkedIn}>LinkedIn</button>
      <button onClick={goToFacebook}>Facebook</button>
      <button onClick={goToGitHub}>GitHub</button>
    </main>
  );
}

export default App;
