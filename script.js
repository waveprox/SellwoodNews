// Simple Navigation Functionality
class SchoolNewsTemplate {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect for navigation
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.nav');
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }
}

// Add custom CSS for animations and additional styles
const additionalStyles = `
<style>
@keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
}

.student-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
}

.photo-placeholder.has-image {
    border: none;
    padding: 0;
    background: none;
}

.photo-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
}

.change-photo-btn, .remove-photo-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
}

.change-photo-btn {
    background: #4F46E5;
    color: white;
}

.change-photo-btn:hover {
    background: #3730A3;
    transform: translateY(-2px);
}

.remove-photo-btn {
    background: #EF4444;
    color: white;
}

.remove-photo-btn:hover {
    background: #DC2626;
    transform: translateY(-2px);
}

.nav.scrolled {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    border-radius: 0;
}

/* Articles Section Styles */
.articles-container {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    margin-top: 2rem;
}

.articles-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #E5E7EB;
}

.articles-header h3 {
    color: #1F2937;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
}

.articles-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1.5rem;
}

.article-slot {
    background: #F9FAFB;
    border: 2px solid #E5E7EB;
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.article-slot:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.1);
}

/* Sheet-like design */
.article-sheet {
    background: linear-gradient(145deg, #ffffff, #f8fafc);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow:
        0 4px 6px rgba(0,0,0,0.05),
        inset 0 1px 0 rgba(255,255,255,0.8);
    position: relative;
    min-height: 280px;
}

.article-sheet::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #764ba2);
}

.sheet-title {
    color: #4B5563;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
    position: relative;
    padding: 0.5rem;
    background: rgba(102, 126, 234, 0.1);
    border-radius: 6px;
    border: 1px solid rgba(102, 126, 234, 0.2);
}

.article-content {
    min-height: 120px;
    padding: 1.5rem;
    color: #374151;
    line-height: 1.7;
    font-family: 'Poppins', sans-serif;
    background: transparent;
    border: none;
    border-radius: 0;
}

.article-content:focus {
    outline: none;
}

.article-content p {
    margin: 0;
    font-size: 1rem;
}

/* Responsive Design for Articles */
@media (max-width: 768px) {
    .articles-container {
        padding: 1.5rem;
        margin-top: 1.5rem;
    }

    .articles-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .article-slot {
        padding: 1rem;
    }

    .article-sheet {
        padding: 1.25rem;
        min-height: 220px;
    }

    .sheet-title {
        font-size: 0.95rem;
        padding: 0.5rem;
        margin-bottom: 1.25rem;
    }

    .article-content {
        padding: 1rem;
        min-height: 100px;
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .articles-container {
        padding: 1rem;
    }

    .article-slot {
        padding: 0.75rem;
    }

    .article-sheet {
        padding: 1rem;
        min-height: 180px;
    }

    .sheet-title {
        font-size: 0.9rem;
        padding: 0.4rem;
        margin-bottom: 1rem;
    }

    .article-content {
        padding: 0.75rem;
        min-height: 80px;
        font-size: 0.85rem;
    }
}

@media (max-width: 768px) {
    .photo-actions {
        flex-direction: column;
        align-items: center;
    }

    .change-photo-btn, .remove-photo-btn {
        width: 150px;
        justify-content: center;
    }
}
</style>
`;

// Inject additional styles
document.head.insertAdjacentHTML('beforeend', additionalStyles);

// Simple placeholder functions (no functionality)
function editArticle(articleId) {
    console.log('Edit mode disabled');
}

function saveArticle(articleId) {
    console.log('Save mode disabled');
}

function deleteArticle(articleId) {
    console.log('Delete mode disabled');
}

function addNewArticle() {
    console.log('Add article disabled');
}

function showDevModeMessage() {
    console.log('Dev mode disabled');
}

function showNotification(message, type = 'info') {
    console.log('Notification:', message);
}

function makeEditable() {
    console.log('Edit mode disabled');
}

// Initialize the template when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.schoolNewsTemplate = new SchoolNewsTemplate();
});
