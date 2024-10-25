![HTML5](https://img.shields.io/badge/HTML-5-orange.svg)
![CSS3](https://img.shields.io/badge/CSS-3-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)
![Bootstrap 4](https://img.shields.io/badge/Bootstrap-4.0-purple.svg)
![AOS](https://img.shields.io/badge/Animation-AOS-green.svg)
![Glightbox](https://img.shields.io/badge/Lightbox-Glightbox-lightblue.svg)
![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-blue.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

# Fadel KANE - Cloud Software Engineering Portfolio
This project is designed to build an interactive and responsive portfolio landing page for a **Cloud Software Engineer**. The landing page highlights key skills, services, and selected projects, along with a contact form for easy communication. It incorporates modern technologies such as Bootstrap, AOS, and Switchery for a smooth and visually appealing user experience.

Developed according to **JAMstack** principles (JavaScript, API, Markup), this portfolio is deployed on **GitHub Pages** and features a **dynamic language switch** between English and French. It is an essential part of my training, showcasing my cloud-oriented software engineering skills.

# Topics
`HTML5`, `CSS3`, `JavaScript`, `Bootstrap`, `Switchery`, `Cloud Software Engineering`, `Portfolio`, `User Experience (UX)`, `GitHub Pages`, `Bilingual`, `Google Apps Script`, `Front-end Development`, `Responsive Design`, `Contact Form Integration`, `Web Animations`, `AOS`


## Table of Contents

1. [Introduction](#introduction)
2. [Key Features](#key-features)
3. [Technologies Used](#technologies-used)
4. [Development](#development)
5. [Project Structure](#project-structure)
6. [Deployment](#deployment)
7. [Sources](#sources)
8. [License](#license)
9. [Contact](#contact)

---

## Introduction

Welcome to the repository for my portfolio landing page, created to showcase my projects, skills, and services as a **Cloud Software Engineer**. This portfolio is crafted with a focus on an interactive user experience, clear presentation, and mobile responsiveness. The site is developed using JAMstack principles (JavaScript, API, and Markup) and is fully hosted on GitHub Pages.

## Key Features

1. **Language Switcher**: Supports English and French, allowing users to toggle between languages without reloading the page.
2. **Responsive Navigation**: Dynamic navigation bar that adapts to scroll position, with smooth scrolling to each section.
3. **Sections**:
   - **Home**: Highlights core competencies and provides quick links to social profiles.
   - **About**: Offers a brief background along with skills in Cloud Software Engineering.
   - **Services**: Lists services with descriptions.
   - **Portfolio**: Showcases selected projects with brief descriptions and tech stacks.
   - **Contact**: Provides multiple ways to reach out, including a contact form integrated with Google Apps Script for form submissions.
4. **Aesthetic Animations**: Uses AOS (Animate On Scroll) for animations to enhance user engagement.
5. **Footer Links with Modals**: Displays legal and privacy information in modals that are loaded on-demand.

## Technologies Used

- **HTML5/CSS3**: For structure and responsive styling.
- **Bootstrap 4**: Grid layout, responsiveness, and components.
- **JavaScript (ES6)**: Interactive functionalities (language switch, form submission).
- **jQuery**: Simplifies DOM manipulation and event handling.
- **Switchery**: Toggle switch for language selection.
- **AOS**: Scroll animations for a dynamic user experience.
- **Glightbox**: For interactive project showcases in the Portfolio section.
- **Google Apps Script**: To handle form submissions in the Contact section.
- **GitHub Pages**: Free static site hosting.

## Development

### Setting Up the Project

1. Clone this repository:
   ```bash
   git clone https://github.com/username/portfolio-landing-page.git
   ```
2. Navigate into the project directory:
   ```bash
   cd portfolio-landing-page
   ```
3. Open `index.html` in your preferred editor and start a local server (e.g., with VS Code's Live Server extension) to view changes in real time.

### Customization Options

- **Updating Translation Content**: Language translations are loaded from a JSON file located at `/includes/translation.json`.
- **Project and Service Details**: All project descriptions, titles, and icons are in the `index.html` file under respective sections (`#portfolio`, `#services`).
- **Contact Form**: Update the Google Apps Script URL in `script.js` for handling form submissions.

## Project Structure

```graphql
portfolio-landing-page/
│
├── assets/
│   ├── images/                # Images used in the site
│   ├── techies/               # Technology icons for skills section
│   └── social/                # Social media icons
│
├── includes/
│   ├── translation.json       # Translation data for multilingual support
│   └── legal-notice.html      # Legal notice content (modal)
│
├── index.html                 # Main HTML file
├── style.css                  # Custom styles for the portfolio page
├── script.js                  # JavaScript interactions and functionalities
├── README.md                  # Project documentation
└── LICENSE                    # License for the project
```

## Deployment

This project is deployed using **GitHub Pages**.

### Steps for Deployment

1. Commit and push changes to the `main` branch of your repository.
2. Go to your GitHub repository, click on **Settings** > **Pages**.
3. In the **Source** section, choose `main` branch and click **Save**.
4. The site will be available at `https://fkanedev.github.io`.

## Sources

- [Bootstrap Documentation](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [Switchery Documentation](https://github.com/abpetkov/switchery)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Glightbox Documentation](https://biati-digital.github.io/glightbox/)
- [Google Apps Script Guide for Forms](https://developers.google.com/apps-script/guides/web)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Feel free to reach out via the contact form on the portfolio or through the following channels:

- **Email**: fkanecloudtech@gmail.com
- **LinkedIn**: [linkedin.com/in/fkanecloudtech/](https://www.linkedin.com/in/fkanecloudtech/)
- **GitHub**: [github.com/fkanedev](https://github.com/fkanedev)
---

Thank you for visiting my portfolio repository!

