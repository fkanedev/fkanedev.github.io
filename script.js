/**
 * script.js
 * 
 * Project: Portfolio Landing Page
 * Site: Fadel KANE - Cloud Software Engineering
 * Stack: JAMstack (JavaScript, API, Markup)
 * 
 * Description:
 * This JavaScript file contains the necessary scripts to interact with 
 * the landing page of the portfolio. It manages the following functionalities:
 * - 
 * -
 * -
 * 
 * Author: Fadel KANE
 * Date: 30/07/2024
 * 
 * Notes:
 * - Ensure that DOM elements are loaded before script execution.
 * - To add functionalities, follow the code sections and insert the 
 *   necessary scripts in the appropriate blocks.
 */

/**
===================================================================
BLOCK: COMMON JS SCRIPTS
===================================================================
*/

/**
********************************************************************
HEADER SECTION
********************************************************************
*/

/** LANGUAGE SWITCH */

document.addEventListener('DOMContentLoaded', () => {
	
	// Loading the loadingContainer
	var loadingContainer = document.getElementById('loadingContainer');

    // Initializing the switch
    const langSwitch = document.querySelector('#langSwitch');	  
    const switchery = new Switchery(langSwitch,  {'color': '#56BDF3', 'secondaryColor': '#56BDF3'});		
	
	// Add text to the small element after initialization
	const smallElement = document.querySelector('.switchery-default small');		    
    smallElement.setAttribute('data-text', 'EN');
	
	// Define the callback function that will handle the JSONP response
    function handleDataTranslationTableResponse(data) {
		// console.log('HANDLE FUNCTION LAUNCHED ...');
		// console.log('JSON Object:', data);
		
		var currentLang = document.querySelector('body').lang;
		// console.log('CURRENT LANGUAGE:', currentLang);
		
		var nextLang = (currentLang === "en") ? "fr" : "en";
		document.querySelector('body').lang = nextLang;
		
		table = JSON.parse(data.translationContent);
		
		var translation = "";
		var target = "";
		
		//console.log(data.translationContent);
		
		$.each(table, function(key, value) {
			
			translation = (value[nextLang] !== "") ? value[nextLang] : value['en'];
			allTarget = document.querySelectorAll('.'+key);
			allTarget.forEach(function(target){
				if (key.includes("Placeholder")) {
					// console.log(key);
					if (target) {
						target.placeholder = translation;
					} else {
						// console.log('not found');
						}
					
				} else {
					// console.log(key);
					if (target) {
						target.innerHTML = translation;
						} else {
							// console.log('not found');
							}
				}				
			});			
		});
		
		// Clean up the dynamically created script
		var script = document.getElementById('jsonp-script-translation');
		if (script) {
			document.body.removeChild(script);
			// console.log('SCRIPT JSONP REMOVED ...');
		}
    }
	
	// Retrieve data translation table
	function translatePage(translationFileName) {  // getTranslationTable
		
		return new Promise((resolve, reject) => {
		
			// Create a script element for the JSONP request
			const script = document.createElement('script');
			  
			// Set an ID for the script element to facilitate cleanup
			script.id = 'jsonp-script-translation';

			// Define a unique callback function name
			const callbackName = 'handleDataTranslationTableResponse';
			
			// Set the src attribute of the script element to the JSONP URL
			const url = `https://script.google.com/macros/s/AKfycbxHQkpEfdW0SZ9SKmRIr97VYCLiDRX3WwRQouMCFeM_qBvd0eDWaRALCPWIhBy7KANZ/exec?callback=${callbackName}&translationFileName=${translationFileName}`;
			script.src = url;

			// Append the script to the document body
			document.body.appendChild(script);
			// console.log('SCRIPT JSONP CREATED ...');
			
			// Resolve the promise once the data is loaded
			window[callbackName] = (data) => {
				// console.log('LOOKING IN DATA:', data);
				// console.log('CALLING HANDLE ...');
				handleDataTranslationTableResponse(data);
				// console.log('DONE HANDLE ...');
				resolve(data);
			};

			// Reject the promise if an error occurs
			script.onerror = (error) => {
			  reject(error);
			};
		});
	}
	
	

    // Event handler for switch state change
    langSwitch.onchange = function() {
	  
		// Show the loading container
		loadingContainer.style.display = 'block'; 
	  
		// Call the translation function
		translatePage("translation")
		.then(data => {
			// console.log('Translation completed');
		  
			// Update the switch text after translation
			smallElement.setAttribute('data-text', langSwitch.checked ? 'FR' : 'EN');        

			// Hide the loading container
			loadingContainer.style.display = 'none';		  
        })
		.catch(error => {
			console.error('Error loading data:', error);
		});	  
    };
	
	// To change the background color of the navbar based on scroll position
	if (window.scrollY > 50) { 
		navbar.classList.add('scrolled'); 
	}
	
	window.addEventListener('scroll', () => {
		if (window.scrollY > 50) { // Change 50 to another value if needed
			navbar.classList.add('scrolled');
		} else {
			navbar.classList.remove('scrolled');
		}
	});
	
	/** BACK TO TOP AND SCROLLTO */
	
	const backToTopBtn = document.getElementById('backToTopBtn');
	const homeSection = document.getElementById('home'); 

	// Show or hide the button based on the page's scroll position
	if (window.scrollY > homeSection.offsetHeight) {
		backToTopBtn.style.display = 'flex'; // Show the button when the page is just loaded and home section is fully scrolled
	}
	window.addEventListener('scroll', function() {
		if (window.scrollY > homeSection.offsetHeight) {
			backToTopBtn.style.display = 'flex'; // Again, show the button when the home section is fully scrolled
		} else {
			backToTopBtn.style.display = 'none'; // Hide the button when the home section is visible
		}
	});

	const links = document.querySelectorAll('.scrollto');
	const icon = document.querySelector('.mobile-toggler');

	links.forEach(function(link) {
		link.addEventListener('click', function(event) {
			event.preventDefault(); // Prevent the default link behavior
		  
			$('.navbar-collapse').collapse('hide');
			icon.classList.remove('bi-x');
			icon.classList.add('bi-list');
			const targetId = this.getAttribute('href'); // Get the ID of the target section
		  
			// console.log(targetId);
			const targetSection = document.querySelector(targetId); // Select the target section

			if (targetSection) {
				const offsetAdjustment = 35; // Adjust this value to whatever offset you need
				
				// Scroll to the target section
				window.scrollTo({
					top: targetSection.offsetTop - offsetAdjustment, // Vertical position of the target section
					behavior: 'smooth' // Smooth scrolling
				});
			}
		});
	});
  
	// Add event listener to navbar-toggler to transform icon to "X"
	const navbarMenu = document.getElementById('navbar-menu');
	const navbarToggler = document.querySelector('.navbar-toggler');
	// const icon = navbarToggler.querySelector('.mobile-toggler');
  
	if (!navbarMenu.classList.contains('show')) {
		// console.log(navbarMenu.classList.contains('show'));
		navbarToggler.classList.add('collapsed');        
    }
  
    navbarToggler.addEventListener('click', function() {
		// event.stopPropagation(); // Prevent click propagation to avoid immediate closure
		// navbarMenu.classList.toggle('collapsed');
		if (this.classList.contains('collapsed')) {
			// console.log(this.classList.contains('collapsed'));
			icon.classList.remove('bi-list');
			icon.classList.add('bi-x');
        
		} else {
			// console.log(this.classList.contains('collapsed'));
			icon.classList.remove('bi-x');
			icon.classList.add('bi-list');
		}
        this.classList.toggle('collapsed');
    });
	
	document.addEventListener('click', (event) => {
		if (!navbar.contains(event.target) && !navbarMenu.classList.contains('collapsed')) {
			icon.classList.remove('bi-x');
			icon.classList.add('bi-list');
			// console.log(navbar);
			//navbarMenu.classList.toggle('collapsed');
			$('.navbar-collapse').collapse('hide');
		}
	});
	
	
	// Update active class on page loading and based on scroll position
	function updateActiveNavLink() {
		// console.log('SCROLLING...');
		var scrollPos = $(document).scrollTop();
		const offsetAdjustment = 35; // Adjust this value to whatever offset you need
		// console.log($('.navbar-nav .scrollto'));
		$('.navbar-nav .scrollto').each(function() {
			var currLink = $(this);			
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top + offsetAdjustment <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {				
				$('.scrollto').removeClass("active");
				currLink.addClass("active");
			}
		});
	}
	// On page loading...
	updateActiveNavLink();
	
	// Based on scroll position...
    $(document).on('scroll', updateActiveNavLink);
});

