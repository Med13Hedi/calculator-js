# YAML Basics

## What is YAML?
**YAML** stands for "YAML Ain't Markup Language" or "Yet Another Markup Language"
- Human-readable data serialization standard
- Used for configuration files, data exchange, and settings
- Popular in DevOps, cloud platforms, and automation tools
- File extension: `.yml` or `.yaml`

---

## Why Use YAML?
- **Human-readable** - Looks like structured text, easy to understand
- **Simple syntax** - Minimal punctuation, no complex brackets
- **Widely supported** - Used by Docker, Kubernetes, CI/CD tools, and more
- **Language-independent** - Works with any programming language
- **Perfect for configuration** - Clear hierarchy and structure

---

## YAML Basic Rules

### 1. Indentation Matters (CRITICAL!)
**Use SPACES, not tabs**
- Indentation shows structure/hierarchy
- Be consistent with spacing (usually 2 spaces)
- Children elements are indented more than parents

✅ **CORRECT:**
```yaml
parent:
  child1: value1
  child2: value2
```

❌ **WRONG:**
```yaml
parent:
child1: value1  # Not indented
    child2: value2  # Too much indentation
```

### 2. Case Sensitive
```yaml
Name: value     # Different from 'name'
name: value     # Different from 'Name'
```

### 3. Colons and Spaces
```yaml
key: value      # Space after colon is required
key:value       # ❌ WRONG - no space
key :value      # ❌ WRONG - space before colon
```

### 4. Comments
```yaml
# This is a comment
name: John      # This is also a comment
# Comments start with # and go to end of line
```

---

## YAML Data Types

### 1. Strings (Text)
```yaml
# Simple strings (no quotes needed)
name: John Doe
city: New York
message: Hello World

# Strings with special characters (use quotes)
text_with_colon: "Key: Value format"
text_with_quotes: 'He said "Hello"'
special_chars: "Price: $19.99 (20% off!)"

# Multi-line strings (preserve line breaks)
poem: |
  Roses are red
  Violets are blue
  YAML is great
  And so are you!

# Multi-line strings (fold into single line)
description: >
  This long text will be
  folded into a single line
  with spaces between words
  creating one paragraph.

# Empty string
empty_string: ""
also_empty: ''
```

### 2. Numbers
```yaml
# Integers
age: 25
count: 0
negative: -42

# Floating point
price: 19.99
temperature: -5.5
scientific: 1.2e-3

# Different number formats
octal: 0o755      # Octal notation
hex: 0xFF         # Hexadecimal
binary: 0b1010    # Binary
```

### 3. Booleans (True/False)
```yaml
# All these mean TRUE
enabled: true
active: True
running: TRUE
working: yes
available: on

# All these mean FALSE
disabled: false
inactive: False
stopped: FALSE
broken: no
unavailable: off
```

### 4. Null/Empty Values
```yaml
# All these mean "no value" or "null"
empty_value: null
nothing:
blank: ~
also_null: NULL
```

### 5. Dates and Timestamps
```yaml
# ISO 8601 dates
date: 2023-12-25
datetime: 2023-12-25T10:30:00Z
timestamp: 2023-12-25 10:30:00

# Alternative formats
simple_date: 2023-12-25
with_time: 2023-12-25 10:30:00
```

---

## YAML Data Structures

### 1. Key-Value Pairs (Maps/Objects/Dictionaries)
```yaml
# Simple key-value pairs
name: John
age: 30
city: New York
country: USA

# Nested objects
person:
  name: John
  age: 30
  contact:
    email: john@example.com
    phone: "+1-555-0123"
  address:
    street: 123 Main St
    city: New York
    zipcode: 10001
    country: USA

# Inline object notation (alternative syntax)
coordinates: {x: 10, y: 20, z: 5}
```

### 2. Lists/Arrays/Sequences
```yaml
# Simple list
fruits:
  - apple
  - banana
  - orange
  - grape

# Alternative syntax (inline array)
colors: [red, green, blue, yellow]

# List of numbers
scores: [95, 87, 92, 78, 88]

# Mixed data types in list
mixed_list:
  - "text string"
  - 42
  - true
  - null
  - 3.14

# List of objects
employees:
  - name: John
    position: Developer
    salary: 75000
  - name: Jane
    position: Designer
    salary: 70000
  - name: Bob
    position: Manager
    salary: 85000

# Nested lists
matrix:
  - [1, 2, 3]
  - [4, 5, 6]
  - [7, 8, 9]

# List of lists (alternative format)
grid:
  - - a
    - b
    - c
  - - d
    - e
    - f
```

