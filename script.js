// Italian Words Database
const italianWords = [
    { italian: "Ciao", english: "Hello/Goodbye", pronunciation: "/ˈtʃa.o/" },
    { italian: "Grazie", english: "Thank you", pronunciation: "/ˈɡrat.tsje/" },
    { italian: "Prego", english: "You're welcome", pronunciation: "/ˈpre.ɡo/" },
    { italian: "Buongiorno", english: "Good morning", pronunciation: "/bwonˈdʒor.no/" },
    { italian: "Buonasera", english: "Good evening", pronunciation: "/bwonaˈse.ra/" },
    { italian: "Arrivederci", english: "Goodbye", pronunciation: "/ar.ri.veˈder.tʃi/" },
    { italian: "Per favore", english: "Please", pronunciation: "/per faˈvo.re/" },
    { italian: "Scusi", english: "Excuse me", pronunciation: "/ˈsku.zi/" },
    { italian: "Mi dispiace", english: "I'm sorry", pronunciation: "/mi di.spjaˈtʃe/" },
    { italian: "Come stai?", english: "How are you?", pronunciation: "/ˈko.me ˈstai/" },
    { italian: "Bene", english: "Good/Well", pronunciation: "/ˈbe.ne/" },
    { italian: "Male", english: "Bad", pronunciation: "/ˈma.le/" },
    { italian: "Amore", english: "Love", pronunciation: "/aˈmo.re/" },
    { italian: "Famiglia", english: "Family", pronunciation: "/faˈmiʎ.ʎa/" },
    { italian: "Casa", english: "House/Home", pronunciation: "/ˈka.sa/" },
    { italian: "Cibo", english: "Food", pronunciation: "/ˈtʃi.bo/" },
    { italian: "Acqua", english: "Water", pronunciation: "/ˈak.kwa/" },
    { italian: "Vino", english: "Wine", pronunciation: "/ˈvi.no/" },
    { italian: "Pizza", english: "Pizza", pronunciation: "/ˈpit.tsa/" },
    { italian: "Pasta", english: "Pasta", pronunciation: "/ˈpas.ta/" },
    { italian: "Gelato", english: "Ice cream", pronunciation: "/dʒeˈla.to/" },
    { italian: "Caffè", english: "Coffee", pronunciation: "/kafˈfɛ/" },
    { italian: "Bella", english: "Beautiful", pronunciation: "/ˈbel.la/" },
    { italian: "Bello", english: "Beautiful/Handsome", pronunciation: "/ˈbel.lo/" },
    { italian: "Grazioso", english: "Graceful", pronunciation: "/ɡraˈtʃo.zo/" }
];

// Game Database
const gameItems = [
    { icon: "fas fa-pizza-slice", word: "pizza", options: ["Pizza", "Pasta", "Gelato"], correct: 0 },
    { icon: "fas fa-coffee", word: "caffè", options: ["Coffee", "Tea", "Juice"], correct: 0 },
    { icon: "fas fa-car", word: "macchina", options: ["Car", "Bike", "Bus"], correct: 0 },
    { icon: "fas fa-home", word: "casa", options: ["House", "School", "Shop"], correct: 0 },
    { icon: "fas fa-heart", word: "amore", options: ["Love", "Hate", "Like"], correct: 0 },
    { icon: "fas fa-book", word: "libro", options: ["Book", "Magazine", "Newspaper"], correct: 0 }
];

// Global Variables
let currentWordIndex = 0;
let currentGameIndex = 0;
let selectedTimeSlot = null;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    startCountdown();
    loadRandomWord();
    loadRandomGame();
    initMap();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Initialize page elements
function initializePage() {
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Quiz Functions
function checkAnswer(button, isCorrect) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => {
        option.disabled = true;
        if (option === button) {
            option.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
    });
    
    setTimeout(() => {
        document.getElementById('quizQuestion').style.display = 'none';
        document.getElementById('quizResult').style.display = 'block';
        
        // Track quiz completion
        gtag('event', 'quiz_completed', {
            'event_category': 'engagement',
            'event_label': 'italian_quiz'
        });
    }, 1000);
}

// Word of the Day Functions
function loadRandomWord() {
    const randomIndex = Math.floor(Math.random() * italianWords.length);
    const word = italianWords[randomIndex];
    
    document.getElementById('italianWord').textContent = word.italian;
    document.getElementById('englishTranslation').textContent = word.english;
    document.getElementById('pronunciation').textContent = word.pronunciation;
    
    currentWordIndex = randomIndex;
}

