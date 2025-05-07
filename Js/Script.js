document.addEventListener('DOMContentLoaded', function() {
    // Music player functionality
    const playPauseButton = document.querySelector('.play-pause-button');
    const progressBar = document.querySelector('.progress');
    const volumeProgress = document.querySelector('.volume-progress');
    const progressContainer = document.querySelector('.progress-bar');
    const volumeContainer = document.querySelector('.volume-slider');
    const currentTimeEl = document.querySelector('.current-time');
    const totalTimeEl = document.querySelector('.total-time');
    
    let isPlaying = false;
    
    // Toggle play/pause
    playPauseButton.addEventListener('click', function() {
      isPlaying = !isPlaying;
      if (isPlaying) {
        playPauseButton.textContent = '❚❚';
        // In a real app, you would start playing the audio here
      } else {
        playPauseButton.textContent = '▶';
        // In a real app, you would pause the audio here
      }
    });
    
    // Progress bar click handler
    progressContainer.addEventListener('click', function(e) {
      const rect = progressContainer.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      progressBar.style.width = `${percent * 100}%`;
      
      // In a real app, you would seek to this position in the audio
      const totalSeconds = convertTimeToSeconds(totalTimeEl.textContent);
      const newTime = totalSeconds * percent;
      currentTimeEl.textContent = formatTime(newTime);
    });
    
    // Volume slider click handler
    volumeContainer.addEventListener('click', function(e) {
      const rect = volumeContainer.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      volumeProgress.style.width = `${percent * 100}%`;
      
      // In a real app, you would set the volume here
    });
    
    // Helper functions
    function convertTimeToSeconds(timeString) {
      const [minutes, seconds] = timeString.split(':').map(Number);
      return minutes * 60 + seconds;
    }
    
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Hover effects for playlist cards
    const playlistCards = document.querySelectorAll('.playlist-card');
    playlistCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.querySelector('.play-overlay').style.opacity = '1';
      });
      
      card.addEventListener('mouseleave', function() {
        this.querySelector('.play-overlay').style.opacity = '0';
      });
    });
    
    // Hover effects for artist cards
    const artistCards = document.querySelectorAll('.artist-card');
    artistCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.querySelector('.play-overlay').style.opacity = '1';
        this.querySelector('.artist-avatar').style.borderColor = 'var(--color-primary)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.querySelector('.play-overlay').style.opacity = '0';
        this.querySelector('.artist-avatar').style.borderColor = 'transparent';
      });
    });
    
    // Mobile menu toggle (for a real app)
    // This is just a placeholder for where you would add mobile menu functionality
    function setupMobileMenu() {
      // Add mobile menu toggle functionality here
    }
  });