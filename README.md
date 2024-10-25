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
8. [Contact](#contact)

---

## Introduction <a name="introduction"></a>

Welcome to the repository for my portfolio landing page, created to showcase my projects, skills, and services as a **Cloud Software Engineer**. This portfolio is crafted with a focus on an interactive user experience, clear presentation, and mobile responsiveness. The site is developed using JAMstack principles (JavaScript, API, and Markup) and is fully hosted on GitHub Pages.

## Key Features <a name="key-features"></a>

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

## Technologies Used <a name="technologies-used"></a>

- **HTML5/CSS3**: For structure and responsive styling.
- **Bootstrap 4**: Grid layout, responsiveness, and components.
- **JavaScript (ES6)**: Interactive functionalities (language switch, form submission).
- **jQuery**: Simplifies DOM manipulation and event handling.
- **Switchery**: Toggle switch for language selection.
- **AOS**: Scroll animations for a dynamic user experience.
- **Glightbox**: For interactive project showcases in the Portfolio section.
- **Google Apps Script**: To handle form submissions in the Contact section.
- **GitHub Pages**: Free static site hosting.

## Development <a name="development"></a>

### Key Implementations

This project incorporates several key libraries and tools to enhance interactivity, user experience, and functionality. Here’s a breakdown of how each technology is implemented in the portfolio landing page.

#### Switchery for Language Switching

Switchery is used to create a toggle switch allowing users to change the language of the page dynamically (English to French). The switch initiates an event listener on change, which loads translations from a JSON file and updates the page content accordingly without reloading the page.

- **Implementation**: The toggle switch is linked to an event handler in `script.js` which, when activated, fetches the translation JSON file and updates specific elements marked with classes matching the JSON keys.
- **Example**:
   ```javascript
   const langSwitch = document.querySelector('#langSwitch');
   langSwitch.onchange = function() {
       // Show loading spinner while switching
       loadingContainer.style.display = 'block'; 
       translatePage("/includes/translation.json").then(() => {
           loadingContainer.style.display = 'none'; 
           smallElement.setAttribute('data-text', langSwitch.checked ? 'FR' : 'EN');
       });
   };
   ```

#### Glightbox for Project Showcase

Glightbox is used to display project details in an elegant, lightbox-style overlay. This improves user engagement by allowing them to explore each project’s key information and technologies without leaving the page.

- **Implementation**: Each project item in the Portfolio section uses `data-glightbox` attributes, linking to a lightbox instance initialized in `script.js`. Projects are visually enhanced with images and badges highlighting key technologies.
- **Example**:
   ```javascript
   var lightbox = GLightbox({
       selector: '.glightbox',
       touchNavigation: true,
       loop: false,
       openEffect: 'zoom',
       closeEffect: 'fade',
   });
   ```

#### AOS (Animate On Scroll) for Smooth Animations

AOS (Animate On Scroll) brings smooth animations to different sections as they enter the viewport, making the page feel dynamic and engaging.

- **Implementation**: Elements throughout the page are assigned data attributes like `data-aos="fade-up"` or `data-aos="fade-right"`, which control how each component animates upon scrolling. AOS is initialized in `script.js` with specific easing and duration configurations.
- **Example**:
   ```javascript
   AOS.init({
       easing: 'ease-in-out',
       offset: 120,
       duration: 1500,
   });
   ```

#### Contact Form Integration with Google Apps Script

The contact form is integrated with Google Apps Script to handle form submissions. This setup enables form data to be sent to a Google Sheets document or email, providing an effective way to handle inquiries directly from the landing page.

- **Implementation**: The form data is collected and converted into JSON, then sent via a POST request to a Google Apps Script URL specified in `script.js`. Upon submission, a success message is displayed, and the form is reset.
- **Example**:
   ```javascript
   function submitForm() {
    const formData = new FormData(document.getElementById('contactForm'));
    const jsonData = {};
    formData.forEach((value, key) => { jsonData[key] = value; });
    fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
    })
    .then(response => {
        document.getElementById('sent-message').style.display = 'block';
        document.getElementById('contactForm').reset();
    })
    .catch(error => console.error('Error:', error));
   }
   ```
#### Additional Development Details

1. Responsive Design: The layout uses Bootstrap’s grid system and media queries to ensure optimal viewing across devices.
2. Smooth Scrolling: Smooth scroll effects are implemented with native JavaScript, allowing users to navigate between sections effortlessly.

Each technology in this project works together to create an efficient, visually appealing, and user-friendly portfolio site.

## Project Structure <a name="project-structure"></a>

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

## Deployment <a name="deployment"></a>

This project is deployed using **GitHub Pages**.

### Steps for Deployment

1. Commit and push changes to the `main` branch of your repository.
2. Go to your GitHub repository, click on **Settings** > **Pages**.
3. In the **Source** section, choose `main` branch and click **Save**.
4. The site will be available at `https://fkanedev.github.io`.

## Sources <a name="sources"></a>

- [Bootstrap Documentation](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [Switchery Documentation](https://github.com/abpetkov/switchery)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Glightbox Documentation](https://biati-digital.github.io/glightbox/)
- [Google Apps Script Guide for Forms](https://developers.google.com/apps-script/guides/web)

## Contact <a name="contact"></a>

Feel free to reach out via the contact form on the portfolio or through the following channels:

- **Email**: fkanecloudtech@gmail.com
- **LinkedIn**: [linkedin.com/in/fkanecloudtech/](https://www.linkedin.com/in/fkanecloudtech/)
- **GitHub**: [github.com/fkanedev](https://github.com/fkanedev)
---

Thank you for visiting my portfolio repository!

