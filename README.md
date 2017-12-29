# Umar Adam - P15175838

# CTEC3905 Front End Web Development - Assignment2

# **South Luangwa National Park**

# **Introduction**

This project is a HTML website based on a game reserve (animal wild life park) in Zambia called "South Luangwa National Park". This README file aims to explain the motivation of this project and show plans and wireframes of the website and the process of development with the design features.

# **Motivation**

My journey to Africa in 2016 had inspired me to use it as a theme of this project. Seeing the amazing scenery and wildlife, capturing great images and experiencing life in Africa had made me want to go again and inspire others also to pay a visit in such a place.

# **Design Principles _(PARC)_**

## **Proximity**

This has been addressed in this website in a few places for example on the about us page an accordion was placed with sections although grouped closely together. This helps with the vision for the user as each section contain their own topic however the format is similar.

## **Alignment**

All pages have very similar layouts, with slight differences. The elements of each page are very well placed and are not just scattered all over the place. Even when the screen size changes the item on the page moves accordingly and is placed in suitable positions.

## **Repetition**

All pages are similar with slight difference. The main aspects are repeated on each page such as the header and footer. Having these things repeated throughout the website allows the user to have knowledge of the whereabouts of the items of the website. This helps the user as they do not need to keep looking for where things are such as the navigation bar, which is a key aspect of the website

## **Contrast**

The website has three different themes to it depending on the screen size. For each theme, various different shades of the colour chosen is used for example for the desktop version, the colour 'green' is the main theme colour and so different shades of green was used throughout. For the tablet version, the colour 'blue' was used along with various different shades of blue. Finally for the mobile version, the colour 'brown' was used along with various shades of brown.

# **Development process**

## **Plans**

### First Draft

- [Mobile](documents/first_draft_mobile.jpg)
- [Desktop](documents/first_draft_desktop.jpg)

### Final plans

- [Mobile Index](documents/mobileindex.png)
- [Mobile About](documents/mobileabout.png)
- [Mobile Gallery](documents/mobilegallery.png)
- [Mobile Contact](documents/mobilecontact.png)
- [Desktop Index](documents/desktopindex.png)
- [Desktop About](documents/desktopabout.png)
- [Desktop Gallery](documents/desktopgallery.png)
- [Desktop Contact](documents/desktopcontact.png)

In the final website there is also a tablet size breakpoint.

## **Software used**

- notepad++
- Atom
- Github

## **Four web pages**

- Index (Homepage)
- About (some information about the park)
- Gallery (some images of animals in the park)
- Contact (Contact form the user can fill out).

## **Languages used**

- HTML5
- CSS3
- JavaScript

# **Design Features**

- Mobile first – the website was designed taking the mobile first approach which ensures the responsiveness of the site is effective.
- Use of API's – a Wikipedia search was integrated into the site for users to search for any extra information they would like to access such as a particular type of animal.
- Validated pages – all HTML and CSS were tested and validated and successfully passed with no errors.
- Responsive layout - There have been three different screen sizes taken into consideration: mobile first, tablet and desktop. All pages change accordingly.

# **Obstacles**

Having created a single style sheet which contained all styles, without any of the styles affecting others. I wasn't used to using Git and Github and didn't know the commands very well, however after using it a few times I had got the hang of it.

# **JavaScript**

Many features on the site are in use with JavaScript. The following JavaScript files were used:

- [accordian.js](js/accordian.js)
- [gal.js](js/gal.js)
- [map.js](js/map.js)
- [modal.js](js/modal.js)
- [reload.js](js/reload.js)
- [wiki.js](js/wiki.js)
- [topScroll.js](js/topScroll.js)

# **Testing**

Having let various people, both computer literate and not, browse and navigate around the website without any assistance from anybody with me over their shoulder supervising and inspecting what they are doing and what happens on the site when they looked through it. Having doing so helped in finding any faults and improvements, which would need to be made.

Test Case              | Pass/Fail | Details
---------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Accordion              | Pass      | This has three sections containing different information and should open when clicked on and should close when clicked again. only the section clicked on should open and not the others unless clicked otherwise.
Modal pop up (gallery) | Pass      | Each image should appear larger in a modal when clicked and should close when the 'x' is clicked.
Modal pop up (index)   | Pass      | the modal should open with information when the image is clicked and should close when the 'x' is clicked
Top scroll button      | Pass      | the button should appear once the user has scrolled down by 20 pixels. The page should go back to the top when the top button is clicked from however far down the user is on the page.
Navigation             | Pass      | Each button has a link that redirects the user to the correct location. A site map is also available on each page in the footer. Each link should be connected to the correct page
Wikipedia search       | Pass      | Information should appear when user searches in the search bar.

Each HTML and CSS file had been tested in the validator. the Following table shows the results:

Validate                          | Passed/Failed
--------------------------------- | -------------
Index (HTML)                      | Passed
About (HTML)                      | Passed
Gallery (HTML)                    | Passed
Contact (HTML)                    | Passed
CSS                               | Passed
JavaScript (No errors in console) | Passed

# **References**

- [Font Awesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css) - Used for the social media icons in the footer;
- [Google Maps API](https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwj1_4LI_-7SAhUlBMAKHRzuAn8QjBAIKTAB&url=https%3A%2F%2Fdevelopers.google.com%2Fmaps%2Fdocumentation%2Fjavascript%2F&usg=AFQjCNEqIyefKNWh844ThzcpqpQ_DzQTCw&sig2=opJ1uPAx8kYBLsxXiOhOiA&bvm=bv.150729734,bs.2,d.ZGg) - Used in the 'About' page within the accordian to show the location of the park;
- [W3Schools](https://www.w3schools.com/) - Used throughout mainly for inspiration;
- [Dave and Fania's Lectures]() - Used to gain knowledge and understanding and for ideas;
- [Codepen](https://codepen.io/) - Used for inspiration and ideas;
- [Pexels](https://www.pexels.com/) - Some pictures taken from here
