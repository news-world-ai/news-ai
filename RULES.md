# Application Rules and Guidelines

This document outlines the technical constraints, business rules, and validation requirements for the News AI Platform.

## Authentication Rules

1. **User Authentication**
   - Users must be authenticated to access personalized features
   - JWT tokens must expire after 24 hours
   - Refresh tokens must be rotated after each use
   - Maximum of 5 failed login attempts before temporary lockout (15 minutes)
   - Passwords must be at least 8 characters long with a mix of letters, numbers, and symbols

2. **Authorization Levels**
   - Guest Users: Can view public news feeds only
   - Registered Users: Can access personalized features and save preferences
   - Premium Users: Can access exclusive content and advanced features
   - Administrators: Full system access and management capabilities

## Content Rules

1. **News Content**
   - News articles must have a title, description, source, and publication date
   - Content must be categorized into predefined categories
   - NSFW content must be properly tagged and filtered
   - News sources must be verified and whitelisted
   - Articles older than 30 days must be marked as archived
   - Maximum article length: 10,000 characters

2. **Content Moderation**
   - All user-generated content must be moderated before publication
   - Comments must not contain prohibited words or hate speech
   - Users can report inappropriate content
   - Three valid reports trigger automatic content review
   - Content moderators must review flagged content within 24 hours

## Data Management Rules

1. **User Data**
   - Personal data must be encrypted at rest
   - User preferences must be updated in real-time
   - Inactive accounts (no login for 12 months) should be archived
   - Users can request data export in JSON format
   - Data retention period: 24 months for non-active users

2. **Performance Requirements**
   - API response time must not exceed 200ms
   - Search results must return within 500ms
   - Maximum payload size: 5MB
   - Rate limiting: 100 requests per minute per user
   - Cache invalidation every 5 minutes for news feed

## Technical Constraints

1. **API Endpoints**
   - Must follow RESTful conventions
   - Must use JSON for request/response bodies
   - Must include appropriate error codes and messages
   - Must validate input parameters
   - Must be versioned (v1, v2, etc.)

2. **Database Rules**
   - Soft deletion for user data
   - Maximum connection pool size: 50
   - Transaction timeout: 30 seconds
   - Regular database backups every 6 hours
   - Indexes must be created for frequently queried fields

## Security Rules

1. **Input Validation**
   - All user inputs must be sanitized
   - SQL injection prevention required
   - XSS protection required
   - CSRF tokens required for forms
   - File uploads limited to 10MB

2. **API Security**
   - CORS policy must be strictly enforced
   - Rate limiting must be implemented
   - API keys must be rotated every 90 days
   - SSL/TLS required for all connections
   - Request logging for security audits

## Caching Rules

1. **Content Caching**
   - Public news feed cached for 5 minutes
   - User-specific content cached for 1 minute
   - Search results cached for 2 minutes
   - Static assets cached for 24 hours
   - Cache must be invalidated on content update

2. **Cache Management**
   - Maximum cache size: 1GB
   - LRU cache eviction policy
   - Separate cache layers for different content types
   - Cache warm-up required after deployment
   - Cache statistics must be monitored

## Error Handling Rules

1. **Client Errors**
   - Must return appropriate HTTP status codes
   - Error messages must be user-friendly
   - Validation errors must specify failed fields
   - Rate limit errors must include retry-after header
   - Must log client errors for monitoring

2. **Server Errors**
   - Must not expose internal error details to clients
   - Must be logged with stack traces
   - Must trigger alerts for critical errors
   - Must implement circuit breaker pattern
   - Must have fallback mechanisms

## Monitoring Rules

1. **Performance Monitoring**
   - API response times must be tracked
   - Error rates must be monitored
   - User engagement metrics must be collected
   - Resource utilization must be tracked
   - Real-time alerting for critical issues

2. **Business Metrics**
   - Daily active users must be tracked
   - Content engagement rates must be measured
   - User retention metrics must be calculated
   - Premium conversion rates must be monitored
   - Search performance metrics must be tracked