/**
********************************************************************
HOME SECTION
********************************************************************
*/

/**
********************************************************************
ABOUT SECTION
********************************************************************
*/

/**
********************************************************************
SERVICES SECTION
********************************************************************
*/

/**
********************************************************************
PORTFOLIO SECTION
********************************************************************
*/

/**
********************************************************************
CONTACT SECTION
********************************************************************
*/

// Function to show the cancel button
function showCancelButton() {
	document.getElementById('cancel-button').style.display = 'inline-block';
}

// Add event listeners to input fields to show the cancel button on input
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(function(input) {
	input.addEventListener('input', showCancelButton);
});

// Event listener for cancel button
document.getElementById('cancel-button').addEventListener('click', function() {
	document.getElementById('contactForm').reset();
	this.style.display = 'none';
});

function submitForm() {
	const form = document.getElementById('contactForm'); // Get a reference to the form element
	const formData = new FormData(form);   
	const jsonData = {};

	formData.forEach((value, key) => {
		jsonData[key] = value;
	});
	
	const targetUrl = `https://script.google.com/macros/s/AKfycbzoT9vi2XKuF3A4Mk6Ahh3uhRFkI7SYBfaMvCQ0rF2_L4ynQvqia6uANxl61kN9SKmW/exec`; 
	// Use CORS Anywhere to fetch the data
	// const corsProxy = 'https://cors-anywhere.herokuapp.com/';
	// const url = corsProxy + targetUrl;

	fetch(targetUrl, {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(jsonData)
	})
	.then(response => {
		// console.log(response);
		if (!response.status === 200) {
			throw new Error('Error submitting the form');
		}
		
		// Confirm a successful form submission
		document.getElementById('sent-message').style.display = 'block';
		// Reset the form
		form.reset();
		// Hide the cancel button
		document.getElementById('cancel-button').style.display = 'none';
		  
	})
	.catch(error => {
		console.error('Error:', error);
		alert('An error occurred while submitting the form');
	});

	return false;
}