function getNewWord() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * italianWords.length);
    } while (newIndex === currentWordIndex && italianWords.length > 1);
    
    currentWordIndex = newIndex;
    loadRandomWord();
    
    // Add animation
    const wordCard = document.querySelector('.word-card');
    wordCard.style.transform = 'scale(0.95)';
    setTimeout(() => {
        wordCard.style.transform = 'scale(1)';
    }, 150);
}

// Mini Game Functions
function loadRandomGame() {
    const randomIndex = Math.floor(Math.random() * gameItems.length);
    const game = gameItems[randomIndex];
    
    document.getElementById('gameImage').innerHTML = `<i class="${game.icon}"></i>`;
    
    const optionsContainer = document.getElementById('gameOptions');
    optionsContainer.innerHTML = '';
    
    game.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'game-option';
        button.textContent = option;
        button.onclick = () => checkGameAnswer(button, game.word, index === game.correct);
        optionsContainer.appendChild(button);
    });
    
    currentGameIndex = randomIndex;
}

function checkGameAnswer(button, correctWord, isCorrect) {
    const options = document.querySelectorAll('.game-option');
    options.forEach(option => {
        option.disabled = true;
        if (option === button) {
            option.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
    });
    
    if (isCorrect) {
        setTimeout(() => {
            document.getElementById('gameOptions').style.display = 'none';
            document.getElementById('gameResult').style.display = 'block';
            
            // Track game completion
            gtag('event', 'game_completed', {
                'event_category': 'engagement',
                'event_label': 'italian_word_game'
            });
        }, 1000);
    }
}

// Booking Modal Functions
function openBookingModal() {
    document.getElementById('bookingModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Track modal opening
    gtag('event', 'booking_modal_opened', {
        'event_category': 'conversion',
        'event_label': 'lesson_booking'
    });
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset form
    document.getElementById('selectedSlot').style.display = 'none';
    selectedTimeSlot = null;
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
}

function selectTimeSlot(button, time) {
    // Remove previous selection
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
    
    // Add selection to clicked button
    button.classList.add('selected');
    selectedTimeSlot = time;
    
    // Show confirmation section
    document.getElementById('selectedTime').textContent = time;
    document.getElementById('selectedSlot').style.display = 'block';
    
    // Track time slot selection
    gtag('event', 'time_slot_selected', {
        'event_category': 'conversion',
        'event_label': time
    });
}

function confirmBooking() {
    if (selectedTimeSlot) {
        // Create WhatsApp message
        const message = `Ciao Francesco! I'd like to book a lesson for ${selectedTimeSlot}. Can you confirm this time slot?`;
        const whatsappUrl = `https://wa.me/353894040077?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Track booking confirmation
        gtag('event', 'booking_confirmed', {
            'event_category': 'conversion',
            'event_label': selectedTimeSlot
        });
        
        // Close modal
        closeBookingModal();
        
        // Show success message
        showNotification('Booking request sent! Check your WhatsApp for confirmation.', 'success');
    }
}

// Custom time form submission
document.addEventListener('DOMContentLoaded', function() {
    const customForm = document.querySelector('.custom-time-form');
    if (customForm) {
        customForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const date = document.getElementById('customDate').value;
            const time = document.getElementById('customTime').value;
            const message = document.getElementById('customMessage').value;
            
            const customMessage = `Ciao Francesco! I'd like to request a lesson on ${date} at ${time}. ${message}`;
            const whatsappUrl = `https://wa.me/353894040077?text=${encodeURIComponent(customMessage)}`;
            
            window.open(whatsappUrl, '_blank');
            
            // Track custom time request
            gtag('event', 'custom_time_requested', {
                'event_category': 'conversion',
                'event_label': `${date} ${time}`
            });
            
            closeBookingModal();
            showNotification('Custom time request sent! Check your WhatsApp for confirmation.', 'success');
        });
    }
});

