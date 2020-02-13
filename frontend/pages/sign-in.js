export default function SignIn() {
    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-8 w-full max-w-xs mx-auto">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Password"></input>
            </div>
            <div class="flex items-center justify-between mt-8">
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
            </div>
        </form>
    );
  }