import { useState } from "react";

export function InputFormHandling() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ email: "", password: "" });
    setSubmitted(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="bg-green-100 p-6 space-y-4 border rounded max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold">Input Form Handling</h2>

      <div>
        <label htmlFor="email" className="block font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full rounded bg-amber-100"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="password" className="block font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 w-full rounded bg-amber-100"
          placeholder="Enter your password"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
        <button
          type="reset"
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>

      {submitted && (
        <div className="mt-4 text-green-600">
          ✅ Submitted: {form.email} / {form.password}
        </div>
      )}
    </form>
  );
}