/**
********************************************************************
FOOTER SECTION
********************************************************************
*/

document.addEventListener('DOMContentLoaded', function () { 

    // Prevent default action for the link to avoid the page from scrolling to the anchor.
	
	const footerLegalLinks = document.querySelectorAll('.footer-links .with-modal');
	const modalObservers = {};
	
	footerLegalLinks.forEach(function(link) {
		link.addEventListener('click', function(event) {
			event.preventDefault(); 
			
			// if (observer) {console.log(id); observer.disconnect();}
			
			// Loading the loadingContainer
			var loadgbox = document.querySelector('.modal .modal-body #loading-container-gbox');
			var id = link.getAttribute('href').replace('#','');
			// console.log(id);
			
			// Select the modal element
			var modal = document.getElementById(id);
			var modalBody = document.querySelector('#'+id+' .modal-body');
			// console.log(modal);
			
			// Create an instance of MutationObserver
			modalObservers[id] = new MutationObserver(function(mutationsList) {
				for (var mutation of mutationsList) {
					if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
						if (modal.classList.contains('show')) {
							// console.log('Modal has class "show"');
						} else {
							// console.log('Modal does not have class "show"');
							modalBody.innerHTML = "";
							
							modalBody.innerHTML = '<div class=" mx-2" id="loading-container-gbox"> <div class="loading-spinner"></div> </div>';
							modalBody.classList.add('d-flex','justify-content-center','align-items-center');
							// console.log('end '+id);
						}
					}
				}
			});

			// Start observing the modal for class attribute changes
			modalObservers[id].observe(modal, { attributes: true });

			// Optionally, you can disconnect the observer later if needed
			// observer.disconnect();
			// console.log(modalObservers);
		});
	});	
	
	
	// Define the callback function that will handle the JSONP response
    function handleResponse(data) {
		// console.log('HANDLE FUNCTION LAUNCHED ...');
		// console.log('JSON Object:', data);

		// Insert the HTML content into the modal body
		var legalItem = data.legalItem.replace('-fr',''); 
		// console.log('in handler: '+legalItem);
		var modalBody = document.querySelector('#'+legalItem+'-modal .modal-body');
		if (modalBody) {
			// console.log('SETTING MODAL BODY ...');
			
			modalBody.classList.remove("d-flex", "justify-content-center", "align-items-center");
			modalBody.classList.add("text-left");
			
			$('.modal-body').scrollTop(0);
			modalBody.innerHTML = data.htmlContent; // Assuming the key in the JSON object is 'htmlContent'
			
		} else {
			console.error('Modal body element not found.');
		}

		// Clean up the dynamically created script
		var script = document.getElementById('jsonp-script');
		if (script) {
			document.body.removeChild(script);
			// console.log('SCRIPT JSONP REMOVED ...');
		}
    }
	
	function fetchAndInsertHTML(legalItem) {
		// console.log('FETCH FUNCTION LAUNCHED ...');
		// console.log('LEGAL ITEM: '+legalItem);
		
		return new Promise((resolve, reject) => {
		
			// Create a script element for the JSONP request
			const script = document.createElement('script');
			  
			// Set an ID for the script element to facilitate cleanup
			script.id = 'jsonp-script';

			// Define a unique callback function name
			const callbackName = 'handleResponse';
			//var item = "privacyPolicy"
			// Set the src attribute of the script element to the JSONP URL
			const url = `https://script.google.com/macros/s/AKfycbw9b9c7UjkyYXTZO6sLZXhDcxydMDxroq65Z0IIkRjvlhe0O0IzeIdrMh0xyu4VwGMD/exec?callback=${callbackName}&legalItem=${legalItem}`;
			script.src = url;

			// Append the script to the document body
			document.body.appendChild(script);
			// console.log('SCRIPT JSONP CREATED ...');
			
			// Resolve the promise once the data is loaded
			window[callbackName] = (data) => {
				// console.log('LOOKING IN DATA:', data);
				// console.log('CALLING HANDLE ...');
				handleResponse(data);
				// console.log('DONE HANDLE ...');
				resolve(data);
			};

			// Reject the promise if an error occurs
			script.onerror = (error) => {
			  reject(error);
			};
		});
    }
	
	
	// Capture the modal show event
	// var privacyPolicyModal = document.getElementById('privacy-policy-modal');
	// console.log(privacyPolicyModal);
	
	$('#legal-notice-modal, #privacy-policy-modal, #photo-credits-modal').each(function() {
		$(this).on('shown.bs.modal', function () {
			
			// console.log('Modal is now shown. JQUERY');
			// Add the code here that you want to execute when the modal opens
			
			var id = this.getAttribute('id');
			// console.log('LEGAL ID...');
			// console.log(id);
		  
			// Loading the loadingContainer
			var loadgbox = document.querySelector('#'+id+' .modal-body #loading-container-gbox');
			// loadgbox.style.display = 'block';
			
			
			// var legal = href.replace('#', '');
			var legal = id.replace('-modal', '');
			
			var currentLang = document.querySelector('body').lang;
			if (currentLang === "fr") {
				legal = legal+"-fr";
			}
			
			if (loadgbox) {
				
				fetchAndInsertHTML(legal)
				.then(data => {
					// console.log('Data loaded successfully:', data);
				})
				.catch(error => {
					console.error('Error loading data:', error);
				});
			} 
		});
	});
});
