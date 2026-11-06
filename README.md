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

## Future Improvements
 
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

#### `/.github`
- **workflows/**: Contains GitHub Actions workflows for automating the deployment of the website.
    - **minify.yml**: A workflow that runs the minification script on push to the main branch.

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

#### `.gitignore`
- A file that specifies intentionally untracked files to ignore notably the node_modules folder.

#### `CNAME`
- File containing the custom domain name for the GitHub Pages site.

#### `index.html`
- The minified version of the home HTML file for optimized performance.

#### `minify.js`
- A script to automate the minification and processing of CSS, JavaScript, and HTML files.

#### `package-lock.json`
- The npm package lock file that contains the exact versions of dependencies installed.

#### `package.json`
- The npm package file that contains the dependencies and scripts for the project.

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
The `minify.js` script automates the minification and processing of CSS, JavaScript, and HTML files. There is an automated workflow that runs this script on push to the main branch. However, if you run into issues, you can manually run the script using the following command:

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


## November 2026 resume-aligned additions

The portfolio remains a comprehensive record: existing experience, projects, education, awards, clubs, and interests were retained. The SDET title was aligned with the current resume, seven detailed SDET accomplishments were added, and missing technical skills were added as text chips (no new external icon dependencies). Both `main/home.html` and deployable `index.html` were updated.
