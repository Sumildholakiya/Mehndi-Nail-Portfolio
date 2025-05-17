// Utility Functions
// Function to get a random avatar icon based on user ID or key
function getAvatarIcon(key) {
    // Map different keys to different Font Awesome user icons
    const avatarIcons = {
        'user1': 'fas fa-user-circle',
        'user2': 'fas fa-user',
        'user3': 'fas fa-user-tie',
        'user4': 'fas fa-user-graduate',
        'default': 'fas fa-user-alt'
    };

    // Return the appropriate icon class, or default if not found
    return avatarIcons[key] || avatarIcons['default'];
}

// Data
const services = [
    {
        id: "1",
        title: "Bridal Mehndi",
        description: "Adorn your hands and feet with exquisite bridal mehndi designs. Our services offer personalized consultations, custom patterns, and flawless application to complement your wedding attire.",
        image: "./Assets/bridal-mehndi.jpeg"
    },
    {
        id: "2",
        title: "Engagement Mehndi",
        description: "Celebrate your engagement with elaborate and intricate mehndi designs. Our services include personalized consultation, flawless application to complement your attire.",
        image: "./Assets/engagement-mehndi.jpeg"
    },
    {
        id: "3",
        title: "Baby Shower Mehndi",
        description: "Elaborate and intricate designs to celebrate this joyful occasion. Our baby shower mehndi services include consultation, flawless application to complement your celebration attire.",
        image: "./Assets/baby-shower.jpeg"
    },
    {
        id: "4",
        title: "Sider Mehndi",
        description: "Add intricate and elegant designs to your side with our sider mehndi service. We offer personalized consultations, custom designs, and flawless application for a stunning look.",
        image: "./Assets/sider.jpeg"
    },
    {
        id: "5",
        title: "Hand Mehndi",
        description: "Beautify your hands with elaborate mehndi designs. Our hand mehndi service includes personalized consultation, flawless application to complement your style.",
        image: "./Assets/hand-mehndi.jpeg"
    },
    {
        id: "6",
        title: "Leg Mehndi",
        description: "Adorn your legs with intricate and elegant mehndi designs. Our leg mehndi service includes personalized consultation, custom designs, and flawless application for a stunning look.",
        image: "./Assets/leg-mehndi.jpeg"
    },
    {
        id: "7",
        title: "Gel Polish",
        description: "Get vibrant, long-lasting color with our gel polish service. We offer personalized consultations, custom designs, and precise application to enhance your nails for any occasion.",
        image: "./Assets/gel-polish.jpeg"
    },
    {
        id: "8",
        title: "Extension",
        description: "Enhance your nails with beautiful and durable extensions. Our service includes personalized consultations, custom designs, and flawless application to suit your style and needs.",
        image: "./Assets/extension.jpeg"
    },
    {
        id: "9",
        title: "Gel Extension",
        description: "Achieve elegant and long-lasting nails with our gel extension service. We provide a thorough consultation, creative designs, and meticulous application for a flawless finish.",
        image: "./Assets/gel-extension.jpeg"
    },
    {
        id: "10",
        title: "Acrylic nails",
        description: "Transform your nails with durable and stunning acrylic extensions. We offer personalized consultations, custom designs, and expert application to create the perfect nail look.",
        image: "./Assets/acrylic.jpeg"
    },
    {
        id: "11",
        title: "Temporary extension",
        description: "Enhance your nails with stylish and versatile temporary extensions. Our services include a personalized consultation, custom design, and precise application for a flawless finish.",
        image: "./Assets/temporary-extension.jpeg"
    }
];