### 3. Complex Data Structures
```yaml
# Company structure combining maps and lists
company:
  name: Tech Solutions Inc
  founded: 2015
  headquarters:
    address: 456 Tech Street
    city: San Francisco
    state: CA
    zipcode: 94105
  departments:
    - name: Engineering
      head: John Smith
      employees: 25
      projects:
        - Mobile App
        - Web Platform
        - API Gateway
    - name: Marketing
      head: Sarah Johnson
      employees: 8
      budget: 500000
  technologies:
    frontend: [React, Vue.js, Angular]
    backend: [Node.js, Python, Java]
    databases: [PostgreSQL, MongoDB, Redis]
    cloud: [AWS, Azure, Docker]

# Configuration example
database_config:
  host: localhost
  port: 5432
  credentials:
    username: admin
    password: secret123
  settings:
    max_connections: 100
    timeout: 30
    ssl_enabled: true
  backup:
    enabled: true
    schedule: "0 2 * * *"  # Daily at 2 AM
    retention_days: 30
```

---

## Advanced YAML Features

### 1. Anchors and References (Reusing Data)
```yaml
# Define an anchor with &
defaults: &default_settings
  timeout: 30
  retries: 3
  ssl: true

# Reference the anchor with *
development:
  <<: *default_settings  # Merge defaults
  host: dev.example.com
  debug: true

production:
  <<: *default_settings  # Merge defaults
  host: prod.example.com
  debug: false

# Simple reference
database_user: &db_user admin
app_user: *db_user  # Same as: app_user: admin
```

### 2. Multi-Document YAML
```yaml
# First document
---
name: Document 1
type: config
settings:
  debug: true

# Second document  
---
name: Document 2
type: data
items:
  - item1
  - item2

# End of documents
...
```

### 3. Literal and Folded Strings
```yaml
# Literal block scalar (preserves newlines and indentation)
script: |
  #!/bin/bash
  echo "Starting application..."
  cd /app
  npm start

# Folded block scalar (folds newlines into spaces)
description: >
  This is a very long description
  that would normally span multiple
  lines but will be folded into
  a single line with spaces.

# Literal block with different indentation handling
code: |2
    function hello() {
        console.log("Hello World!");
    }
```

---

## Common YAML Mistakes and How to Fix Them

### 1. Indentation Errors
❌ **WRONG:**
```yaml
person:
name: John      # Should be indented
age: 30         # Should be indented
```

✅ **CORRECT:**
```yaml
person:
  name: John    # Properly indented
  age: 30       # Properly indented
```

### 2. Missing Colons
❌ **WRONG:**
```yaml
name John       # Missing colon
age 30          # Missing colon
```

✅ **CORRECT:**
```yaml
name: John      # Has colon
age: 30         # Has colon
```

### 3. Inconsistent Indentation
❌ **WRONG:**
```yaml
config:
  database:
   host: localhost    # 1 space
    port: 5432        # 2 spaces
      ssl: true       # 3 spaces
```

✅ **CORRECT:**
```yaml
config:
  database:
    host: localhost   # Consistent 2 spaces
    port: 5432        # Consistent 2 spaces
    ssl: true         # Consistent 2 spaces
```

### 4. Quotes When Needed
❌ **WRONG:**
```yaml
message: It's a beautiful day    # Apostrophe breaks parsing
version: 1.0                     # Might be interpreted as number
```

✅ **CORRECT:**
```yaml
message: "It's a beautiful day"  # Quoted to handle apostrophe
version: "1.0"                   # Quoted to keep as string
```

### 5. Boolean vs String Confusion
❌ **WRONG:**
```yaml
enabled: "true"     # This is a string, not boolean
disabled: "false"   # This is a string, not boolean
```

