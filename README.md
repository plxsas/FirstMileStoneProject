#Salha Saad Portfolio
Stream One Project: User-Centric Frontend Development - Code Institute

This is my portfolio webpage to pitch my potential to respective employers. I have highlighted number of research projects that I have solely run or taken part of during my PhD and as a current research associate. It also contain a brief introduction about my background, research interests and analytical and coding skills. 



UX

Throughout the four pages of my design I made it as easy as possible for the user to access the information and follow have enjoyable experience. Each of the four nav bar titles were made clear and suggestive of what each page contains. As a researcher, my potential employers will be from any of the Higher Education institutes and thus I have tried to follow more of an academic style which is reflected in the balance between white and very light gray background. To be consistent regarding the visual presentation of my features, the nav bar and all of the button have green background color and white color font. 

On each page, I have divided the layout into two containers, one for the webpage logo with my photo, name, job tile and an email link with whichever email service the user has on her of his system. The aim was to make clear to the user who is owning the site. There is also a button to download my CV in a new blank page. The second container contents vary depending on which page is clicked. For example, on the home page, user should find more about whom am I and what my research background and interests and what statistical, genetics and coding skills are. 

The second page summarizes both my work and education history. Specifically, it mentions the different academic roles and an academic institute I have worked for. I have tried to be visual as possible by presenting my statistical and coding skill with logos instead. On the publication page, I have used cards elements with a relevant image to the publication topic that does animate when mouse hoover it. There is also read more option at the right button of the card for the user to click on to find further information. Each one of these publication is linked with the article webpage location. 

The contact page has three main elements. A contact form that is linked with my email. I have used both EmailJS and javaScript to receive a notification whenever the form gets submitted. I have applied the required option on each of the input box that without fill in it, the form will not be submitted. Once the person submit the request, he or she should see alert window on the top of the page saying the form has been submitted. The button text will also change from submit to sent as a confirmation. The second element on the right is my work address. Here I have used bootstrap grid with row and column division. The last diiv has a google map of my work location. Again, I have used JavaScript code to achieve that. Please see my JavaScript code files. As well in the nav bar, my contact page also has a link to my linkedIn, github and Skype page. 



Technologies
HTML
CSS
Bootstrap (3.3.7)
JQuery 
JavaScript
EmailJS
Google Map API


Features
This site uses the scrollSpy feature in Bootstrap with an extra JavaScript function added to create a 'smooth scrolling' effect. The navbar also stays collapsed regardless of the screen size to promote a minimalist design.

Features Left to Implement
In the future, I would like to add further projects that I've worked on to create a more comprehensive 'work/travail' section. I would like to also add animations to the progress circles in the "skills/compétences" section to animate on a hover.

Testing
The employer and recruiter user story achieved the intended outcome of providing them with a showcase of myself and my work. In the about me section, they can read a bit about my background, and if they're viewing on a desktop, the background of this section is a photo of me. They are able to see my showcased projects via the project cards in the "Work" section. They can view both the live version and the GitHub repository by clicking on the Font Awesome icons. They are also able to view my social media profiles via clicking on the icons in the footer. They are also able to download my CV by either clicking on CV in the navbar dropdown, or by clicking on the document icon in the footer.

If you try to submit the contact form with an invalid email address, there will be an error noting the invalid email address. Furthermore, the 'required' attribute is added to the 'name,' 'email,' and 'message' fields, so if those fields are not filled in, the form will not submit. If all field are valid, the page will reload. If an employer or recruiter is interested in contacting me, they will have to fill out all fields in order for the form to go through.

All links will open in a new tab using 'target="_blank"' and the CV will download to your default folder for downloads on click using the 'download' attribute. All links have been manually tested to ensure that they are pointing to the correct destination.

By clicking on the links in the navbar, the scrollSpy effect will work regardless of whether or not you're viewing the sections in the same order they are listed in the dropdown navbar.

This site was tested across multiple browsers (Chrome, Safari, Internet Explorer, FireFox) and on multiple mobile devices (iPhone 4, 5, 7: Chrome and Safari, iPad, Samsung Galaxy) to ensure compatibility and responsiveness. During the testing phase, I realized that background-attachment: fixed was not compatible with iOS browsers. On Chrome and Safari in iOS, the background photos appeared zoomed-in and blurry. To fix this, the background-attachment: scroll property value was added in a media query.

Deployment
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

To run locally, you can clone this repository directly into the editor of your choice by pasting git clone https://github.com/hschafer2017/HSCHAFER-Portfolio.git into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.

Credits
Content
All content in the "About Me/À Propos" and "Work/Travail" sections in this portfolio site were written by me.

Media
All photos were taken from Pexels, a stock image library, with the exception of the photo of myself in the background of the 'about me/À Propos' section in the desktop view. A greyscale filter was applied to each one prior to upload to preserve the greyscale theme.

Acknowledgements
The scrollSpy delay JavaScript function was found through this tutorial here.

The progress circles from the skills section are modeled after the following Stack Overflow example. They were significantly modified to fit the styling, sizing, and progress for each skill.

The media query for the collapsed navbar regardless of viewport width was taken from this site.

This is for educational use.
