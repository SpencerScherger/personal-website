export default function Contact() {
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-3">Contact</h1>
  
        <p><strong>Email:</strong> spencerscherger@gmail.com</p>
        <p className="mt-2"><strong>Phone:</strong> (817) 941-3166</p>
  
        <p className="mt-4">
          <a
            href="https://github.com/SpencerScherger"
            className="text-blue-400 underline"
            target="_blank"
          >
            GitHub Profile
          </a>
        </p>
  
        <p className="mt-1">
          <a
            href="/resume.pdf"
            className="text-blue-400 underline"
            target="_blank"
          >
            View My Resume
          </a>
        </p>
      </div>
    );
  }
  