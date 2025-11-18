# Demo Troubleshooting Guide

## 🚨 **Common Issues & Quick Fixes**

### **Issue 1: Application Won't Start**
```bash
# Problem: ng serve fails
# Solution:
cd angular-demo-app
npm install
ng serve --port 4200
```

### **Issue 2: API Calls Failing**
```bash
# Problem: JSONPlaceholder not responding
# Check: Internet connection
# Backup: Use mock data service
# Show: Network tab in DevTools
```

### **Issue 3: Component Not Loading**
```bash
# Problem: Lazy loaded component fails
# Solution: Check router configuration
# Demo opportunity: "This shows lazy loading in action!"
```

---

## ⚡ **Demo Commands Cheat Sheet**

### **Development Commands**
```bash
# Start application
ng serve --port 4200

# Build for production  
ng build

# Run tests
ng test

# Bundle analyzer
ng build --stats-json
```

### **Quick Navigation URLs**
- Dashboard: `http://localhost:4200/`
- Users: `http://localhost:4200/users` 
- User Detail: `http://localhost:4200/user/1`
- Weather: `http://localhost:4200/weather`
- Todos: `http://localhost:4200/todos`

---

## 🎯 **Demo Flow Checklist**

### **Pre-Demo (5 minutes before)**
- [ ] `ng serve --port 4200` is running
- [ ] Browser open at `http://localhost:4200`
- [ ] VS Code open with project
- [ ] Internet connection verified
- [ ] Screen sharing tested

### **During Demo**
- [ ] Start with project structure overview
- [ ] Show each component progressively
- [ ] Demonstrate API calls in Network tab
- [ ] Highlight key code sections
- [ ] Allow for questions throughout

### **Demo Recovery Strategies**
- **If API is slow:** "Perfect example of real network conditions"
- **If component breaks:** "Great opportunity to show debugging"
- **If audience asks complex questions:** "Let me show you in the code"

---

## 📱 **Interactive Demo Ideas**

### **Audience Participation**
- Ask for city names to search in weather component
- Let audience suggest todo items to add
- Have them pick which user to view details for
- Show different browser sizes for responsive design

### **Advanced Demonstrations**
- Open Angular DevTools to show component tree
- Use Network tab to show API calls
- Demonstrate form validation with invalid inputs
- Show mobile responsive design

---

## 🛠️ **Backup Plans**

### **If Internet Fails**
- Switch to mock services
- Show offline capabilities
- Focus on component architecture
- Demonstrate local state management

### **If Demo App Crashes**
- Have screenshots ready
- Show code walkthrough instead
- Discuss architecture concepts
- Use Angular CLI to generate new components live

---

*Remember: Demos rarely go perfectly, but that's what makes them authentic and educational! 🎯*