// WhatsApp Functions
function openWhatsApp() {
    const message = "Ciao Francesco! I'm interested in learning Italian. Can you tell me more about your lessons?";
    const whatsappUrl = `https://wa.me/353894040077?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Track WhatsApp click
    gtag('event', 'whatsapp_clicked', {
        'event_category': 'contact',
        'event_label': 'whatsapp_contact'
    });
}

// Countdown Timer
function startCountdown() {
    // Set countdown to 24 hours from now
    const countdownDate = new Date().getTime() + (24 * 60 * 60 * 1000);
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(timer);
            // Reset countdown
            startCountdown();
        }
    }, 1000);
}

// Google Maps
function initMap() {
    try {
        // Check if Google Maps API is loaded
        if (typeof google === 'undefined' || !google.maps) {
            throw new Error('Google Maps API not loaded');
        }
        
        // One Lime Street coordinates (Lime St & Hanover St E intersection)
        const dublin = { lat: 53.3455, lng: -6.2435 };
    
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: dublin,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }
        ]
    });
    
    // Use traditional Marker (more compatible)
    const marker = new google.maps.Marker({
        position: dublin,
        map: map,
        title: 'Francesco - Italian Lessons in Dublin',
        icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#ce2b37" stroke="#fff" stroke-width="2"/>
                    <text x="20" y="26" text-anchor="middle" fill="white" font-size="16" font-family="Arial">🇮🇹</text>
                </svg>
            `),
            scaledSize: new google.maps.Size(40, 40)
        }
    });
    
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px;">
                <h3 style="margin: 0 0 10px 0; color: #ce2b37;">Francesco's Italian Lessons</h3>
                <p style="margin: 0;">Learn Italian in Dublin with a native speaker!</p>
                <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">One Lime Street, D02 N6C2, Dublin</p>
                <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Contact: +353 89 404 0077</p>
            </div>
        `
    });
    
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
    
    } catch (error) {
        console.error('Google Maps error:', error);
        console.log('Google object:', typeof google);
        console.log('Google maps:', typeof google?.maps);
        
        // Show fallback message with more details
        const mapContainer = document.getElementById('map');
        mapContainer.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: #f8f9fa; color: #666; padding: 20px;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🗺️</div>
                <h3 style="margin-bottom: 1rem; color: #ce2b37;">Francesco's Italian Lessons</h3>
                <p style="text-align: center; margin-bottom: 1rem;">One Lime Street, D02 N6C2, Dublin</p>
                <p style="text-align: center; font-size: 0.9rem; color: #999;">Map temporarily unavailable</p>
                <p style="text-align: center; font-size: 0.8rem; color: #999; margin-top: 1rem;">Error: ${error.message}</p>
            </div>
        `;
    }
}

// Video Modal Functions
function openVideoModal() {
    document.getElementById('videoModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Check if video exists and auto-play
    const video = document.getElementById('introVideo');
    if (video.src && video.src !== window.location.href) {
        video.play().catch(e => {
            console.log('Video autoplay failed:', e);
            // Show message that user needs to click play
            showNotification('Click the play button to start the video', 'info');
        });
    } else {
        // Video not available, show message
        showNotification('Video coming soon! Contact Francesco directly for now.', 'info');
        // Hide the video modal and show contact info instead
        setTimeout(() => {
            closeVideoModal();
            showNotification('Contact Francesco directly: +353 89 404 0077', 'info');
        }, 2000);
    }
    
    // Track video opening
    if (typeof gtag !== 'undefined') {
        gtag('event', 'video_opened', {
            'event_category': 'engagement',
            'event_label': 'intro_video'
        });
    }
}

function closeVideoModal() {
    document.getElementById('videoModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Pause video
    const video = document.getElementById('introVideo');
    video.pause();
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#25D366' : type === 'error' ? '#e74c3c' : '#ce2b37'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        font-weight: 500;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close modals
    if (e.key === 'Escape') {
        closeBookingModal();
        closeVideoModal();
    }
    
    // Space to get new word
    if (e.key === ' ' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        getNewWord();
    }
});

// Add click outside to close modals
window.addEventListener('click', function(e) {
    const bookingModal = document.getElementById('bookingModal');
    const videoModal = document.getElementById('videoModal');
    
    if (e.target === bookingModal) {
        closeBookingModal();
    }
    if (e.target === videoModal) {
        closeVideoModal();
    }
});

// Performance optimization: Lazy load images and videos
function lazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoad);

// Add smooth reveal animation for elements
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });
    
    reveals.forEach(reveal => revealObserver.observe(reveal));
}

// Initialize reveal animations
document.addEventListener('DOMContentLoaded', revealOnScroll);
