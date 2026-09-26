import './style.css'

const API_URL = 'http://localhost:8080'

document.querySelector('#app').innerHTML = `
  <div class="site">

    <!-- ================= NAVBAR ================= -->

    <header class="navbar">

      <div class="logo">
        <span class="logo-mark">H</span>
        <span>HavenStay</span>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#rooms">Rooms</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
      </nav>

      <button class="login-btn" id="loginButton">
        Login
      </button>

    </header>


    <!-- ================= HERO ================= -->

    <section class="hero" id="home">

      <div class="hero-content">

        <div class="eyebrow">
          WELCOME TO HAVENSTAY
        </div>

        <h1>
          Stay somewhere
          <br>
          <em>worth remembering.</em>
        </h1>

        <p>
          Discover thoughtfully designed rooms, effortless booking,
          and an AI concierge ready to help with your stay.
        </p>

        <div class="hero-actions">

          <button
            class="primary-btn"
            id="exploreRooms"
          >
            Explore Rooms
          </button>

          <button
            class="secondary-btn"
            id="myBookingsButton"
          >
            My Bookings
          </button>

        </div>

      </div>


      <!-- BOOKING SEARCH BAR -->

      <div class="booking-bar">

        <div class="booking-item">

          <span>CHECK IN</span>

          <input
            type="date"
            id="checkIn"
          >

        </div>


        <div class="booking-divider"></div>


        <div class="booking-item">

          <span>CHECK OUT</span>

          <input
            type="date"
            id="checkOut"
          >

        </div>


        <div class="booking-divider"></div>


        <div class="booking-item">

          <span>GUESTS</span>

          <strong>1 Guest</strong>

        </div>


        <button
          class="search-btn"
          id="searchRooms"
        >
          Search Rooms
        </button>

      </div>

    </section>


    <!-- ================= EXPERIENCE ================= -->

    <section
      class="intro"
      id="experience"
    >

      <span class="section-label">
        THE HAVENSTAY EXPERIENCE
      </span>

      <h2>
        Comfort designed around
        <br>
        <em>your journey.</em>
      </h2>

      <p>
        From peaceful rooms to seamless digital services,
        every part of your stay is designed to make travelling
        feel effortless.
      </p>

    </section>


    <!-- ================= FEATURES ================= -->

    <section class="features">

      <article class="feature">

        <div class="feature-icon">
          ✦
        </div>

        <h3>
          Thoughtful Rooms
        </h3>

        <p>
          Comfortable spaces designed for relaxing,
          working and enjoying your stay.
        </p>

      </article>


      <article class="feature">

        <div class="feature-icon">
          ◈
        </div>

        <h3>
          Effortless Booking
        </h3>

        <p>
          Find your room and manage your reservations
          with just a few simple steps.
        </p>

      </article>


      <article class="feature">

        <div class="feature-icon">
          ✧
        </div>

        <h3>
          AI Concierge
        </h3>

        <p>
          Get instant help with rooms, bookings and
          your hotel stay through our AI assistant.
        </p>

      </article>

    </section>


    <!-- ================= ROOMS ================= -->

    <section
      class="rooms"
      id="rooms"
    >

      <div class="rooms-heading">

        <div>

          <span class="section-label">
            STAY YOUR WAY
          </span>

          <h2>
            Our rooms
          </h2>

        </div>

        <button
          class="view-all"
          id="viewAllRooms"
        >
          View all rooms →
        </button>

      </div>


      <div
        class="room-grid"
        id="roomGrid"
      >

        <div class="rooms-loading">

          <div class="loading-spinner"></div>

          <p>
            Loading rooms...
          </p>

        </div>

      </div>

    </section>
        <!-- ================= AUTH MODAL ================= -->

    <div class="auth-overlay hidden" id="authOverlay">

      <div class="auth-modal">

        <button
          class="auth-close"
          id="authClose"
        >
          ×
        </button>

        <div class="auth-logo">
          <span class="logo-mark">H</span>
        </div>

        <h2 id="authTitle">
          Welcome back
        </h2>

        <p
          class="auth-subtitle"
          id="authSubtitle"
        >
          Sign in to manage your stay.
        </p>


        <!-- LOGIN -->

        <form
          id="loginForm"
          class="auth-form"
        >

          <label>
            Email
          </label>

          <input
            type="email"
            id="loginEmail"
            placeholder="you@example.com"
            required
          >


          <label>
            Password
          </label>

          <input
            type="password"
            id="loginPassword"
            placeholder="Enter your password"
            required
          >


          <div
            class="auth-error hidden"
            id="loginError"
          ></div>


          <button
            type="submit"
            class="auth-submit"
          >
            Sign in
          </button>

        </form>


        <!-- REGISTER -->

        <form
          id="registerForm"
          class="auth-form hidden"
        >

          <label>
            Full name
          </label>

          <input
            type="text"
            id="registerName"
            placeholder="Your name"
            required
          >


          <label>
            Email
          </label>

          <input
            type="email"
            id="registerEmail"
            placeholder="you@example.com"
            required
          >


          <label>
            Password
          </label>

          <input
            type="password"
            id="registerPassword"
            placeholder="Create a password"
            minlength="6"
            required
          >


          <div
            class="auth-error hidden"
            id="registerError"
          ></div>


          <button
            type="submit"
            class="auth-submit"
          >
            Create account
          </button>

        </form>


        <div class="auth-switch">

          <span id="authSwitchText">
            Don't have an account?
          </span>

          <button
            type="button"
            id="authSwitch"
          >
            Create account
          </button>

        </div>

      </div>

    </div>


    <!-- ================= AI ASSISTANT ================= -->

    <div class="ai-widget">

      <div
        class="ai-message"
        id="aiMessage"
      >

        <button
          class="ai-close"
          id="aiClose"
        >
          
        </button>

        <div class="ai-avatar-small">
          ✦
        </div>

        <div>

          <strong>
            Need help with your stay?
          </strong>

          <p>
            Ask our AI concierge anything.
          </p>

        </div>

      </div>


      <button
        class="ai-button"
        id="aiButton"
      >

        <span class="ai-icon">
          ✦
        </span>

        <span>
          AI Concierge
        </span>

      </button>

    </div>


    <!-- ================= FOOTER ================= -->

    <footer id="about">

      <div class="footer-logo">

        <span class="logo-mark">
          H
        </span>

        HavenStay

      </div>

      <p>
        A smarter way to experience your stay.
      </p>

      <span>
        © 2026 HavenStay
      </span>

    </footer>

  </div>
`


