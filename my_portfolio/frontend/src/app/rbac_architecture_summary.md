# Project RBAC Architecture Guide

This document serves as the definitive guide to how Role-Based Access Control (RBAC) operates in this project. The architecture is designed to securely handle two fundamentally different user types—**Staff** and **Company**—using a single, unified codebase.

---

## 1. The Core Philosophy

The RBAC system relies on the backend as the ultimate source of truth, but the frontend enforces the rules at two distinct layers:
1. **The Routing Layer (`middleware.ts`)**: Stops users from navigating to pages they don't own.
2. **The UI Layer (`utility/permission.ts`)**: Hides buttons, components, and sidebar links they shouldn't see.

To keep cookies small and requests fast, the frontend splits the backend's heavy permission payload into two parts during login:
- A **Minimal Cookie** for the Middleware.
- A **Full Payload in LocalStorage** for the UI.

---

## 2. How Staff Users are Processed

Staff users have granular, customizable roles (e.g., Manager, Sales Lead) defined in the backend. 

### The Backend Payload
The backend sends the Staff user their exact permission array, explicitly marking `isChecked: true` for actions they are allowed to perform.

### Frontend Login Processing (`Login.tsx`)
1. The frontend saves the raw, full payload into `localStorage`.
2. For the secure cookie, it iterates through the actions and **strictly filters out** anything where `isChecked === false`. 
3. The resulting cookie contains an ultra-lightweight array of *only the exact actions the Staff member is authorized to use*.

### Middleware Enforcement
Because the cookie was pre-filtered during login, the middleware logic is incredibly simple and secure:
> *"Does the action for this route exist in your cookie? If yes, let you in. If no, kick you out."*

---

## 3. How Company Users are Processed

Company users are the super-admins of their own workspace. They don't have custom roles; they have access to the entire system (limited only by their subscription features, which is handled separately).

### The Backend Payload
Because the backend doesn't run Company users through the granular Role builder, it simply sends them the master list of all system permissions, but defaults them all to `isChecked: false`.

### Frontend Login Processing (`Login.tsx`)
1. The frontend recognizes `userType === "company"`.
2. It deliberately **bypasses the `isChecked` filter**. 
3. It saves the entire master list of actions into the secure cookie.

### UI Enforcement (`utility/permission.ts`)
When a React component asks, *"Can this user see the Delete Button?"*, the utility function checks the raw `localStorage` payload. 
- It sees `isChecked: false` for the Delete action, but it also sees `userType === "company"`. 
- It explicitly ignores the `false` flag and returns `true`, granting the Admin full UI access.

---

## 4. The Single Source of Truth (`utility/routes.ts`)

To connect physical frontend web pages to backend API permissions, the system relies on a single dictionary file: `utility/routes.ts`.

### `ROUTE_MAP` (The Sidebar Bridge)
The backend sends dynamic URLs for the sidebar (e.g., `/staff-management`). However, your Next.js physical files are named differently (e.g., `/staff`). 
The `ROUTE_MAP` instantly translates backend URLs to physical paths so the user never hits a 404 error when clicking the Sidebar.

### `ROUTE_PERMISSIONS` (The Security Bridge)
This dictionary maps physical paths to their exact backend requirement.
```typescript
"/manage-leads": { module: "lead_management", action: "VIEW_LEADS" }
```
Because it is centralized here:
1. `middleware.ts` imports it to protect routes.
2. `Login.tsx` imports it to determine the user's first allowed landing page.
3. If you ever rename a route or add a new one, you only have to update this one file!

---

## Summary Checklist
- **UI Button Hiding:** Driven by `utility/permission.ts` (Reads `localStorage`).
- **Route Protection:** Driven by `middleware.ts` (Reads `Cookie`).
- **Path Translation:** Driven by `ROUTE_MAP` in `utility/routes.ts`.
- **Security Dictionary:** Driven by `ROUTE_PERMISSIONS` in `utility/routes.ts`.
