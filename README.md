# Portfolio

Welcome to my portfolio website! This website showcases my professional career in terms of projects, skills, and experience. I hope you find it informative and engaging. Feel free to contact me if you have any questions or feedback.

**Website URL:** Visit my website [here](https://www.celine-semaan.com)!

## Table of Contents

- Projects
    - Computer Engineering Projects
    - Computer Science Projects
    - Experience Design Projects

- Experience
- Education
- Skills
- Honors & Awards
- Clubs & Organizations
- Hobbies & Interests
- Contact Me

## Computer Engineering Projects

This section showcases my projects related to computer engineering, including hardware design, embedded systems, and digital signal processing.

## Computer Science Projects

This section highlights my projects related to computer science, including software development, database design, and computer systems.

## Experience Design Projects

This section features my projects related to experience design, including user interface design, interactive designs, and the development of user experiences.

## Experience

This section provides an overview of my professional experience, including co-ops and part-time jobs. It includes information about the companies I have worked for, the roles I have held, and the skills I have developed.

## Education

This section outlines my educational background, including my degree, major, and minor. It also includes a detailed categorized list of relevant coursework.

## Skills

This section lists my technical skills, including programming languages, software tools, and hardware platforms. It also includes soft skills such as the languages I speak and their proficiencies.

## Honors & Awards

This section highlights the honors and awards I have received throughout my academic and professional career. It includes scholarships and other recognitions.

## Clubs & Organizations

This section lists the clubs and organizations I have been involved with during my academic and professional career.

## Hobbies & Interests

This section provides an overview of my hobbies and interests outside of work, categorized into different areas such as sports, or arts.

## Contact Me

This section provides my contact information, including my email address and social media profiles. Feel free to reach out to me if you have any questions or feedback.

## Future Improvements

- High-priority fixes:
    - Find a way to prevent 'Developer Tools' and/or 'View Page Source action'.
    - Fix 'Contact me' button action in project modals.
    - Clear out 'Contact Me' form content when the message is sent succesfully.
    - For the 'Request access' action, fill out the 'Contact Me' section's message content with a placeholder message based on which project the button was clicked from.

- Safari Fixes:
    - Adjust scrolling speed.
 
- Layout fixes:
    - Adjust padding on iPad (specifically in navigation bar).
 
- General improvements:  
    - Adjust the site's compatibility with mobile devices.
    - Support dark mode.
    - Test website on Firefox and Edge.

# Portfolio Project

## Project Structure

Here is an overview of the project structure for the portfolio website. Each folder and file has a specific purpose as described below:

### Folder and File Descriptions

#### `/images`
- **branding/**: Contains branding images for the website.
- **interests/**: Contains images related to various interests.
- **logos/**: Contains logo images for different organizations or projects.
- **projects/**: Contains images related to different projects showcased in the portfolio.
- **skills/**: Contains images representing various skills.

#### `/main`
All changes to the website should be performed on the files in this folder. The files in the root directory are generated from the files in this folder.
- **home.html**: The main detailed version of the homepage HTML file for the website.
- **styles.css**: The main CSS file for styling the website.
- **script.js**: The main JavaScript file for the website.

#### `CNAME`
- File containing the custom domain name for the GitHub Pages site.

#### `index.html`
- The minified version of the home HTML file for optimized performance.

#### `minify.js`
- A script to automate the minification and processing of CSS, JavaScript, and HTML files.

#### `README.md`
- The README file that provides an overview and documentation for the project.

#### `script.min.js`
- The minified version of the main JavaScript file for optimized performance.

#### `styles.min.css`
- The minified version of the main CSS file for optimized performance.

### Making Changes to the Website
#### Main Files for Editing
All changes to the website should be made to the files in the `/main` folder. The files in the root directory are generated from the files in the `/main` folder.

#### Minification and Processing
The `minify.js` script automates the minification and processing of CSS, JavaScript, and HTML files. Before committing changes, run the script to update the minified files using the following command:

```
node minify.js
```

## Dependencies

This project requires the following dependencies to be installed:

### Node.js
Ensure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/).

### npm Packages
Install the required npm packages by running the following command in the project directory:

```
npm install axios querystring fs replace-in-file postcss postcss-nested cssnano
```

- **axios:** A promise-based HTTP client for making requests to external APIs.
- **querystring:** A utility for parsing and formatting URL query strings.
- **fs:** A native Node.js module for file system operations.
- **replace-in-file:** A tool for making string replacements in files.
- **postcss:** A tool for transforming styles with JavaScript plugins.
- **postcss-nested:** A PostCSS plugin that allows you to use nested rules inside your CSS.
- **cssnano:** A PostCSS plugin used for optimizing and minimizing your CSS files.

### Contact Form EmailJS

```
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script type="text/javascript">
    (function () {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init({
            publicKey: "uYyDQuLKtNz-Bkg0h",
        });
    })();
</script>
```

- **EmailJS:** This service allows you to send emails directly from JavaScript without server-side code. The above script initializes EmailJS with your public key.
  
### Font Awesome

```
<script src="https://kit.fontawesome.com/a3d1cb1434.js" crossorigin="anonymous"></script>
```

- **Font Awesome:** A popular icon set and toolkit. This script enables the use of Font Awesome icons in your project.
  
### Domain Name and DNS Configuration
- **Domain name using Squarespace:** If you are using Squarespace to manage your domain, ensure you have it properly configured.
- **DNS configuration with GitHub Pages:** Configure your DNS settings to point your domain name to your GitHub Pages site, enabling you to use your custom domain.


# Author
Celine Semaan