/* =========================================================
   ROOM IMAGES
========================================================= */


/* =========================================================
   HAVENSTAY FRONTEND
   API-driven frontend for the Spring Boot backend
   ========================================================= */

const roomImages = [
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85'
]

let rooms = []
let currentBookings = []
let selectedRoomId = null
let aiMessages = []

/* =========================================================
   BASIC HELPERS
   ========================================================= */

function getToken() {
  return localStorage.getItem('hotel_token')
}

function getEmail() {
  return localStorage.getItem('hotel_email')
}

function getRole() {
  return localStorage.getItem('hotel_role')
}

function authHeaders(json = false) {
  const headers = {}
  const token = getToken()

  if (json) {
    headers['Content-Type'] = 'application/json'
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return headers
}

async function readResponse(response) {
  const text = await response.text()

  if (!text) {
    return null
  }

  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}

function errorMessage(data, fallback = 'Something went wrong.') {
  if (!data) return fallback

  if (typeof data === 'string') return data

  return (
    data.message ||
    data.error ||
    data.detail ||
    fallback
  )
}

function escapeHtml(value) {
  const div = document.createElement('div')
  div.textContent = value ?? ''
  return div.innerHTML
}

function formatCurrency(value) {
  return `₹${Number(value || 0).toLocaleString('en-IN')}`
}

function formatDate(dateString) {
  if (!dateString) return '—'

  const date = new Date(`${dateString}T00:00:00`)

  if (Number.isNaN(date.getTime())) {
    return dateString
  }

  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

function setButtonLoading(button, loading, text = 'Please wait...') {
  if (!button) return

  if (loading) {
    button.dataset.originalText = button.textContent
    button.disabled = true
    button.textContent = text
  } else {
    button.disabled = false
    button.textContent =
      button.dataset.originalText || button.textContent
  }
}

function scrollToSection(id) {
  const section = document.querySelector(id)

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

/* =========================================================
   SESSION MANAGEMENT
   ========================================================= */

function clearSession() {
  localStorage.removeItem('hotel_token')
  localStorage.removeItem('hotel_email')
  localStorage.removeItem('hotel_role')
}

function handleUnauthorized() {
  clearSession()
  updateNavbar()
  closeBookingsModal()
  openAuth('login')
}

/* =========================================================
   ROOM LOADING
   ========================================================= */

async function loadRooms() {
  const roomGrid = document.querySelector('#roomGrid')

  if (!roomGrid) return

  roomGrid.innerHTML = `
    <div class="rooms-loading">
      <div class="loading-spinner"></div>
      <p>Loading rooms...</p>
    </div>
  `

  try {
    const response = await fetch(`${API_URL}/api/rooms`)
    const data = await readResponse(response)

    if (!response.ok) {
      throw new Error(
        errorMessage(data, 'Unable to load rooms.')
      )
    }

    rooms = Array.isArray(data) ? data : []
    renderRooms(rooms)
  } catch (error) {
    console.error('Room loading error:', error)

    roomGrid.innerHTML = `
      <div class="rooms-empty">
        <div class="error-icon">!</div>
        <h3>Rooms could not be loaded</h3>
        <p>
          Please make sure the Spring Boot backend is running
          on port 8080.
        </p>
        <button class="primary-btn" id="retryRooms">
          Try again
        </button>
      </div>
    `

    document
      .querySelector('#retryRooms')
      ?.addEventListener('click', loadRooms)
  }
}

function renderRooms(roomList) {
  const roomGrid = document.querySelector('#roomGrid')

  if (!roomGrid) return

  if (!roomList.length) {
    roomGrid.innerHTML = `
      <div class="rooms-empty">
        <div class="empty-icon">⌂</div>
        <h3>No rooms available</h3>
        <p>Please check again later.</p>
      </div>
    `
    return
  }

  roomGrid.innerHTML = roomList.map((room, index) => {
    const image =
      room.imageUrl ||
      roomImages[index % roomImages.length]

    const available = room.available !== false

    return `
      <article class="room-card ${available ? '' : 'room-unavailable'}">
        <div
          class="room-image"
          style="background-image:url('${escapeHtml(image)}')"
        >
          <span class="room-tag">
            ${available ? 'AVAILABLE' : 'UNAVAILABLE'}
          </span>
        </div>

        <div class="room-details">
          <div>
            <h3>${escapeHtml(room.type)}</h3>
            <p>Room ${escapeHtml(room.roomNumber)}</p>
          </div>

          <strong>
            ${formatCurrency(room.pricePerNight)}
            <small>/ night</small>
          </strong>
        </div>

        <p class="room-description">
          ${escapeHtml(
            room.description ||
            'A comfortable room designed for a relaxing stay.'
          )}
        </p>

        <button
          class="book-btn"
          data-room-id="${room.id}"
          ${available ? '' : 'disabled'}
        >
          ${available ? 'Book this room' : 'Currently unavailable'}
        </button>
      </article>
    `
  }).join('')

  attachBookingButtons()
}

/* =========================================================
   ROOM SEARCH
   ========================================================= */

function validateDates() {
  const checkIn = document.querySelector('#checkIn')?.value
  const checkOut = document.querySelector('#checkOut')?.value

  if (!checkIn || !checkOut) {
    alert('Please select both check-in and check-out dates.')
    return false
  }

  if (checkOut <= checkIn) {
    alert('Check-out date must be after check-in date.')
    return false
  }

  return true
}

function searchRooms() {
  const checkIn = document.querySelector('#checkIn')?.value
  const checkOut = document.querySelector('#checkOut')?.value

  if (!checkIn || !checkOut) {
    scrollToSection('#rooms')
    return
  }

  if (checkOut <= checkIn) {
    alert('Check-out date must be after check-in date.')
    return
  }

  /*
   * The current backend exposes room availability as a room-level
   * boolean; it does not expose date-range availability.
   * Therefore the frontend keeps the date selection for booking
   * and displays rooms returned by GET /api/rooms.
   */
  renderRooms(rooms.filter(room => room.available !== false))
  scrollToSection('#rooms')
}

/* =========================================================
   BOOKING
   ========================================================= */

function attachBookingButtons() {
  document
    .querySelectorAll('.book-btn')
    .forEach(button => {
      button.addEventListener('click', () => {
        handleBooking(button.dataset.roomId)
      })
    })
}

async function handleBooking(roomId) {
  if (!getToken()) {
    openAuth('login')
    return
  }

  if (!validateDates()) {
    return
  }

  const room = rooms.find(
    item => String(item.id) === String(roomId)
  )

  if (!room) {
    alert('Room information is unavailable.')
    return
  }

  selectedRoomId = roomId

  openBookingConfirmModal(room)
}

function openBookingConfirmModal(room) {
  closeDynamicModal('bookingConfirmModal')

  const modal = document.createElement('div')
  modal.id = 'bookingConfirmModal'
  modal.className = 'dynamic-overlay visible'

  const checkIn = document.querySelector('#checkIn')?.value
  const checkOut = document.querySelector('#checkOut')?.value

  modal.innerHTML = `
    <div class="dynamic-modal booking-confirm-modal">
      <button
        class="modal-close"
        data-close-modal="bookingConfirmModal"
        aria-label="Close"
      >×</button>

      <span class="section-label">CONFIRM YOUR STAY</span>
      <h2>Review your booking</h2>
      <p class="modal-muted">
        Please check the details before confirming.
      </p>

      <div class="confirm-room">
        <div class="confirm-room-image"
          style="background-image:url('${escapeHtml(
            room.imageUrl ||
            roomImages[(Number(room.id) - 1) % roomImages.length]
          )}')">
        </div>

        <div>
          <span class="booking-label">ROOM</span>
          <h3>${escapeHtml(room.type)}</h3>
          <p>Room ${escapeHtml(room.roomNumber)}</p>
        </div>
      </div>

      <div class="confirm-grid">
        <div>
          <span>CHECK-IN</span>
          <strong>${formatDate(checkIn)}</strong>
        </div>

        <div>
          <span>CHECK-OUT</span>
          <strong>${formatDate(checkOut)}</strong>
        </div>

        <div>
          <span>PRICE</span>
          <strong>
            ${formatCurrency(room.pricePerNight)}
            <small>/ night</small>
          </strong>
        </div>
      </div>

      <div class="modal-actions">
        <button class="secondary-modal-btn"
          data-close-modal="bookingConfirmModal">
          Go back
        </button>

        <button class="primary-modal-btn" id="confirmBookingButton">
          Confirm booking
        </button>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeDynamicModal('bookingConfirmModal')
    }

    const closeButton =
      event.target.closest('[data-close-modal]')

    if (closeButton) {
      closeDynamicModal(
        closeButton.dataset.closeModal
      )
    }
  })

  document
    .querySelector('#confirmBookingButton')
    ?.addEventListener('click', () => {
      submitBooking(room.id)
    })
}

async function submitBooking(roomId) {
  const button =
    document.querySelector('#confirmBookingButton')

  const checkIn =
    document.querySelector('#checkIn')?.value

  const checkOut =
    document.querySelector('#checkOut')?.value

  if (!checkIn || !checkOut) {
    alert('Please select your stay dates.')
    return
  }

  const token = getToken()

  if (!token) {
    closeDynamicModal('bookingConfirmModal')
    openAuth('login')
    return
  }

  setButtonLoading(button, true, 'Booking...')

  try {
    const response = await fetch(
      `${API_URL}/api/bookings`,
      {
        method: 'POST',
        headers: authHeaders(true),
        body: JSON.stringify({
          roomId: Number(roomId),
          checkIn,
          checkOut
        })
      }
    )

    const data = await readResponse(response)

    if (response.status === 401 || response.status === 403) {
      closeDynamicModal('bookingConfirmModal')
      handleUnauthorized()
      return
    }

    if (!response.ok) {
      throw new Error(
        errorMessage(data, 'Booking failed.')
      )
    }

    closeDynamicModal('bookingConfirmModal')

    showSuccessModal(
      'Booking confirmed',
      `Your room has been reserved successfully.`,
      `
        <div class="success-booking-number">
          <span>BOOKING NUMBER</span>
          <strong>${escapeHtml(data.bookingNumber)}</strong>
        </div>
      `
    )
  } catch (error) {
    console.error('Booking error:', error)
    alert(error.message || 'Unable to complete booking.')
  } finally {
    setButtonLoading(button, false)
  }
}

/* =========================================================
   MY BOOKINGS
   ========================================================= */

async function loadMyBookings() {
  if (!getToken()) {
    openAuth('login')
    return
  }

  openLoadingModal(
    'bookingsModal',
    'Loading your bookings...'
  )

  try {
    const response = await fetch(
      `${API_URL}/api/bookings/mine`,
      {
        method: 'GET',
        headers: authHeaders()
      }
    )

    const data = await readResponse(response)

    if (response.status === 401 || response.status === 403) {
      closeDynamicModal('bookingsModal')
      handleUnauthorized()
      return
    }

    if (!response.ok) {
      throw new Error(
        errorMessage(data, 'Unable to load your bookings.')
      )
    }

    currentBookings =
      Array.isArray(data) ? data : []

    renderBookingsModal(currentBookings)
  } catch (error) {
    console.error('Booking loading error:', error)
    closeDynamicModal('bookingsModal')
    alert(
      error.message ||
      'Unable to load your bookings. Please try again.'
    )
  }
}

function renderBookingsModal(bookings) {
  closeDynamicModal('bookingsModal')

  const modal = document.createElement('div')
  modal.id = 'bookingsModal'
  modal.className = 'dynamic-overlay visible'

  const confirmed =
    bookings.filter(b => b.status !== 'CANCELLED').length

  const cancelled =
    bookings.filter(b => b.status === 'CANCELLED').length

  modal.innerHTML = `
    <div class="dynamic-modal bookings-modal">
      <button
        class="modal-close"
        data-close-modal="bookingsModal"
        aria-label="Close bookings"
      >×</button>

      <div class="bookings-header">
        <div>
          <span class="section-label">YOUR STAY</span>
          <h2>My bookings</h2>
          <p class="modal-muted">
            View and manage your reservations.
          </p>
        </div>
      </div>

      <div class="booking-summary">
        <div>
          <strong>${bookings.length}</strong>
          <span>Total bookings</span>
        </div>
        <div>
          <strong>${confirmed}</strong>
          <span>Active</span>
        </div>
        <div>
          <strong>${cancelled}</strong>
          <span>Cancelled</span>
        </div>
      </div>

      <div class="bookings-list">
        ${
          bookings.length
            ? bookings.map(createBookingCard).join('')
            : `
              <div class="empty-bookings">
                <div class="empty-icon">⌂</div>
                <h3>No bookings yet</h3>
                <p>
                  Your reservations will appear here after
                  you book a room.
                </p>
                <button
                  class="primary-modal-btn"
                  id="emptyExploreRooms"
                >
                  Explore rooms
                </button>
              </div>
            `
        }
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeDynamicModal('bookingsModal')
      return
    }

    const closeButton =
      event.target.closest('[data-close-modal]')

    if (closeButton) {
      closeDynamicModal(
        closeButton.dataset.closeModal
      )
      return
    }

    const cancelButton =
      event.target.closest('.cancel-booking-btn')

    if (cancelButton) {
      cancelBooking(
        cancelButton.dataset.booking
      )
    }

    if (
      event.target.closest('#emptyExploreRooms')
    ) {
      closeDynamicModal('bookingsModal')
      scrollToSection('#rooms')
    }
  })
}