const galleryItems = [
    {
        id: "1",
        image: "./Assets/mehndi1.jpeg",
        alt: "mehndi1",
        category: "mehndi"
    },
    {
        id: "2",
        image: "./Assets/nail1.jpeg",
        alt: "nail1",
        category: "nail"
    },
    {
        id: "3",
        image: "./Assets/mehndi2.jpeg",
        alt: "mehndi2",
        category: "mehndi"
    },
    {
        id: "4",
        image: "./Assets/nail2.jpeg",
        alt: "nail2",
        category: "nail"
    },
    {
        id: "5",
        image: "./Assets/mehndi3.jpeg",
        alt: "mehndi3",
        category: "mehndi"
    },
    {
        id: "6",
        image: "./Assets/nail3.jpeg",
        alt: "nail3",
        category: "nail"
    },
    {
        id: "7",
        image: "./Assets/mehndi4.jpeg",
        alt: "mehndi4",
        category: "mehndi"
    },
    {
        id: "8",
        image: "./Assets/nail4.jpeg",
        alt: "nail4",
        category: "nail"
    },
    {
        id: "9",
        image: "./Assets/mehndi5.jpeg",
        alt: "mehndi5",
        category: "mehndi"
    },
    {
        id: "10",
        image: "./Assets/mehndi6.jpeg",
        alt: "mehndi6",
        category: "mehndi"
    },
    {
        id: "11",
        image: "./Assets/nail5.jpeg",
        alt: "nail5",
        category: "nail"
    },
    {
        id: "12",
        image: "./Assets/mehndi7.jpeg",
        alt: "mehndi7",
        category: "mehndi"
    },
    {
        id: "13",
        image: "./Assets/nail6.jpeg",
        alt: "nail6",
        category: "nail"
    },
    {
        id: "14",
        image: "./Assets/mehndi8.jpeg",
        alt: "mehndi8",
        category: "mehndi"
    },
    {
        id: "15",
        image: "./Assets/nail7.jpeg",
        alt: "nail7",
        category: "nail"
    },
    {
        id: "16",
        image: "./Assets/mehndi9.jpeg",
        alt: "mehndi9",
        category: "mehndi"
    },
    {
        id: "17",
        image: "./Assets/nail8.jpeg",
        alt: "nail8",
        category: "nail"
    },
    {
        id: "18",
        image: "./Assets/mehndi10.jpeg",
        alt: "mehndi10",
        category: "mehndi"
    }
    ,
    {
        id: "19",
        image: "./Assets/nail9.jpeg",
        alt: "nail9",
        category: "nail"
    },
    ,
    {
        id: "20",
        image: "./Assets/nail10.jpeg",
        alt: "nail10",
        category: "nail"
    },
    {
        id: "21",
        image: "./Assets/mehndi11.jpeg",
        alt: "mehndi11",
        category: "mehndi"
    }
];

