export default function Contact() {
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-3">Contact</h1>
        <p>Email: spencerscherger@gmail.com</p>
        <p className="mt-2">
          <a
            href="https://github.com/SpencerScherger"
            className="text-blue-600 underline"
            target="_blank"
          >
            GitHub Profile
          </a>
        </p>
        <p className="mt-1">
          <a
            href="/resume.pdf"
            className="text-blue-600 underline"
            target="_blank"
          >
            View My Resume
          </a>
        </p>
      </div>
    );
  }