function createBookingCard(booking) {
  const cancelled =
    booking.status === 'CANCELLED'

  const room =
    booking.room || {}

  const user =
    booking.user || {}

  const image =
    room.imageUrl ||
    roomImages[
      (Number(room.id || 1) - 1) %
      roomImages.length
    ]

  return `
    <article class="booking-card ${
      cancelled ? 'booking-card-cancelled' : ''
    }">

      <div class="booking-card-top">
        <div>
          <span class="booking-label">BOOKING</span>
          <h3>
            ${escapeHtml(booking.bookingNumber)}
          </h3>
        </div>

        <span class="booking-status ${
          cancelled
            ? 'status-cancelled'
            : 'status-confirmed'
        }">
          ${cancelled ? 'Cancelled' : 'Confirmed'}
        </span>
      </div>

      <div class="booking-room">
        <div
          class="booking-room-image"
          style="background-image:url('${escapeHtml(image)}')"
        ></div>

        <div class="booking-room-info">
          <span class="booking-label">ROOM</span>
          <h4>${escapeHtml(room.type)}</h4>
          <p>Room ${escapeHtml(room.roomNumber)}</p>
        </div>

        <div class="booking-price">
          <strong>
            ${formatCurrency(booking.totalAmount)}
          </strong>
          <span>Total stay</span>
        </div>
      </div>

      <div class="booking-details">
        <div>
          <span>CHECK-IN</span>
          <strong>${formatDate(booking.checkIn)}</strong>
        </div>

        <div>
          <span>CHECK-OUT</span>
          <strong>${formatDate(booking.checkOut)}</strong>
        </div>

        <div>
          <span>GUEST</span>
          <strong>${escapeHtml(user.name || getEmail() || 'Guest')}</strong>
        </div>
      </div>

      ${
        !cancelled
          ? `
            <div class="booking-actions">
              <button
                class="cancel-booking-btn"
                data-booking="${escapeHtml(
                  booking.bookingNumber
                )}"
              >
                Cancel booking
              </button>
            </div>
          `
          : `
            <div class="booking-cancelled-note">
              This reservation has been cancelled.
            </div>
          `
      }
    </article>
  `
}

