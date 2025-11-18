# Quick Demo Reference Card

## 🎯 **Demo Flow & Key Files** (Print this out!)

### **Phase 1: Architecture (3 min)**
- **Show:** Project structure in VS Code Explorer
- **Files:** `app.routes.ts`, `app.config.ts`, `package.json`
- **Key Point:** "No NgModule - pure standalone components"

### **Phase 2: Dashboard - Core Concepts (4 min)**
- **File:** `dashboard.component.ts` + `.html`
- **Demo:** Click buttons, type in input, hover highlighted areas
- **Key Points:** Data binding types, standalone imports

### **Phase 3: Users - API Integration (5 min)**
- **Files:** `user.service.ts`, `user-list.component.ts`
- **Demo:** Open Network tab, navigate to /users, show API call
- **Key Points:** JSONPlaceholder API, Observable pattern, error handling

### **Phase 4: User Detail - Routing (3 min)**
- **Files:** `app.routes.ts`, `user-detail.component.ts`
- **Demo:** Click user card, show URL change with ID parameter
- **Key Points:** Lazy loading, route parameters, navigation

### **Phase 5: Custom Features (2 min)**
- **Files:** `capitalize.pipe.ts`, `highlight.directive.ts`
- **Demo:** Point out capitalized names, hover effects
- **Key Points:** Data transformation, DOM manipulation

### **Phase 6: Forms (2 min)**
- **File:** `weather.component.html`
- **Demo:** Try invalid form, show validation messages
- **Key Points:** Template-driven forms, real-time validation

### **Phase 7: CRUD Operations (1 min)**
- **File:** `todo.component.ts`
- **Demo:** Add todo, toggle completion, delete item
- **Key Points:** Complete state management, filtering

---

## 🔗 **Quick URLs for Demo**
```
Dashboard:    http://localhost:4200/
Users:        http://localhost:4200/users  
User Detail:  http://localhost:4200/user/1
Weather:      http://localhost:4200/weather
Todos:        http://localhost:4200/todos
```

---

## 🛠️ **DevTools Setup**
- **Network Tab:** Show API calls to JSONPlaceholder
- **Console Tab:** Monitor for any errors
- **Elements Tab:** Show DOM changes from directives

---

## 💬 **Key Talking Points**

| Concept | File | What to Say |
|---------|------|-------------|
| **Standalone Components** | `*.component.ts` | "No NgModule needed - Angular 18 revolution!" |
| **Lazy Loading** | `app.routes.ts` | "Components load only when needed - watch Network tab" |
| **API Integration** | `user.service.ts` | "Real API calls to JSONPlaceholder - free testing API" |
| **Custom Pipes** | `capitalize.pipe.ts` | "Transform data for display without changing source" |
| **Custom Directives** | `highlight.directive.ts` | "Add behavior to any DOM element" |
| **Form Validation** | `weather.component.html` | "Real-time validation with clear user feedback" |
| **TypeScript** | Any `.ts` file | "Full type safety - catch errors at compile time" |

---

## 🚨 **Emergency Backup Plans**

**If Internet Fails:**
- Focus on local components (Dashboard, Todo)
- Show code architecture and TypeScript features
- Demonstrate form validation offline

**If Component Breaks:**
- "Perfect opportunity to show debugging!"
- Open Angular DevTools
- Show error handling in action

**If Audience Gets Technical:**
- Have `package.json` ready to show dependencies
- Open `angular.json` for build configuration
- Show `tsconfig.json` for TypeScript setup

---

## ⚡ **Demo Commands**
```bash
# Start demo
ng serve --port 4200

# Show build output
ng build

# Show help
ng --help
```

---

## 🎯 **Success Metrics**
- [ ] Showed all 8 Angular concepts
- [ ] Demonstrated real API integration  
- [ ] Interactive audience participation
- [ ] Clean code examples shown
- [ ] Questions answered confidently

**Remember:** Keep each file explanation under 60 seconds. Show code → Explain concept → Demonstrate live!