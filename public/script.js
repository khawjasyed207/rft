// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// File upload functionality for contact form
const fileUpload = document.getElementById('file-upload');
const attachmentIcon = document.querySelector('.attachment-icon');

if (fileUpload && attachmentIcon) {
    fileUpload.addEventListener('change', function(e) {
        const fileName = e.target.files[0] ? e.target.files[0].name : 'No file selected';
        
        // Create or update tooltip
        let tooltip = attachmentIcon.querySelector('.file-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('span');
            tooltip.className = 'file-tooltip';
            attachmentIcon.appendChild(tooltip);
        }
        tooltip.textContent = fileName;
        
        // Show temporarily then fade out
        tooltip.style.display = 'block';
        tooltip.style.opacity = '1';
        
        setTimeout(() => {
            tooltip.style.opacity = '0';
            setTimeout(() => {
                tooltip.style.display = 'none';
            }, 500);
        }, 3000);
    });
}
// File validation
if (fileUpload) {
    fileUpload.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            // Validate file size (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size exceeds 5MB limit');
                this.value = '';
                return;
            }
            
            // Validate file type
            const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!validTypes.includes(file.type)) {
                alert('Please upload a PDF, JPG, PNG, or Word document');
                this.value = '';
                return;
            }
        }
    });
}
// File validation
if (fileUpload) {
    fileUpload.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            // Validate file size (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size exceeds 5MB limit');
                this.value = '';
                return;
            }
            
            // Validate file type
            const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!validTypes.includes(file.type)) {
                alert('Please upload a PDF, JPG, PNG, or Word document');
                this.value = '';
                return;
            }
        }
    });
}

// Modules data
const modules = {
    // Feature Modules
    'industry-expertise': {
        title: "Industry Expertise",
        description: "With 15+ years in procurement, we specialize in aluminum, steel, and energy sectors. Our team understands technical specifications, compliance requirements, and market trends to ensure optimal sourcing.",
        images: [
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    'global-network': {
        title: "Global Network",
        description: "Connected with 200+ verified suppliers across 30 countries. We maintain strategic partnerships with manufacturers, wholesalers, and distributors to ensure competitive pricing and reliable supply chains.",
        images: [
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    'custom-solutions': {
        title: "Custom Solutions",
        description: "Tailored procurement strategies including vendor-managed inventory, just-in-time delivery, and consolidated shipments. We adapt to your business's unique requirements and growth stages.",
        images: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    'cutting-edge-tech': {
        title: "Cutting-Edge Tech",
        description: "Our AI-powered procurement platform analyzes market trends, predicts price fluctuations, and automates purchase orders. IoT-enabled tracking ensures real-time shipment visibility.",
        images: [
            "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ]
    },

    // Product Modules
    'system-technology': {
        title: "Systems & Technology",
        description: "High-performance computing components including Intel/AMD processors, NVIDIA GPUs, IoT development kits, and laboratory testing equipment from leading brands.",
        images: [
            "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    'industrial-commodities': {
        title: "Industrial Commodities",
        description: "Raw materials including aluminum ingots (6061, 6063 grades), stainless steel sheets (304/316), refractory bricks (alumina content 40-90%), and industrial minerals.",
        images: [
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    'energy-spares': {
        title: "Energy Spares",
        description: "Wind turbine gearboxes, solar panel mounting systems, hydroelectric generator parts, and lithium-ion battery packs with certifications from UL, IEC, and DNV.",
        images: [
            "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    'mro-spares': {
        title: "MRO Spares",
        description: "Bearings (SKF/NSK), industrial motors (Siemens/ABB), conveyor belts (3-20mm thickness), and CNC machine replacement parts with OEM-equivalent quality.",
        images: [
            "https://images.unsplash.com/photo-1581093450021-4a7360e9aab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    'electrical-components': {
        title: "Electrical Components",
        description: "Transformers (11kV-33kV), contactors, circuit breakers, welding electrodes (AWS certified), and industrial gearboxes with IP65 protection ratings.",
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    'lubricants-more': {
        title: "Lubricants & Supplies",
        description: "Mobil SHC 600 series, Total Rubia fluids, PPE kits (ANSI/OSHA compliant), industrial cables (0.5-300mm²), and marine-grade plywood (IS 303 certified).",
        images: [
            "https://images.unsplash.com/photo-1606755456206-b25206bfa233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ]
    }
};

// Modal functionality
const modal = document.getElementById('moduleModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImages = document.getElementById('modalImages');
const closeModal = document.querySelector('.close-modal');

// Add click event to all interactive icons
document.querySelectorAll('.interactive-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const target = this.dataset.target;
        if (modules[target]) {
            openModal(modules[target]);
        }
    });
});

function openModal(moduleData) {
    modalTitle.textContent = moduleData.title;
    modalDescription.textContent = moduleData.description;
    
    // Clear previous images
    modalImages.innerHTML = '';
    
    // Add new images
    moduleData.images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.maxWidth = '100%';
        img.style.margin = '10px 0';
        modalImages.appendChild(img);
    });
    
    modal.classList.add('active');
}

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close modal when clicking outside content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Industry filter system
let activeFilters = new Set();

// 1. Tag Click Handler
document.querySelectorAll('.industry-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        const industry = this.dataset.industry;
        
        // Toggle active state
        this.classList.toggle('active');
        
        // Update filters
        if (this.classList.contains('active')) {
            activeFilters.add(industry);
        } else {
            activeFilters.delete(industry);
        }
        
        filterProducts();
    });
});

// 2. Reset Button
document.getElementById('resetFilters')?.addEventListener('click', () => {
    document.querySelectorAll('.industry-tag.active').forEach(tag => {
        tag.classList.remove('active');
    });
    activeFilters.clear();
    filterProducts();
});

// 3. Filter Function
function filterProducts() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        const cardIndustries = JSON.parse(card.dataset.industries || '[]');
        const shouldShow = activeFilters.size === 0 || 
                         [...activeFilters].some(filter => 
                             cardIndustries.includes(filter)
                         );
        
        card.style.display = shouldShow ? 'block' : 'none';
        card.style.opacity = shouldShow ? '1' : '0';
        card.style.transition = 'all 0.3s ease';
    });
    document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your User ID
    emailjs.init('YOUR_EMAILJS_USER_ID'); // Replace with your actual User ID
    
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get the form data
        const formData = new FormData(contactForm);
        const formObject = Object.fromEntries(formData.entries());
        
        // Send the email
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formObject)
            .then(function(response) {
                alert('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again later.');
                console.error('EmailJS Error:', error);
            });
    });
});
}