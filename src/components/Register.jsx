function Register() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
          <div className="text-center p-4 border-b border-gray-200">
            <h1 className="text-xl font-bold">Register</h1>
          </div>
          <form
            className="px-8 py-4"
            name="registrationForm"
            id="registrationForm"
          >
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              />
              <span
                className="error_span text-red-600 hidden"
                id="firstName_error"
              ></span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              />
              <span
                className="error_span text-red-600 hidden"
                id="lastName_error"
              ></span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              />
              <span
                className="error_span text-red-600 hidden"
                id="email_error"
              ></span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              />
              <span
                className="error_span text-red-600 hidden"
                id="phoneNumber_error"
              ></span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              />
              <span
                className="error_span text-red-600 hidden"
                id="age_error"
              ></span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              />
              <span
                className="error_span text-red-600 hidden"
                id="dateOfBirth_error"
              ></span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Create Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              />
              <span
                className="error_span text-red-600 hidden"
                id="password_error"
              ></span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              />
              <span
                className="error_span text-red-600 hidden"
                id="confirmPassword_error"
              ></span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="profile_img"
                className="block text-sm font-medium text-gray-700"
              >
                Select Profile Image
              </label>
              <input
                type="file"
                accept="image/png, image/jpeg"
                id="profile_img"
                name="profile_img"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              />
              <span
                className="error_span text-red-600 hidden"
                id="profile_img_error"
              ></span>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-indigo-500 text-white font-bold shadow sm:w-full"
              >
                Register
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
