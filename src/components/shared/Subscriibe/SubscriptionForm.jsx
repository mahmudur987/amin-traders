import { useState } from "react";

function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your subscription logic here
    if (email && termsAccepted) {
      // You can send the email and process the subscription
      alert("Subscription successful!");
    } else {
      alert(
        "Please provide a valid email and accept the terms and conditions."
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 md:my-20 lg:my-32 p-6 text-center rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">
        Stay up to date with all lates features and exclusive offers. <br />{" "}
        <span className="text-accent"> Subscribe to Our Newsletter</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="border rounded-lg px-3 py-2 w-full"
            placeholder="youremail@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="terms"
          >
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={handleTermsChange}
              className="mr-2 leading-tight"
            />
            I accept the{" "}
            <a href="/terms" className="text-blue-500">
              Terms and Conditions
            </a>
          </label>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default SubscriptionForm;