const testimonials = [
    {
        id: "1",
        name: "Priya Sharma",
        role: "Bridal Client",
        avatar: "user1", // Will be used to select an avatar icon
        comment: "Radha created the most beautiful bridal mehndi for me. Her attention to detail and the intricacy of her work is absolutely stunning. My guests couldn't stop admiring it!",
        rating: 5
    },
    {
        id: "2",
        name: "Aditi Patel",
        role: "Regular Client",
        avatar: "user2",
        comment: "I've been going to Radha for nail art for over a year now. Her designs are always on trend, and she has such a steady hand. The compliments I receive are endless!",
        rating: 5
    },
    {
        id: "3",
        name: "Anita Patel",
        role: "Event Client",
        avatar: "user3",
        comment: "Radha did mehndi for my entire family during my sister's wedding. Her patience and skill are remarkable. She worked tirelessly to ensure everyone got beautiful designs. Highly recommend!",
        rating: 4.5
    },
    {
        id: "4",
        name: "Priya Desai",
        role: "Nail Art Client",
        avatar: "user4",
        comment: "The nail art Radha created for my birthday was absolutely stunning! She took my vague idea and turned it into something beautiful and unique. Will definitely be returning!",
        rating: 5
    },
    {
        id: "5",
        name: "Rina Shah",
        role: "Nail Art Client",
        avatar: "user3",
        comment: "Went to Radha for nail art and she nailed it—literally! Super clean work, beautiful designs, and such a sweet person to work with.",
        rating: 5
    },
    {
        id: "6",
        name: "Neha Mehta",
        role: "Bridal Client",
        avatar: "user1",
        comment: "From mehndi to nails, Radha made me feel like a perfect bride! Her designs were flawless, and she really understood my vision. So glad I chose her for my special day!",
        rating: 4.5
    },
    {
        id: "7",
        name: "Shruti Joshi",
        role: "Regular Client",
        avatar: "user2",
        comment: "Radha did mehndi for my engagement and I couldn’t be happier. Her designs were beautiful and detailed, and she was so patient throughout. Highly recommend her for any occasion!",
        rating: 5
    },
    {
        id: "8",
        name: "Komal Bhatt",
        role: "Event Client",
        avatar: "user3",
        comment: "Radha did my nails for a party and I loved them! The designs were trendy and neat, and she made the whole experience so fun. Highly recommended!",
        rating: 5
    },
    {
        id: "9",
        name: "Pooja Trivedi",
        role: "Nail Art Client",
        avatar: "user4",
        comment: "Got my nails done by Radha and they turned out gorgeous! She’s super creative and paid attention to every little detail. Totally recommend her for nail art! ",
        rating: 5
    },
    {
        id: "10",
        name: "Snehal Vora",
        role: "Event Client",
        avatar: "user3",
        comment: "Radha applied mehndi for my cousin’s wedding and did an amazing job. Her designs were elegant, and she made everyone feel comfortable. Would definitely call her again!",
        rating: 5
    }
];

// DOM Elements
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const header = document.querySelector('.header');
const servicesGrid = document.getElementById('services-grid');
const galleryGrid = document.getElementById('gallery-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const testimonialsContainer = document.getElementById('testimonials-container');
const sliderDots = document.getElementById('slider-dots');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const bookingForm = document.getElementById('booking-form');
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');
const toast = document.getElementById('toast');
const toastTitle = document.getElementById('toast-title');
const toastMessage = document.getElementById('toast-message');
const toastIcon = document.getElementById('toast-icon');
const toastClose = document.getElementById('toast-close');
const currentYear = document.getElementById('current-year');

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    // Set current year
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Load services
    loadServices();

    // Load gallery
    loadGallery();

    // Initialize testimonials slider
    initTestimonialsSlider();

    // Setup form validations
    setupFormValidations();
});

// Mobile Menu
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
        mobileMenu.classList.add('active');
    });
}

if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
    });
}

if (mobileNavLinks) {
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
        });
    });
}

// Header Scroll Effect
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Load Services
function loadServices() {
    if (!servicesGrid) return;

    servicesGrid.innerHTML = '';

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-image">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="service-content">
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
                <a href="#booking" class="service-link">Book Your Appointment →</a>
            </div>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Load Gallery
function loadGallery() {
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';

    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${item.category}`;
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.alt}">
        `;
        galleryGrid.appendChild(galleryItem);
    });

    // Set default filter
    filterGallery('all');

    // Add filter event listeners
    if (filterButtons) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                const filter = this.getAttribute('data-filter');

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter gallery
                filterGallery(filter);
            });
        });
    }
}