async function cancelBooking(bookingNumber) {
  if (
    !confirm(
      `Cancel booking ${bookingNumber}?`
    )
  ) {
    return
  }

  const token = getToken()

  if (!token) {
    closeDynamicModal('bookingsModal')
    openAuth('login')
    return
  }

  try {
    const response = await fetch(
      `${API_URL}/api/bookings/${encodeURIComponent(
        bookingNumber
      )}`,
      {
        method: 'DELETE',
        headers: authHeaders()
      }
    )

    const data = await readResponse(response)

    if (response.status === 401 || response.status === 403) {
      closeDynamicModal('bookingsModal')
      handleUnauthorized()
      return
    }

    if (!response.ok) {
      throw new Error(
        errorMessage(
          data,
          'Unable to cancel this booking.'
        )
      )
    }

    await loadMyBookings()
  } catch (error) {
    console.error('Cancellation error:', error)
    alert(
      error.message ||
      'Unable to cancel this booking.'
    )
  }
}

/* =========================================================
   AUTHENTICATION
   ========================================================= */

const authOverlay =
  document.querySelector('#authOverlay')

const authClose =
  document.querySelector('#authClose')

const loginForm =
  document.querySelector('#loginForm')

const registerForm =
  document.querySelector('#registerForm')

const authSwitch =
  document.querySelector('#authSwitch')

const authSwitchText =
  document.querySelector('#authSwitchText')

const authTitle =
  document.querySelector('#authTitle')

const authSubtitle =
  document.querySelector('#authSubtitle')

const loginError =
  document.querySelector('#loginError')

const registerError =
  document.querySelector('#registerError')

let authMode = 'login'

function openAuth(mode = 'login') {
  if (!authOverlay) return

  authMode = mode
  authOverlay.classList.remove('hidden')
  updateAuthModal()
}

function closeAuth() {
  if (!authOverlay) return

  authOverlay.classList.add('hidden')
  loginError?.classList.add('hidden')
  registerError?.classList.add('hidden')
}

function updateAuthModal() {
  if (authMode === 'login') {
    loginForm?.classList.remove('hidden')
    registerForm?.classList.add('hidden')

    if (authTitle) {
      authTitle.textContent = 'Welcome back'
    }

    if (authSubtitle) {
      authSubtitle.textContent =
        'Sign in to manage your stay.'
    }

    if (authSwitchText) {
      authSwitchText.textContent =
        "Don't have an account?"
    }

    if (authSwitch) {
      authSwitch.textContent = 'Create account'
    }
  } else {
    loginForm?.classList.add('hidden')
    registerForm?.classList.remove('hidden')

    if (authTitle) {
      authTitle.textContent = 'Create your account'
    }

    if (authSubtitle) {
      authSubtitle.textContent =
        'Join HavenStay and manage your stays easily.'
    }

    if (authSwitchText) {
      authSwitchText.textContent =
        'Already have an account?'
    }

    if (authSwitch) {
      authSwitch.textContent = 'Sign in'
    }
  }
}