✅ **CORRECT:**
```yaml
enabled: true       # This is a boolean
disabled: false     # This is a boolean
# OR if you want strings:
enabled: "true"     # Explicitly a string
disabled: "false"   # Explicitly a string
```

---

## YAML Validation and Tools

### 1. Online Validators
- **YAML Checker**: https://yamlchecker.com/
- **YAML Lint**: http://www.yamllint.com/
- **Online YAML Parser**: https://yaml-online-parser.appspot.com/

### 2. Text Editors and IDEs
- **VS Code**: Install "YAML" extension
- **Sublime Text**: YAML syntax highlighting
- **Vim**: Built-in YAML support
- **IntelliJ/PyCharm**: Built-in YAML support

### 3. Command Line Tools
```bash
# Install yamllint (Python)
pip install yamllint

# Validate YAML file
yamllint myfile.yml

# Install yq (YAML processor)
# macOS: brew install yq
# Ubuntu: snap install yq

# Query YAML data
yq '.person.name' data.yml
```

---

## Best Practices

### 1. Consistency
- Use consistent indentation (2 spaces recommended)
- Use consistent naming conventions (snake_case or camelCase)
- Order keys logically (required first, optional later)

### 2. Readability
- Add comments to explain complex configurations
- Use meaningful key names
- Group related items together
- Use blank lines to separate sections

### 3. Maintainability
- Keep files reasonably small
- Use anchors for repeated values
- Validate YAML before committing
- Document expected values and formats

---

## Real-World Examples

### 1. Application Configuration
```yaml
# Application settings
app:
  name: MyWebApp
  version: "2.1.0"
  environment: production
  
# Server configuration
server:
  host: 0.0.0.0
  port: 8080
  ssl:
    enabled: true
    certificate: /path/to/cert.pem
    private_key: /path/to/key.pem

# Database configuration
database:
  type: postgresql
  host: db.example.com
  port: 5432
  name: myapp_db
  pool:
    min_connections: 5
    max_connections: 20

# Logging configuration
logging:
  level: info
  format: json
  outputs:
    - console
    - file
  file:
    path: /var/log/myapp.log
    max_size: 100MB
    rotation: daily
```

### 2. Docker Compose Configuration
```yaml
version: '3.8'

services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./html:/usr/share/nginx/html
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - api
    restart: unless-stopped

  api:
    build: 
      context: ./api
      dockerfile: Dockerfile
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - db_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  db_data:
```

---

## Practice Exercises

### Exercise 1: Basic Structure
Create a YAML file for a student record:
- Name: John Smith
- Age: 20
- Student ID: 12345
- Courses: Math, Science, History
- GPA: 3.75
- Graduated: false

**Solution:**
```yaml
name: John Smith
age: 20
student_id: 12345
courses:
  - Math
  - Science
  - History
gpa: 3.75
graduated: false
```

### Exercise 2: Nested Structure
Create a YAML file for a library system:
- Library name: City Library
- Address with street, city, state, zip
- Books list with title, author, year, available
- Staff list with name, position, years_experience

**Solution:**
```yaml
library:
  name: City Library
  address:
    street: 123 Main Street
    city: Springfield
    state: IL
    zip: 62701
  books:
    - title: "To Kill a Mockingbird"
      author: Harper Lee
      year: 1960
      available: true
    - title: "1984"
      author: George Orwell
      year: 1949
      available: false
  staff:
    - name: Alice Johnson
      position: Head Librarian
      years_experience: 15
    - name: Bob Smith
      position: Assistant
      years_experience: 3
```

---

## When to Use YAML

### ✅ Good For:
- Configuration files
- Data serialization
- Human-readable settings
- DevOps and automation tools
- API specifications
- Documentation with data

### ❌ Not Ideal For:
- Large datasets (use JSON or databases)
- High-performance parsing needs
- Complex data transformations
- Binary data storage
- Highly nested structures (readability suffers)

---

## Next Steps

Now that you understand YAML basics, you can:
1. **Practice writing** YAML files for different scenarios
2. **Use YAML validators** to check your syntax
3. **Explore specific tools** that use YAML (Docker, Kubernetes, CI/CD)
4. **Learn advanced features** like anchors and multi-document files

Remember: YAML is just a format for organizing data. The real power comes from the tools and applications that use it! 🚀
