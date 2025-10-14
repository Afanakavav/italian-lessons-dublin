// Configuration file for Italian Lessons Dublin
// Update these values with your actual API keys and settings

const CONFIG = {
    // Google Analytics
    GA_MEASUREMENT_ID: 'G-WTT3TQN19C', // Your Google Analytics ID (update with new one if needed)
    
    // Google Maps API
    GOOGLE_MAPS_API_KEY: 'YOUR_API_KEY', // Replace with your Google Maps API key
    
    // Contact Information
    CONTACT: {
        email: 'francesco.perone00@gmail.com',
        phone: '+353 89 404 0077',
        whatsapp: '353894040077', // Without + sign for WhatsApp links
        location: 'Dublin, Ireland'
    },
    
    // Available Time Slots (update these with your actual availability)
    AVAILABLE_SLOTS: [
        'Monday 10:00',
        'Monday 14:00',
        'Tuesday 10:00',
        'Tuesday 16:00',
        'Wednesday 11:00',
        'Wednesday 15:00',
        'Thursday 10:00',
        'Thursday 14:00',
        'Friday 10:00',
        'Friday 16:00'
    ],
    
    // Dublin Map Coordinates
    MAP_CENTER: {
        lat: 53.3498,
        lng: -6.2603
    },
    
    // Special Offer Settings
    OFFER: {
        title: 'First lesson FREE for new students!',
        countdownHours: 24, // Hours for countdown timer
        enabled: true
    },
    
    // Video Settings
    VIDEO: {
        enabled: true,
        path: 'videos/francesco-intro.mp4',
        autoplay: false // Set to true if you want video to autoplay
    },
    
    // Analytics Events
    EVENTS: {
        quiz_completed: 'quiz_completed',
        game_completed: 'game_completed',
        booking_modal_opened: 'booking_modal_opened',
        time_slot_selected: 'time_slot_selected',
        booking_confirmed: 'booking_confirmed',
        custom_time_requested: 'custom_time_requested',
        whatsapp_clicked: 'whatsapp_clicked',
        video_opened: 'video_opened'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
