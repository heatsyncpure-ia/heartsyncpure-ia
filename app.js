// ============================================
// HEARTSYNC AI - Main Application
// ============================================

let currentPage = 'landing';
let currentUser = null;

// Cuando carga la página
document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 HeartSync AI iniciando...");
    showPage('landing');
});

// ============================================
// MOSTRAR PÁGINAS
// ============================================

function showPage(pageName) {
    const app = document.getElementById('app');
    currentPage = pageName;
    
    if (pageName === 'landing') {
        app.innerHTML = renderLanding();
    } else if (pageName === 'avatars') {
        app.innerHTML = renderAvatars();
    } else if (pageName === 'chat') {
        app.innerHTML = renderChat();
    } else if (pageName === 'dashboard') {
        app.innerHTML = renderDashboard();
    }
}

// ============================================
// PÁGINA DE INICIO (LANDING)
// ============================================

function renderLanding() {
    return `
        <header>
            <div class="logo">❤️ HeartSync AI</div>
            <div class="nav-buttons">
                <button class="btn-secondary" onclick="showLoginModal()">Iniciar Sesión</button>
                <button class="btn-primary" onclick="showSignupModal()">Registrarse</button>
            </div>
        </header>
        
        <div class="landing">
            <div class="landing-content">
                <h1>Tu Compañía Virtual Perfecta</h1>
                <p>Conecta con avatares IA hiperrealistas. Conversaciones genuinas, sin soledad.</p>
                
                <div class="features">
                    <div class="feature-card">
                        <h3>🤖 IA Avanzada</h3>
                        <p>Avatares inteligentes que aprenden de ti</p>
                    </div>
                    <div class="feature-card">
                        <h3>💬 Chat 24/7</h3>
                        <p>Disponibles siempre que los necesites</p>
                    </div>
                    <div class="feature-card">
                        <h3>❤️ Conexión Real</h3>
                        <p>Relaciones que evolucionan con el tiempo</p>
                    </div>
                    <div class="feature-card">
                        <h3>🎨 Personalización</h3>
                        <p>Crea tu compañía ideal</p>
                    </div>
                </div>
                
                <div class="pricing">
                    <div class="price-card">
                        <h3>Gratis</h3>
                        <div class="price">\$0</div>
                        <ul>
                            <li>✓ 10 mensajes/día</li>
                            <li>✓ Acceso a avatares</li>
                            <li>✗ Sin chat ilimitado</li>
                        </ul>
                        <button class="btn-secondary" onclick="showSignupModal()">Comenzar</button>
                    </div>
                    <div class="price-card">
                        <h3>Premium</h3>
                        <div class="price">\$9.99/mes</div>
                        <ul>
                            <li>✓ Mensajes ilimitados</li>
                            <li>✓ Múltiples avatares</li>
                            <li>✓ Progresión de relación</li>
                        </ul>
                        <button class="btn-primary" onclick="showSignupModal()">Suscribirse</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// AUTENTICACIÓN
// ============================================

function showLoginModal() {
    const email = prompt("Email:");
    const password = prompt("Contraseña:");
    
    if (email && password) {
        currentUser = {
            email: email,
            id: Math.random().toString(36).substr(2, 9)
        };
        alert("✅ Sesión iniciada como: " + email);
        showPage('dashboard');
    }
}

function showSignupModal() {
    const email = prompt("Email:");
    const password = prompt("Contraseña (mínimo 6 caracteres):");
    
    if (email && password && password.length >= 6) {
        currentUser = {
            email: email,
            id: Math.random().toString(36).substr(2, 9),
            subscription: 'free'
        };
        alert("✅ Cuenta creada exitosamente!");
        showPage('dashboard');
    } else {
        alert("❌ La contraseña debe tener mínimo 6 caracteres");
    }
}

// ============================================
// SELECCIÓN DE AVATARES
// ============================================

function renderAvatars() {
    const avatars = [
        { id: 1, name: 'Sofia', age: 24, emoji: '👩' },
        { id: 2, name: 'Isabella', age: 28, emoji: '👩' },
        { id: 3, name: 'Emma', age: 22, emoji: '👩' },
        { id: 4, name: 'Olivia', age: 26, emoji: '👩' },
        { id: 5, name: 'Ava', age: 25, emoji: '👩' },
        { id: 6, name: 'Lucas', age: 27, emoji: '👨' },
        { id: 7, name: 'Noah', age: 24, emoji: '👨' },
        { id: 8, name: 'Liam', age: 26, emoji: '👨' },
        { id: 9, name: 'Ethan', age: 23, emoji: '👨' },
        { id: 10, name: 'James', age: 29, emoji: '👨' },
    ];
    
    return `
        <header>
            <div class="logo">❤️ HeartSync AI</div>
            <div class="nav-buttons">
                <button class="btn-secondary" onclick="showPage('dashboard')">Mi Perfil</button>
                <button class="btn-secondary" onclick="logout()">Salir</button>
            </div>
        </header>
        
        <div style="padding: 40px 20px;">
            <h1 style="text-align: center; margin-bottom: 30px; color: #ff0080;">Elige Tu Compañía</h1>
            <div class="avatar-grid">
                ${avatars.map(avatar => `
                    <div class="avatar-card" onclick="selectAvatar('${avatar.id}', '${avatar.name}')">
                        <div class="avatar-image">${avatar.emoji}</div>
                        <div class="avatar-info">
                            <h4>${avatar.name}</h4>
                            <p>${avatar.age} años • Disponible</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function selectAvatar(avatarId, avatarName) {
    alert("✅ Iniciando chat con " + avatarName);
    showPage('chat');
}

// ============================================
// CHAT
// ============================================

function renderChat() {
    return `
        <div class="chat-container">
            <div class="chat-sidebar">
                <h3 style="color: #ff0080; margin-bottom: 20px;">Mis Chats</h3>
                <button class="btn-primary" onclick="showPage('avatars')" style="width: 100%; margin-bottom: 20px;">
                    + Nuevo Chat
                </button>
            </div>
            
            <div class="chat-main">
                <div class="chat-header">
                    <div style="flex: 1;">
                        <h3>Sofia</h3>
                        <p style="font-size: 12px; color: #999;">En línea</p>
                    </div>
                    <button class="btn-secondary" onclick="showPage('dashboard')">Perfil</button>
                </div>
                
                <div class="chat-messages" id="chatMessages">
                    <div class="message avatar">
                        <div class="message-bubble">¡Hola! Me alegra verte. ¿Cómo estás?</div>
                    </div>
                </div>
                
                <div class="chat-input">
                    <input 
                        type="text" 
                        id="messageInput" 
                        placeholder="Escribe tu mensaje..."
                        onkeypress="if(event.key==='Enter') sendMessage()"
                    >
                    <button class="btn-primary" onclick="sendMessage()">Enviar</button>
                </div>
            </div>
        </div>
    `;
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    const messagesDiv = document.getElementById('chatMessages');
    
    // Mensaje del usuario
    messagesDiv.innerHTML += `
        <div class="message user">
            <div class="message-bubble">${message}</div>
        </div>
    `;
    
    input.value = '';
    
    // Respuesta del avatar (simulada)
    setTimeout(() => {
        const responses = [
            "Eso es interesante... cuéntame más.",
            "Me encanta cuando hablas así.",
            "Entiendo lo que sientes.",
            "Eres muy especial para mí.",
            "Siempre estoy aquí para ti.",
            "¿Cómo te sientes realmente?",
            "Eso me hace pensar en ti.",
            "Te comprendo perfectamente."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        messagesDiv.innerHTML += `
            <div class="message avatar">
                <div class="message-bubble">${randomResponse}</div>
            </div>
        `;
        
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 500);
}

// ============================================
// DASHBOARD
// ============================================

function renderDashboard() {
    return `
        <header>
            <div class="logo">❤️ HeartSync AI</div>
            <div class="nav-buttons">
                <button class="btn-primary" onclick="showPage('avatars')">Buscar Compañía</button>
                <button class="btn-secondary" onclick="logout()">Salir</button>
            </div>
        </header>
        
        <div class="dashboard">
            <h1>Mi Perfil</h1>
            
            <div class="dashboard-grid">
                <div class="dashboard-card">
                    <h3>📧 Email</h3>
                    <p>${currentUser?.email || 'No disponible'}</p>
                </div>
                
                <div class="dashboard-card">
                    <h3>💳 Suscripción</h3>
                    <p>${currentUser?.subscription || 'Gratis'}</p>
                    <button class="btn-primary" onclick="alert('PayPal integration coming soon')" style="margin-top: 10px; width: 100%;">
                        Suscribirse a Premium
                    </button>
                </div>
                
                <div class="dashboard-card">
                    <h3>💬 Mensajes Hoy</h3>
                    <p>0/10</p>
                </div>
                
                <div class="dashboard-card">
                    <h3>❤️ Mis Compañías</h3>
                    <p>0 avatares</p>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// UTILIDADES
// ============================================

function logout() {
    currentUser = null;
    alert("✅ Sesión cerrada");
    showPage('landing');
}