loginForm?.addEventListener('submit', async event => {
  event.preventDefault()

  loginError?.classList.add('hidden')

  const email =
    document.querySelector('#loginEmail')?.value.trim()

  const password =
    document.querySelector('#loginPassword')?.value

  if (!email || !password) {
    if (loginError) {
      loginError.textContent =
        'Please enter your email and password.'
      loginError.classList.remove('hidden')
    }
    return
  }

  const button =
    loginForm.querySelector('button[type="submit"]')

  setButtonLoading(button, true, 'Signing in...')

  try {
    const response = await fetch(
      `${API_URL}/api/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    )

    const data = await readResponse(response)

    if (!response.ok) {
      throw new Error(
        errorMessage(
          data,
          'Invalid email or password.'
        )
      )
    }

    localStorage.setItem(
      'hotel_token',
      data.token
    )

    localStorage.setItem(
      'hotel_email',
      data.email
    )

    localStorage.setItem(
      'hotel_role',
      data.role
    )

    closeAuth()
    updateNavbar()

    alert(`Welcome back, ${data.email}!`)
  } catch (error) {
    if (loginError) {
      loginError.textContent = error.message
      loginError.classList.remove('hidden')
    }
  } finally {
    setButtonLoading(button, false)
  }
})

registerForm?.addEventListener(
  'submit',
  async event => {
    event.preventDefault()

    registerError?.classList.add('hidden')

    const name =
      document.querySelector('#registerName')?.value.trim()

    const email =
      document.querySelector('#registerEmail')?.value.trim()

    const password =
      document.querySelector('#registerPassword')?.value

    if (!name || !email || !password) {
      if (registerError) {
        registerError.textContent =
          'Please complete all fields.'
        registerError.classList.remove('hidden')
      }
      return
    }

    const button =
      registerForm.querySelector(
        'button[type="submit"]'
      )

    setButtonLoading(
      button,
      true,
      'Creating account...'
    )

    try {
      const response = await fetch(
        `${API_URL}/api/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        }
      )

      const data = await readResponse(response)

      if (!response.ok) {
        throw new Error(
          errorMessage(
            data,
            'Registration failed.'
          )
        )
      }

      localStorage.setItem(
        'hotel_token',
        data.token
      )

      localStorage.setItem(
        'hotel_email',
        data.email
      )

      localStorage.setItem(
        'hotel_role',
        data.role
      )

      closeAuth()
      updateNavbar()

      alert('Account created successfully!')
    } catch (error) {
      if (registerError) {
        registerError.textContent =
          error.message
        registerError.classList.remove(
          'hidden'
        )
      }
    } finally {
      setButtonLoading(button, false)
    }
  }
)

authClose?.addEventListener(
  'click',
  closeAuth
)

authOverlay?.addEventListener(
  'click',
  event => {
    if (event.target === authOverlay) {
      closeAuth()
    }
  }
)

authSwitch?.addEventListener(
  'click',
  () => {
    openAuth(
      authMode === 'login'
        ? 'register'
        : 'login'
    )
  }
)

/* =========================================================
   NAVBAR / LOGOUT / ADMIN ACCESS
   ========================================================= */

function updateNavbar() {
  const loginButton =
    document.querySelector('#loginButton')

  if (!loginButton) return

  const email = getEmail()
  const role = getRole()

  if (email) {
    loginButton.textContent = email
    loginButton.title =
      'Click to logout'

    loginButton.onclick = () => {
      if (
        !confirm('Do you want to logout?')
      ) {
        return
      }

      clearSession()
      updateNavbar()
      alert('You have been logged out.')
    }

    addAdminNav()
  } else {
    loginButton.textContent = 'Login'
    loginButton.title = 'Login'

    loginButton.onclick = () => {
      openAuth('login')
    }

    removeAdminNav()
  }

  if (role === 'ADMIN') {
    addAdminNav()
  } else {
    removeAdminNav()
  }
}

function addAdminNav() {
  const nav = document.querySelector('.navbar nav')

  if (!nav || document.querySelector('#adminNavButton')) {
    return
  }

  const button = document.createElement('button')
  button.id = 'adminNavButton'
  button.className = 'nav-admin-btn'
  button.textContent = 'Admin'
  button.addEventListener(
    'click',
    openAdminPanel
  )

  nav.appendChild(button)
}

function removeAdminNav() {
  document.querySelector('#adminNavButton')?.remove()
}

/* =========================================================
   ADMIN PANEL
   ========================================================= */