// Filter Gallery
function filterGallery(filter) {
    if (!galleryGrid) return;

    const items = galleryGrid.querySelectorAll('.gallery-item');

    items.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Testimonials Slider
function initTestimonialsSlider() {
    if (!testimonialsContainer || !sliderDots) return;

    // Add testimonials to slider
    testimonials.forEach((testimonial, index) => {
        // Create testimonial card
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';

        // Generate stars
        let starsHTML = '';
        for (let i = 0; i < Math.floor(testimonial.rating); i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }

        if (testimonial.rating % 1 !== 0) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }

        // Get avatar icon based on testimonial avatar value
        const avatarIcon = getAvatarIcon(testimonial.avatar);

        testimonialCard.innerHTML = `
            <div class="testimonial-inner">
                <div class="testimonial-rating">
                    ${starsHTML}
                </div>
                <p class="testimonial-text">"${testimonial.comment}"</p>
                <div class="testimonial-author">
                    <div class="author-avatar">
                        <i class="${avatarIcon}"></i>
                    </div>
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `;

        testimonialsContainer.appendChild(testimonialCard);

        // Create dot for this testimonial
        const dot = document.createElement('div');
        dot.className = 'slider-dot';
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('data-index', index);
        dot.addEventListener('click', function () {
            goToSlide(index);
        });

        sliderDots.appendChild(dot);
    });

    // Initialize slider
    let currentSlide = 0;
    const totalSlides = testimonials.length;

    // Set initial state
    updateSliderPosition();

    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSliderPosition();
        });
    }

    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSliderPosition();
        });
    }

    // Go to specific slide (using the global function)
    window.goToSlide = function (index) {
        currentSlide = index;
        updateSliderPosition();
    };

    // Update slider position
    function updateSliderPosition() {
        testimonialsContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update dots
        const dots = sliderDots.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Auto slide
    let autoSlideInterval = setInterval(function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSliderPosition();
    }, 5000);

    // Pause auto slide on hover
    testimonialsContainer.addEventListener('mouseenter', function () {
        clearInterval(autoSlideInterval);
    });

    testimonialsContainer.addEventListener('mouseleave', function () {
        autoSlideInterval = setInterval(function () {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSliderPosition();
        }, 5000);
    });
}

// Form validations
function setupFormValidations() {
    // Booking form
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (validateBookingForm()) {
                // In a real app, you'd send this data to a server
                // For now, we'll just show a success message
                showToast('Booking Request Submitted', "We'll contact you shortly to confirm your appointment.", 'success');
                bookingForm.reset();
            }
        });
    }

    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (validateContactForm()) {
                // In a real app, you'd send this data to a server
                // For now, we'll just show a success message
                showToast('Message Sent', 'Thank you for your message. We\'ll get back to you soon!', 'success');
                contactForm.reset();
            }
        });
    }

    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (validateNewsletterForm()) {
                // In a real app, you'd send this data to a server
                // For now, we'll just show a success message
                showToast('Subscribed', 'You\'ve been successfully subscribed to our newsletter!', 'success');
                newsletterForm.reset();
            }
        });
    }
}

// Validate booking form
function validateBookingForm() {
    let isValid = true;

    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');

    if (!name.value.trim() || name.value.trim().length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        nameError.classList.add('visible');
        isValid = false;
    } else {
        nameError.textContent = '';
        nameError.classList.remove('visible');
    }

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.classList.add('visible');
        isValid = false;
    } else {
        emailError.textContent = '';
        emailError.classList.remove('visible');
    }

    // Phone validation
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');

    if (!phone.value.trim() || phone.value.trim().length < 10) {
        phoneError.textContent = 'Please enter a valid phone number';
        phoneError.classList.add('visible');
        isValid = false;
    } else {
        phoneError.textContent = '';
        phoneError.classList.remove('visible');
    }

    // Service validation
    const service = document.getElementById('service');
    const serviceError = document.getElementById('service-error');

    if (!service.value) {
        serviceError.textContent = 'Please select a service';
        serviceError.classList.add('visible');
        isValid = false;
    } else {
        serviceError.textContent = '';
        serviceError.classList.remove('visible');
    }

    // Date validation
    const date = document.getElementById('date');
    const dateError = document.getElementById('date-error');

    if (!date.value) {
        dateError.textContent = 'Please select a date';
        dateError.classList.add('visible');
        isValid = false;
    } else {
        dateError.textContent = '';
        dateError.classList.remove('visible');
    }

    // Time validation
    const time = document.getElementById('time');
    const timeError = document.getElementById('time-error');

    if (!time.value) {
        timeError.textContent = 'Please select a time';
        timeError.classList.add('visible');
        isValid = false;
    } else {
        timeError.textContent = '';
        timeError.classList.remove('visible');
    }

    return isValid;
}

