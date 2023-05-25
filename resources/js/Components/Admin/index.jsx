<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <title>Login Form</title>
</head>

<body class="bg-red-300">
  <div class="flex justify-center items-center h-screen">
    <div class="bg-white p-8 rounded shadow-md max-w-md w-full">
      <h2 class="text-2xl text-center mb-4">Login</h2>
      <form>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email:</label>
          <input class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            id="email" type="email" placeholder="Enter your email" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password:</label>
          <input class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            id="password" type="password" placeholder="Enter your password" required>
        </div>
        <div class="flex justify-center">
          <button class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
            type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</body>

</html>