function openAdminPanel() {
  if (getRole() !== 'ADMIN') {
    alert('Admin access is required.')
    return
  }

  closeDynamicModal('adminModal')

  const modal = document.createElement('div')
  modal.id = 'adminModal'
  modal.className = 'dynamic-overlay visible'

  modal.innerHTML = `
    <div class="dynamic-modal admin-modal">
      <button
        class="modal-close"
        data-close-modal="adminModal"
      >×</button>

      <span class="section-label">MANAGEMENT</span>
      <h2>Admin dashboard</h2>
      <p class="modal-muted">
        Manage rooms and review hotel reservations.
      </p>

      <div class="admin-tabs">
        <button
          class="admin-tab active"
          data-admin-tab="rooms"
        >
          Rooms
        </button>

        <button
          class="admin-tab"
          data-admin-tab="bookings"
        >
          Bookings
        </button>

        <button
          class="admin-tab"
          data-admin-tab="upload"
        >
          File upload
        </button>
      </div>

      <div id="adminContent">
        <div class="admin-loading">
          Loading...
        </div>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeDynamicModal('adminModal')
      return
    }

    const close =
      event.target.closest('[data-close-modal]')

    if (close) {
      closeDynamicModal(
        close.dataset.closeModal
      )
      return
    }

    const tab =
      event.target.closest('[data-admin-tab]')

    if (tab) {
      document
        .querySelectorAll('.admin-tab')
        .forEach(item =>
          item.classList.remove('active')
        )

      tab.classList.add('active')

      const name = tab.dataset.adminTab

      if (name === 'rooms') {
        loadAdminRooms()
      }

      if (name === 'bookings') {
        loadAdminBookings()
      }

      if (name === 'upload') {
        renderAdminUpload()
      }
    }
  })

  loadAdminRooms()
}

async function loadAdminRooms() {
  const content =
    document.querySelector('#adminContent')

  if (!content) return

  content.innerHTML = `
    <div class="admin-loading">
      Loading rooms...
    </div>
  `

  try {
    /*
     * The backend's public GET /api/rooms endpoint is used
     * to read the current room list. Admin updates/deletes
     * use /api/admin/rooms/{id}.
     */
    const response =
      await fetch(`${API_URL}/api/rooms`, {
        headers: authHeaders()
      })

    const data = await readResponse(response)

    if (response.status === 401 ||
        response.status === 403) {
      handleUnauthorized()
      return
    }

    if (!response.ok) {
      throw new Error(
        errorMessage(data, 'Unable to load rooms.')
      )
    }

    const list =
      Array.isArray(data) ? data : []

    content.innerHTML = `
      <div class="admin-section-head">
        <div>
          <h3>Room management</h3>
          <p>Update price, availability and room information.</p>
        </div>
      </div>

      <div class="admin-room-list">
        ${
          list.length
            ? list.map(createAdminRoomRow).join('')
            : '<p class="admin-empty">No rooms found.</p>'
        }
      </div>
    `

    content
      .querySelectorAll('.admin-update-room')
      .forEach(button => {
        button.addEventListener(
          'click',
          () => updateAdminRoom(button.dataset.id)
        )
      })

    content
      .querySelectorAll('.admin-delete-room')
      .forEach(button => {
        button.addEventListener(
          'click',
          () => deleteAdminRoom(button.dataset.id)
        )
      })
  } catch (error) {
    console.error(error)
    content.innerHTML = `
      <div class="admin-error">
        ${escapeHtml(error.message)}
      </div>
    `
  }
}

function createAdminRoomRow(room) {
  return `
    <div class="admin-room-row">
      <div class="admin-room-main">
        <div class="admin-room-avatar">H</div>

        <div>
          <strong>
            ${escapeHtml(room.type)}
          </strong>
          <span>
            Room ${escapeHtml(room.roomNumber)}
          </span>
        </div>
      </div>

      <div class="admin-room-fields">
        <label>
          Price / night
          <input
            type="number"
            min="0"
            id="admin-price-${room.id}"
            value="${Number(room.pricePerNight)}"
          >
        </label>

        <label>
          Type
          <input
            type="text"
            id="admin-type-${room.id}"
            value="${escapeHtml(room.type)}"
          >
        </label>

        <label class="admin-checkbox">
          <input
            type="checkbox"
            id="admin-available-${room.id}"
            ${room.available ? 'checked' : ''}
          >
          Available
        </label>
      </div>

      <div class="admin-room-actions">
        <button
          class="admin-update-room"
          data-id="${room.id}"
        >
          Save
        </button>

        <button
          class="admin-delete-room danger"
          data-id="${room.id}"
        >
          Delete
        </button>
      </div>
    </div>
  `
}

async function updateAdminRoom(id) {
  const price =
    Number(
      document.querySelector(
        `#admin-price-${id}`
      )?.value
    )

  const type =
    document.querySelector(
      `#admin-type-${id}`
    )?.value.trim()

  const available =
    document.querySelector(
      `#admin-available-${id}`
    )?.checked

  const original =
    rooms.find(
      room => String(room.id) === String(id)
    )

  if (!original) {
    alert('Room data not found.')
    return
  }

  try {
    const response =
      await fetch(
        `${API_URL}/api/admin/rooms/${id}`,
        {
          method: 'PUT',
          headers: authHeaders(true),
          body: JSON.stringify({
            id: Number(id),
            roomNumber: original.roomNumber,
            type,
            pricePerNight: price,
            available,
            description: original.description,
            imageUrl: original.imageUrl
          })
        }
      )

    const data = await readResponse(response)

    if (response.status === 401 ||
        response.status === 403) {
      alert('Admin access is required.')
      return
    }

    if (!response.ok) {
      throw new Error(
        errorMessage(
          data,
          'Unable to update room.'
        )
      )
    }

    alert('Room updated successfully.')
    await loadRooms()
    await loadAdminRooms()
  } catch (error) {
    console.error(error)
    alert(error.message)
  }
}

async function deleteAdminRoom(id) {
  if (
    !confirm(
      'Delete this room? This action cannot be undone.'
    )
  ) {
    return
  }

  try {
    const response =
      await fetch(
        `${API_URL}/api/admin/rooms/${id}`,
        {
          method: 'DELETE',
          headers: authHeaders()
        }
      )

    const data = await readResponse(response)

    if (response.status === 401 ||
        response.status === 403) {
      alert('Admin access is required.')
      return
    }

    if (!response.ok) {
      throw new Error(
        errorMessage(
          data,
          'Unable to delete room.'
        )
      )
    }

    alert('Room deleted successfully.')
    await loadRooms()
    await loadAdminRooms()
  } catch (error) {
    console.error(error)
    alert(error.message)
  }
}

async function loadAdminBookings() {
  const content =
    document.querySelector('#adminContent')

  if (!content) return

  content.innerHTML = `
    <div class="admin-loading">
      Loading bookings...
    </div>
  `

  try {
    const response =
      await fetch(
        `${API_URL}/api/admin/bookings`,
        {
          headers: authHeaders()
        }
      )

    const data = await readResponse(response)

    if (response.status === 401 ||
        response.status === 403) {
      alert('Admin access is required.')
      return
    }

    if (!response.ok) {
      throw new Error(
        errorMessage(
          data,
          'Unable to load bookings.'
        )
      )
    }

    const list =
      Array.isArray(data) ? data : []

    content.innerHTML = `
      <div class="admin-section-head">
        <div>
          <h3>All bookings</h3>
          <p>Review reservations created by hotel users.</p>
        </div>
      </div>

      <div class="admin-booking-list">
        ${
          list.length
            ? list.map(createAdminBookingRow).join('')
            : '<p class="admin-empty">No bookings found.</p>'
        }
      </div>
    `
  } catch (error) {
    console.error(error)
    content.innerHTML = `
      <div class="admin-error">
        ${escapeHtml(error.message)}
      </div>
    `
  }
}

