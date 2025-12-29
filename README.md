## Overview

YĀTRĀ is a client-side web application developed to support the Sri Lankan government's post-pandemic tourism revitalisation initiative, created as part of the COMP40004 - Web Development & Operating course. This comprehensive platform provides tourists with detailed information about tourism in Sri Lanka, covering attractions, culture, activities, and travel information.

Designed and developed by Supun Wijesooriya in July 2022.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript (ECMAScript)](https://img.shields.io/badge/JavaScript-ECMAScript-F7DF1E?style=flat-square&logo=javascript&logoColor=000000)
![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=flat-square&logo=google&logoColor=white)
![Progressive Web App](https://img.shields.io/badge/PWA-Enabled-5A0FC8?style=flat-square&logo=pwa&logoColor=white)

## Features

The YĀTRĀ website offers the following features:

1. **Homepage**

   - Hero section with welcoming message in Sinhala language ("Āyubōwan")
   - Featured articles about Sri Lanka as a travel destination
   - Top places to visit recommendations
   - Quick access to explore Sri Lankan culture, history, cuisine, traditions, wildlife, and beaches
   - Responsive navigation bar

2. **Wildlife Section**

   - Comprehensive information about Sri Lankan wildlife
   - Details about national parks and nature reserves
   - Wildlife photography and descriptions
   - Information about endemic species

3. **Beaches Section**

   - Curated list of popular beaches in Sri Lanka
   - Beach descriptions and activities
   - Coastal tourism information
   - Visual content showcasing beach destinations

4. **Heritage Attractions**

   - Detailed information about Sri Lanka's cultural heritage sites
   - UNESCO World Heritage locations
   - Historical landmarks and ancient ruins
   - Multi-page heritage exploration (heritage.html, heritage1.html, heritage2.html)

5. **Activities Section**

   - Interactive activity recommendations
   - Adventure tourism options
   - Cultural experiences and traditional activities
   - Dynamic content loading with JavaScript

6. **About Ceylon Page**

   - Comprehensive overview of Sri Lanka
   - Historical and cultural context
   - General tourist information

7. **Contact Form**

   - User enquiry submission
   - Form validation
   - Contact information collection

8. **E-commerce Features**

   - Products/Purchases page for tourism-related items
   - Shopping cart functionality
   - Ticket booking system
   - Interactive product catalogue

9. **Additional Features**
   - Progressive Web App (PWA) capabilities with service worker
   - Offline support and caching
   - Social media integration (Instagram, TikTok, YouTube, Twitter, LinkedIn)
   - Sitemap for easy navigation
   - Developer portfolio page
   - Privacy policy and terms & conditions
   - Fully mobile-responsive design
   - Custom favicon and app icons

## Technologies Used

- **HTML5**: Semantic markup language for structuring web content
- **CSS3**: Advanced styling with custom stylesheets
  - Main stylesheet (`yatra.css` - 20KB)
  - Component-specific styles (`about-ceylon.css`, `heritage1.css`, `heritage2.css`, `purchases.css`, `sitemap.css`, `tickets.css`, `developer-portfolio.css`)
  - Responsive design patterns
- **JavaScript (ECMAScript)**: Client-side scripting for interactive features
  - Activities functionality (`activities-script.js`)
  - Shopping cart implementation (`cart.js` - 3.7KB)
  - Index page interactions (`index.js` - 1.5KB)
  - Purchase system (`purchases-script.js` - 1.8KB)
  - Ticket booking (`tickets.js` - 6.5KB)
  - Service worker for PWA (`sw.js` - 2.8KB)
- **Google Fonts**: Typography enhancement
  - Playfair Display SC (weights: 400, 700; regular and italic)
  - Dancing Script (weight: 600)
  - Poppins (weights: 100, 200, 300, 600; regular and italic)
- **Progressive Web App (PWA)**: Modern web capabilities
  - Service worker for offline functionality
  - Web app manifest (manifest.json)
  - App icons for various devices (144x144, 192x192, 256x256, 512x512)
- **No External Frameworks**: Built entirely with hand-written code (no Bootstrap, jQuery, or other libraries)

## Project Specifications

- **Course**: COMP40004 - Web Development & Operating
- **Theme**: Tourism Revitalisation for Sri Lanka
- **Implementation**: Fully mobile-responsive design
- **Development Approach**: Hand-written HTML, CSS, and JavaScript (no external web creator tools)
- **Focus**: Strong web design skills, semantic markup, and interactive client-side functionality
- **Testing**: Systematic testing for correctness and usability
- **Development Year**: 2022

## User Interfaces

### UIs

![Homepage Screenshot](https://github.com/supunxiii/supunxiii/blob/7653f59dcf38771e7791a1cc0795c9d6b4cdcd3c/user-interfaces/yatra/yatra-ui-1.png)

### UIs

![Wildlife Section](https://github.com/supunxiii/supunxiii/blob/7653f59dcf38771e7791a1cc0795c9d6b4cdcd3c/user-interfaces/yatra/yatra-ui-2.png)

### UIs

![Heritage Page](https://github.com/supunxiii/supunxiii/blob/7653f59dcf38771e7791a1cc0795c9d6b4cdcd3c/user-interfaces/yatra/yatra-ui-3.png)

### UIs

![Mobile Responsive View](https://github.com/supunxiii/supunxiii/blob/7653f59dcf38771e7791a1cc0795c9d6b4cdcd3c/user-interfaces/yatra/yatra-ui-4.png)

## Getting Started

To run the YĀTRĀ website locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/supunxiii/yatra-website.git
   ```

2. Navigate to the project directory:

   ```shell
   cd yatra-website
   ```

3. Open `index.html` in your web browser:

   ```shell
   open index.html
   ```

   Or simply double-click the `index.html` file in your file explorer.

4. Explore the various pages:
   - **Home**: `index.html`
   - **About Ceylon**: `about-ceylon.html`
   - **Wildlife**: `wildlife.html`
   - **Beaches**: `beaches.html`
   - **Heritage**: `heritage.html`, `heritage1.html`, `heritage2.html`
   - **Activities**: `activities.html`
   - **Contact**: `contactus.html`
   - **Purchases**: `purchases.html`
   - **Tickets**: `tickets.html`
   - **About Us**: `aboutus.html`
   - **Sitemap**: `sitemap.html`

## Project Structure

```
yatra-website/
├── index.html                          # Homepage
├── about-ceylon.html                   # Information about Sri Lanka
├── wildlife.html                       # Wildlife attractions
├── beaches.html                        # Beach destinations
├── heritage.html                       # Heritage sites (main)
├── heritage1.html                      # Heritage sites (part 1)
├── heritage2.html                      # Heritage sites (part 2)
├── activities.html                     # Activities and experiences
├── contactus.html                      # Contact form
├── purchases.html                      # E-commerce page
├── tickets.html                        # Ticket booking
├── aboutus.html                        # About YĀTRĀ
├── sitemap.html                        # Site navigation map
├── developer-portfolio.html            # Developer information
├── fallback.html                       # Offline fallback page
├── css/
│   ├── yatra.css                       # Main stylesheet
│   ├── about-ceylon.css                # About page styles
│   ├── heritage1.css                   # Heritage styles (part 1)
│   ├── heritage2.css                   # Heritage styles (part 2)
│   ├── purchases.css                   # E-commerce styles
│   ├── sitemap.css                     # Sitemap styles
│   ├── tickets.css                     # Ticket page styles
│   └── developer-portfolio.css         # Portfolio styles
├── javascript/
│   ├── activities-script.js            # Activities functionality
│   ├── cart.js                         # Shopping cart logic
│   ├── index.js                        # Homepage interactions
│   ├── purchases-script.js             # Purchase system
│   └── tickets.js                      # Ticket booking logic
├── images/                             # Image assets
├── videos/                             # Video content
├── main.js                             # Main JavaScript file
├── sw.js                               # Service worker (PWA)
├── manifest.json                       # Web app manifest (PWA)
├── site.webmanifest                    # Alternative manifest
├── browserconfig.xml                   # Browser configuration
├── favicon.ico                         # Website favicon
├── favicon-16x16.png                   # Favicon (16x16)
├── favicon-32x32.png                   # Favicon (32x32)
├── apple-touch-icon.png                # iOS icon
├── android-chrome-*.png                # Android icons
├── mstile-150x150.png                  # Microsoft tile
└── safari-pinned-tab.svg               # Safari icon
```

## Developer

This project was developed in **July 2022** by:

- **Supun Wijesooriya** - Full-Stack Developer

## Live Demo

The website is currently live at: [https://supunxiii.github.io/yatra-website/index.html](https://supunxiii.github.io/yatra-website/index.html)

## Contributing

Contributions to the YĀTRĀ website are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```shell
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```shell
   git commit -m "Add your commit message"
   ```

4. Push your changes to your forked repository:

   ```shell
   git push origin feature/your-feature-name
   ```

5. Open a pull request to the main repository, describing your changes and the purpose of the pull request.

## Important Notes

- This website is **fully mobile-responsive** and optimised for viewing on all device sizes
- The website was developed as an academic project following best practices in web development
- No external frameworks or libraries were used; all code is hand-written
- Progressive Web App capabilities enable offline functionality and improved performance
- All content is for demonstration and educational purposes

## Contact

For any enquiries or feedback, please contact the developer:

- **Supun Wijesooriya**: [GitHub Profile](https://github.com/supunxiii)
- **Project Repository**: [yatra-website](https://github.com/supunxiii/yatra-website)

---

_Designed and developed in July 2022_
