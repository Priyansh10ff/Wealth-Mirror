# 💰 Wealth Calculator

A responsive web application that helps users visualize the true cost of their spending. It calculates the cost of an item not just in currency, but in "Life Hours" (time spent earning that money) and "Future Wealth" (opportunity cost if invested).


## 🚀 Features

* **Life Hours Calculation:** Converts the price of an item into the number of hours you need to work to afford it based on your hourly wage.
* **Opportunity Cost Projection:** Calculates how much the money spent would be worth in the future if invested at a 7% return.
* **Visual Comparison:** Dynamic bar graph comparing the immediate cost vs. potential future wealth.
* **Responsive Design:** Fully functional on desktop and mobile devices.
* **Category Tracking:** Input fields for different expense categories (Tech, Home, Lifestyle).

## 🛠️ Tech Stack

* **HTML5:** Semantic structure.
* **CSS3:** Flexbox layout, responsive media queries, and custom animations.
* **JavaScript (ES6):** DOM manipulation and financial calculation logic.
* **Font:** [Poppins](https://fonts.google.com/specimen/Poppins) (via Google Fonts).

## 🧮 How It Works

The application uses two core formulas to generate its data:

### 1. Life Hours
Determines how much time you are trading for the item.
$$\text{Hours} = \frac{\text{Item Price}}{\text{Hourly Wage}}$$

### 2. Future Wealth (Compound Interest)
Calculates the opportunity cost over the specified number of years, assuming a standard market return of **7%**.
$$\text{Future Value} = P \times (1 + r)^n$$

* **P:** Principal (Item Price)
* **r:** Annual Interest Rate (fixed at 0.07 in code)
* **n:** Number of Years

## 📂 Project Structure

```text
/
├── index.html      # Main structure
├── style.css       # Styling and responsive design
├── script.js       # Calculation logic and graph updates
└── README.md       # Project documentation