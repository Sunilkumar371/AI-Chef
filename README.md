# AI Chef 🍳

AI Chef is a web-based application that allows users to input a list of ingredients and get recipes based on those ingredients. The app leverages the Hugging Face API to generate recipes in real-time. Built with HTML, CSS, and JavaScript, the project is set up using the Vite framework for faster development and optimized performance.

## Features
- Simple, clean user interface.
- Input ingredients in a text box.
- Fetch recipes from Hugging Face API when the user clicks "Get Recipe."
- Display generated recipes directly on the page.

## Technologies Used
- **HTML5**: For structuring the web page.
- **CSS3**: For styling the UI.
- **JavaScript**: For handling the logic.
- **Vite**: A fast and optimized build tool for modern web projects.
- **Hugging Face API**: Used to generate recipes based on user input.

## Getting Started

### Prerequisites

- **Node.js** and **npm** should be installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Sunilkumar371/AI-Chef
   ```

2. **Navigate to the project directory**:

   ```bash
   cd AI-Chef
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

   This will start the Vite development server. You can now view the project in your browser 

### API Setup

1. **Create an account** on [Hugging Face](https://huggingface.co/).
2. **Get your API key** from the Hugging Face dashboard.
3. In your `.env` file, replace the placeholder API key with your own:

### Usage

1. **Enter Ingredients**: Type a list of ingredients in the provided input field.
2. **Click "Get Recipe"**: The app will call the Hugging Face API and return a recipe based on the ingredients you entered.
3. **View Recipe**: The recipe will be displayed on the same page.

## Example

1. Input: `tomatoes, onions, garlic, olive oil`
2. Click "Get Recipe"
3. Example Output:

   ```
   Recipe: Tomato Garlic Pasta
   - Ingredients: Tomatoes, onions, garlic, olive oil, pasta
   - Steps:
     1. Heat olive oil in a pan.
     2. Add garlic and onions, sauté until golden.
     3. Add tomatoes and cook until softened.
     4. Toss with cooked pasta and serve.
   ```



## Acknowledgments
- Thanks to [Hugging Face](https://huggingface.co/) for providing the recipe generation API.
- Inspired by the need to make cooking easier with AI!
- Thanks to scrimba.com

---
