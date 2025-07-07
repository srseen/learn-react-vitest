import { useRef, useState } from "react";

export function UncontrolledForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (!email || !password) {
      setError("All fields are required.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <form
      role="form"
      onSubmit={handleSubmit}
      className="p-6 border rounded space-y-4 max-w-md"
    >
      <h2 className="text-xl font-bold">Uncontrolled Form</h2>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          ref={emailRef}
          id="email"
          type="email"
          placeholder="Enter email"
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          ref={passwordRef}
          id="password"
          type="password"
          placeholder="Enter password"
          className="border p-2 w-full rounded"
        />
      </div>

      {error && (
        <p className="text-red-600" data-testid="error">
          {error}
        </p>
      )}
      {submitted && (
        <p className="text-green-600" data-testid="success">
          Form submitted successfully!
        </p>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