function createAdminBookingRow(booking) {
  const cancelled =
    booking.status === 'CANCELLED'

  return `
    <div class="admin-booking-row">
      <div>
        <span class="booking-label">BOOKING</span>
        <strong>
          ${escapeHtml(booking.bookingNumber)}
        </strong>
        <small>
          ${escapeHtml(
            booking.user?.name ||
            booking.user?.email ||
            'Guest'
          )}
        </small>
      </div>

      <div>
        <span>ROOM</span>
        <strong>
          ${escapeHtml(booking.room?.type || 'Room')}
        </strong>
        <small>
          Room ${escapeHtml(
            booking.room?.roomNumber || '—'
          )}
        </small>
      </div>

      <div>
        <span>STAY</span>
        <strong>
          ${formatDate(booking.checkIn)}
        </strong>
        <small>
          to ${formatDate(booking.checkOut)}
        </small>
      </div>

      <div>
        <span>TOTAL</span>
        <strong>
          ${formatCurrency(booking.totalAmount)}
        </strong>
        <small class="${
          cancelled
            ? 'status-text-cancelled'
            : 'status-text-confirmed'
        }">
          ${cancelled ? 'Cancelled' : 'Confirmed'}
        </small>
      </div>
    </div>
  `
}

/* =========================================================
   S3 FILE UPLOAD
   ========================================================= */

function renderAdminUpload() {
  const content =
    document.querySelector('#adminContent')

  if (!content) return

  content.innerHTML = `
    <div class="admin-section-head">
      <div>
        <h3>Upload a file</h3>
        <p>
          Upload a file to the configured AWS S3 bucket.
        </p>
      </div>
    </div>

    <form id="s3UploadForm" class="upload-form">
      <label class="upload-dropzone">
        <span class="upload-icon">↑</span>
        <strong>Select a file</strong>
        <span>Any file accepted by the backend.</span>
        <input type="file" id="s3File" required>
      </label>

      <div id="uploadFileName" class="upload-file-name">
        No file selected
      </div>

      <div id="uploadResult" class="upload-result hidden"></div>

      <button
        type="submit"
        class="primary-modal-btn"
      >
        Upload to S3
      </button>
    </form>
  `

  const fileInput =
    document.querySelector('#s3File')

  const name =
    document.querySelector('#uploadFileName')

  fileInput?.addEventListener(
    'change',
    () => {
      name.textContent =
        fileInput.files?.[0]?.name ||
        'No file selected'
    }
  )

  document
    .querySelector('#s3UploadForm')
    ?.addEventListener(
      'submit',
      uploadToS3
    )
}

async function uploadToS3(event) {
  event.preventDefault()

  const file =
    document.querySelector('#s3File')
      ?.files?.[0]

  const result =
    document.querySelector('#uploadResult')

  const button =
    event.target.querySelector(
      'button[type="submit"]'
    )

  if (!file) {
    alert('Please choose a file.')
    return
  }

  const formData = new FormData()
  formData.append('file', file)

  setButtonLoading(
    button,
    true,
    'Uploading...'
  )

  try {
    const response =
      await fetch(
        `${API_URL}/api/files/upload`,
        {
          method: 'POST',
          headers: authHeaders(),
          body: formData
        }
      )

    const data =
      await readResponse(response)

    if (response.status === 401 ||
        response.status === 403) {
      handleUnauthorized()
      return
    }

    if (!response.ok) {
      throw new Error(
        errorMessage(
          data,
          'S3 upload failed.'
        )
      )
    }

    if (result) {
      result.classList.remove('hidden')
      result.innerHTML = `
        <strong>Upload successful</strong>
        <span>${escapeHtml(
          typeof data === 'string'
            ? data
            : JSON.stringify(data)
        )}</span>
      `
    }
  } catch (error) {
    console.error(error)

    if (result) {
      result.classList.remove('hidden')
      result.innerHTML = `
        <strong>Upload failed</strong>
        <span>${escapeHtml(error.message)}</span>
      `
    }
  } finally {
    setButtonLoading(
      button,
      false
    )
  }
}

/* =========================================================
   AI CONCIERGE
   ========================================================= */

