# Hotel AI Assistant Backend

A complete Spring Boot backend inspired by the architecture of a hotel booking AI assistant. It is built from scratch and uses **Java 25, Spring Boot, Spring Security, JWT, Spring Data JPA/Hibernate, MySQL, AWS S3, LangChain4j and OpenAI**.

## Features
- User registration and JWT login
- Role-based access: USER / ADMIN
- Hotel rooms CRUD and availability
- Booking creation, lookup, cancellation and history
- AI assistant with LangChain4j AI Services
- Tool calling for booking lookup, cancellation and booking history
- AWS S3 file upload endpoint
- MySQL persistence
- Seeded demo accounts and rooms

## Requirements
- JDK 25+
- Maven 3.6+
- MySQL 8+
- OpenAI API key for AI chat
- AWS credentials for S3 upload (optional until file upload is used)

## 1. Database
Create a MySQL database if desired:
```sql
CREATE DATABASE hotel_ai;
```
The default JDBC URL also creates it automatically when the MySQL user has permission.

## 2. Configure environment variables
Windows PowerShell:
```powershell
$env:DB_USERNAME="root"
$env:DB_PASSWORD="root"
$env:OPENAI_API_KEY="your-key"
$env:AWS_REGION="ap-south-1"
$env:AWS_S3_BUCKET="your-bucket"
```

AWS SDK uses the standard AWS credential chain. For local development, `aws configure` is recommended.

## 3. Run
```bash
mvn spring-boot:run
```
Or:
```bash
mvn clean package
java -jar target/hotel-ai-assistant-backend-1.0.0.jar
```

## Demo accounts
- Guest: `guest@hotel.local` / `Guest@123`
- Admin: `admin@hotel.local` / `Admin@123`

Change these before any real deployment.

## API flow
### Register
`POST /api/auth/register`
```json
{"name":"Vishnu","email":"vishnu@example.com","password":"Password@123"}
```

### Login
`POST /api/auth/login`
```json
{"email":"guest@hotel.local","password":"Guest@123"}
```
Copy the returned JWT and send:
`Authorization: Bearer <token>`

### Rooms
- `GET /api/rooms`
- `GET /api/rooms/available`
- `POST /api/rooms` (ADMIN)

### Bookings
- `POST /api/bookings`
```json
{"roomId":1,"checkIn":"2026-10-10","checkOut":"2026-10-12"}
```
- `GET /api/bookings/mine`
- `GET /api/bookings/{bookingNumber}`
- `DELETE /api/bookings/{bookingNumber}`

### AI assistant
`POST /api/chat`
```json
{"message":"Show my bookings"}
```
The authenticated user's email is included in the assistant context. LangChain4j exposes `BookingTools` methods as tools so the LLM can retrieve/cancel bookings rather than inventing them.

### S3 upload
`POST /api/files/upload` as multipart form field `file`.

## Architecture
```text
Client -> Spring Boot REST API -> Spring Security/JWT
                         |
                         +-> MySQL via JPA/Hibernate
                         +-> AWS S3
                         +-> LangChain4j -> OpenAI
                                         |
                                         +-> BookingTools -> BookingService -> MySQL
```

## Important
This is an educational/interview project. Do not use the seeded credentials or default JWT secret in production. Add HTTPS, secret management, stricter validation, audit logging, rate limiting, database migrations and tests before production use.

LangChain4j's Spring Boot integration supports Spring Boot 3.5+ and Java 25; this project uses the Spring Boot 3 starter. See the official docs for configuration details.