// Validate contact form
function validateContactForm() {
    let isValid = true;

    // Name validation
    const name = document.getElementById('contact-name');
    const nameError = document.getElementById('contact-name-error');

    if (!name.value.trim() || name.value.trim().length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        nameError.classList.add('visible');
        isValid = false;
    } else {
        nameError.textContent = '';
        nameError.classList.remove('visible');
    }

    // Email validation
    const email = document.getElementById('contact-email');
    const emailError = document.getElementById('contact-email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.classList.add('visible');
        isValid = false;
    } else {
        emailError.textContent = '';
        emailError.classList.remove('visible');
    }

    // Subject validation
    const subject = document.getElementById('subject');
    const subjectError = document.getElementById('subject-error');

    if (!subject.value.trim() || subject.value.trim().length < 2) {
        subjectError.textContent = 'Subject is required';
        subjectError.classList.add('visible');
        isValid = false;
    } else {
        subjectError.textContent = '';
        subjectError.classList.remove('visible');
    }

    // Message validation
    // const message = document.getElementById('message');
    // const messageError = document.getElementById('message-error');

    // if (!message.value.trim() || message.value.trim().length < 10) {
    //     messageError.textContent = 'Message must be at least 10 characters';
    //     messageError.classList.add('visible');
    //     isValid = false;
    // } else {
    //     messageError.textContent = '';
    //     messageError.classList.remove('visible');
    // }

    return isValid;
}

function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Phone number and country code
const phoneNumber = '9512722423';
const countryCode = '91'; // India country code

// Message you want to send
const message = 'Hi! Radha! I’d love to know more about the mehndi and nail art services offered by Radha Mehndi & Nail Art. Can you share information about your designs and pricing?';

// Generate the WhatsApp link
let whatsappLink;

// If mobile, the number should be used without the country code
if (isMobile()) {
    whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
} else {
    whatsappLink = `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(message)}`;
}

// Set the WhatsApp link to the anchor tag
document.getElementById('whatsapp-link').href = whatsappLink;

// Validate newsletter form
function validateNewsletterForm() {
    let isValid = true;

    // Email validation
    const email = document.getElementById('newsletter-email');
    const emailError = document.getElementById('newsletter-email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.classList.add('visible');
        isValid = false;
    } else {
        emailError.textContent = '';
        emailError.classList.remove('visible');
    }

    return isValid;
}

// Show toast notification
function showToast(title, message, type = 'success') {
    if (!toast || !toastTitle || !toastMessage || !toastIcon) return;

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    // Clear existing classes
    toastIcon.classList.remove('success', 'error', 'warning', 'info');

    if (type === 'success') {
        toastIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        toastIcon.classList.add('success');
    } else if (type === 'error') {
        toastIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        toastIcon.classList.add('error');
    } else if (type === 'warning') {
        toastIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
        toastIcon.classList.add('warning');
    } else if (type === 'info') {
        toastIcon.innerHTML = '<i class="fas fa-info-circle"></i>';
        toastIcon.classList.add('info');
    }

    // Show toast
    toast.classList.add('show');

    // Auto hide after 5 seconds
    const toastTimeout = setTimeout(() => {
        hideToast();
    }, 5000);

    // Close button handler (only add once)
    if (!toastClose.hasEventListener) {
        toastClose.addEventListener('click', () => {
            clearTimeout(toastTimeout);
            hideToast();
        });
        toastClose.hasEventListener = true;
    }
}

// Hide toast notification
function hideToast() {
    if (!toast) return;
    toast.classList.remove('show');
}
// Real-time Review Functionality
const reviewForm = document.getElementById('review-form');
const reviewNameInput = document.getElementById('review-name');
const reviewRatingInput = document.getElementById('review-rating');
const reviewServiceInput = document.getElementById('review-service');
const reviewMessageInput = document.getElementById('review-message');