function openAiConcierge() {
  closeDynamicModal('aiChatModal')

  const modal = document.createElement('div')
  modal.id = 'aiChatModal'
  modal.className = 'dynamic-overlay visible'

  modal.innerHTML = `
    <div class="dynamic-modal ai-chat-modal">
      <button
        class="modal-close"
        data-close-modal="aiChatModal"
      >×</button>

      <div class="ai-chat-header">
        <div class="ai-avatar-large">✦</div>
        <div>
          <span class="section-label">HAVENSTAY AI</span>
          <h2>AI Concierge</h2>
          <p>
            Ask about rooms, bookings or your stay.
          </p>
        </div>
      </div>

      <div
        class="ai-chat-messages"
        id="aiChatMessages"
      >
        <div class="ai-bubble assistant">
          Hello! How can I help you with your stay?
        </div>
      </div>

      <form
        id="aiChatForm"
        class="ai-chat-form"
      >
        <input
          id="aiChatInput"
          type="text"
          autocomplete="off"
          placeholder="Ask something about your stay..."
          required
        >
        <button type="submit">Send</button>
      </form>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeDynamicModal('aiChatModal')
      return
    }

    const close =
      event.target.closest('[data-close-modal]')

    if (close) {
      closeDynamicModal(
        close.dataset.closeModal
      )
    }
  })

  document
    .querySelector('#aiChatForm')
    ?.addEventListener(
      'submit',
      sendAiMessage
    )

  document
    .querySelector('#aiChatInput')
    ?.focus()
}

async function sendAiMessage(event) {
  event.preventDefault()

  const input =
    document.querySelector('#aiChatInput')

  const messages =
    document.querySelector('#aiChatMessages')

  const button =
    event.target.querySelector('button')

  const message =
    input?.value.trim()

  if (!message || !messages) return

  appendAiBubble(message, 'user')

  input.value = ''
  setButtonLoading(button, true, '...')

  try {
    /*
     * The backend exposes POST /api/chat.
     * The frontend sends the authenticated user's message.
     */
    const response =
      await fetch(
        `${API_URL}/api/chat`,
        {
          method: 'POST',
          headers: authHeaders(true),
          body: JSON.stringify({
            message
          })
        }
      )

    const data =
      await readResponse(response)

    if (response.status === 401 ||
        response.status === 403) {
      throw new Error(
        'Please login to use the AI concierge.'
      )
    }

    if (!response.ok) {
      throw new Error(
        errorMessage(
          data,
          'The AI concierge is currently unavailable.'
        )
      )
    }

    const reply =
      typeof data === 'string'
        ? data
        : (
            data?.answer ||
            data?.response ||
            data?.message ||
            data?.content ||
            JSON.stringify(data)
          )

    appendAiBubble(
      reply,
      'assistant'
    )
  } catch (error) {
    console.error(
      'AI concierge error:',
      error
    )

    appendAiBubble(
      error.message ||
      'Unable to contact the AI concierge.',
      'assistant error'
    )
  } finally {
    setButtonLoading(button, false)
    input?.focus()
  }
}

function appendAiBubble(text, type) {
  const messages =
    document.querySelector(
      '#aiChatMessages'
    )

  if (!messages) return

  const bubble =
    document.createElement('div')

  bubble.className =
    `ai-bubble ${type}`

  bubble.textContent = text

  messages.appendChild(bubble)

  messages.scrollTop =
    messages.scrollHeight
}

/* =========================================================
   DYNAMIC MODALS
   ========================================================= */

function closeDynamicModal(id) {
  const modal =
    document.querySelector(`#${id}`)

  if (!modal) return

  modal.classList.remove('visible')

  setTimeout(
    () => modal.remove(),
    180
  )
}

function openLoadingModal(id, text) {
  closeDynamicModal(id)

  const modal =
    document.createElement('div')

  modal.id = id
  modal.className =
    'dynamic-overlay visible'

  modal.innerHTML = `
    <div class="dynamic-modal loading-modal">
      <div class="loading-spinner"></div>
      <h3>${escapeHtml(text)}</h3>
      <p>Please wait...</p>
    </div>
  `

  document.body.appendChild(modal)
}

function showSuccessModal(
  title,
  message,
  extra = ''
) {
  closeDynamicModal('successModal')

  const modal =
    document.createElement('div')

  modal.id = 'successModal'
  modal.className =
    'dynamic-overlay visible'

  modal.innerHTML = `
    <div class="dynamic-modal success-modal">
      <button
        class="modal-close"
        data-close-modal="successModal"
      >×</button>

      <div class="success-icon">✓</div>

      <span class="section-label">
        HAVENSTAY
      </span>

      <h2>${escapeHtml(title)}</h2>

      <p class="modal-muted">
        ${escapeHtml(message)}
      </p>

      ${extra}

      <div class="modal-actions">
        <button
          class="primary-modal-btn"
          data-close-modal="successModal"
        >
          Done
        </button>

        <button
          class="secondary-modal-btn"
          id="successViewBookings"
        >
          View my bookings
        </button>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener('click', event => {
    const close =
      event.target.closest('[data-close-modal]')

    if (close) {
      closeDynamicModal(
        close.dataset.closeModal
      )
    }

    if (
      event.target.closest(
        '#successViewBookings'
      )
    ) {
      closeDynamicModal('successModal')
      loadMyBookings()
    }
  })
}

/* =========================================================
   HERO / PAGE EVENTS
   ========================================================= */

document
  .querySelector('#exploreRooms')
  ?.addEventListener(
    'click',
    () => scrollToSection('#rooms')
  )

document
  .querySelector('#myBookingsButton')
  ?.addEventListener(
    'click',
    loadMyBookings
  )

document
  .querySelector('#searchRooms')
  ?.addEventListener(
    'click',
    searchRooms
  )

document
  .querySelector('#viewAllRooms')
  ?.addEventListener(
    'click',
    () => scrollToSection('#rooms')
  )

document
  .querySelector('#loginButton')
  ?.addEventListener(
    'click',
    () => openAuth('login')
  )

/* =========================================================
   AI WIDGET
   ========================================================= */

document
  .querySelector('#aiButton')
  ?.addEventListener(
    'click',
    openAiConcierge
  )

document
  .querySelector('#aiClose')
  ?.addEventListener(
    'click',
    () => {
      document
        .querySelector('#aiMessage')
        ?.classList.add('hidden')
    }
  )

/* =========================================================
   NAVIGATION
   ========================================================= */

document
  .querySelectorAll('.navbar nav a')
  .forEach(link => {
    link.addEventListener('click', event => {
      const href =
        link.getAttribute('href')

      if (
        href &&
        href.startsWith('#')
      ) {
        event.preventDefault()
        scrollToSection(href)
      }
    })
  })

/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
  'keydown',
  event => {
    if (event.key !== 'Escape') return

    document
      .querySelectorAll(
        '.dynamic-overlay.visible'
      )
      .forEach(modal => {
        modal.classList.remove('visible')
        setTimeout(
          () => modal.remove(),
          180
        )
      })

    closeAuth()
  }
)

/* =========================================================
   DATE INPUT SETUP
   ========================================================= */

function setupDateInputs() {
  const today =
    new Date()
      .toISOString()
      .split('T')[0]

  const checkIn =
    document.querySelector('#checkIn')

  const checkOut =
    document.querySelector('#checkOut')

  if (checkIn) {
    checkIn.min = today

    checkIn.addEventListener(
      'change',
      () => {
        if (checkOut) {
          checkOut.min =
            checkIn.value ||
            today

          if (
            checkOut.value &&
            checkOut.value <= checkIn.value
          ) {
            checkOut.value = ''
          }
        }
      }
    )
  }

  if (checkOut) {
    checkOut.min = today
  }
}

/* =========================================================
   INITIALIZE
   ========================================================= */

setupDateInputs()
updateNavbar()
loadRooms()
