## How to setup TailwindCSS

Step 1: Run the followind commands

```
npm install -D tailwindcss
or npm install -D tailwindcss@latest
npx tailwindcss init or tailwindcss init
```

Step 2: Update tailwind.config.js file to include this line :
```
content: ["*.html"],
```

Step 3: create src/input.css to include

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Include the src/output.css file to your html

Step 5: Run the following commands:
```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch

```