// Function to handle real-time review submission
function setupReviewForm() {
    if (!reviewForm) return;

    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate the form
        const isValid = validateReviewForm();

        if (isValid) {
            // Generate a random avatar key
            const avatarKeys = ['user1', 'user2', 'user3', 'user4'];
            const randomAvatarKey = avatarKeys[Math.floor(Math.random() * avatarKeys.length)];

            // Create a new testimonial object with avatar
            const newTestimonial = {
                id: `new-${Date.now()}`,
                name: reviewNameInput.value,
                role: `${reviewServiceInput.value} Client`,
                avatar: randomAvatarKey,
                comment: reviewMessageInput.value,
                rating: parseInt(reviewRatingInput.value)
            };

            // Add to testimonials array
            testimonials.unshift(newTestimonial);

            // Update the testimonials display
            updateTestimonialsDisplay();

            // Reset the form
            reviewForm.reset();

            // Show success message
            showToast('Review Submitted', 'Thank you for sharing your experience!', 'success');
        }
    });
}

// Function to validate the review form
function validateReviewForm() {
    let isValid = true;
    const nameError = document.getElementById('review-name-error');
    const ratingError = document.getElementById('review-rating-error');
    const serviceError = document.getElementById('review-service-error');
    const messageError = document.getElementById('review-message-error');

    // Reset error messages
    nameError.textContent = '';
    ratingError.textContent = '';
    serviceError.textContent = '';
    messageError.textContent = '';

    // Validate name
    if (!reviewNameInput.value.trim()) {
        nameError.textContent = 'Please enter your name';
        isValid = false;
    }

    // Validate rating
    if (!reviewRatingInput.value) {
        ratingError.textContent = 'Please select a rating';
        isValid = false;
    }

    // Validate service
    if (!reviewServiceInput.value) {
        serviceError.textContent = 'Please select the service you received';
        isValid = false;
    }

    // Validate message
    if (!reviewMessageInput.value.trim()) {
        messageError.textContent = 'Please share your experience';
        isValid = false;
    } else if (reviewMessageInput.value.trim().length < 10) {
        messageError.textContent = 'Your review is too short. Please provide more details';
        isValid = false;
    }

    return isValid;
}

// Function to update the testimonials display with the new review
function updateTestimonialsDisplay() {
    // Clear existing testimonials
    testimonialsContainer.innerHTML = '';
    sliderDots.innerHTML = '';

    // Add testimonials to slider
    testimonials.forEach((testimonial, index) => {
        // Create testimonial item
        const testimonialItem = document.createElement('div');
        testimonialItem.className = 'testimonial-item';
        if (index === 0 && testimonial.id.startsWith('new-')) {
            testimonialItem.classList.add('testimonial-highlight');
        }

        // Generate stars HTML based on rating
        let starsHTML = '';
        for (let i = 0; i < Math.floor(testimonial.rating); i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }

        if (testimonial.rating % 1 !== 0) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }

        // Add empty stars to make total of 5
        const emptyStars = 5 - Math.ceil(testimonial.rating);
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }

        // Get avatar icon based on testimonial avatar value
        const avatarIcon = getAvatarIcon(testimonial.avatar);

        testimonialItem.innerHTML = `
            <div class="testimonial-content">
                <div class="star-rating">${starsHTML}</div>
                <p class="testimonial-text">"${testimonial.comment}"</p>
                <div class="testimonial-author">
                    <div class="author-avatar">
                        <i class="${avatarIcon}"></i>
                    </div>
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `;

        testimonialsContainer.appendChild(testimonialItem);

        // Create dot for testimonial
        const dot = document.createElement('button');
        dot.className = 'slider-dot';
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('data-index', index);
        dot.addEventListener('click', function () {
            goToSlide(index);
        });

        sliderDots.appendChild(dot);
    });

    // Reset slider to first slide (using global function)
    if (window.goToSlide) {
        window.goToSlide(0);
    }
}

// Initialize real-time review functionality
document.addEventListener('DOMContentLoaded', function () {
    setupReviewForm();
});


window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }
  });
  