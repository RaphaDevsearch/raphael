# Project Structure Documentation

This document outlines the organization and structure of the Raphael portfolio project.

## 📁 Directory Structure

```
/workspaces/raphael/
├── app/                          # Next.js app directory
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with Navbar and Footer
│   ├── page.tsx                  # Home page (profile)
│   ├── lab/                      # Lab section
│   ├── projects/                 # Projects section
│   └── studyhub/                 # StudyHub section
│
├── components/                   # React components
│   ├── facebook/                 # Facebook-style profile components
│   │   ├── Feed.tsx              # Main feed with posts
│   │   ├── Post.tsx              # Individual post component
│   │   ├── PostCreator.tsx       # Post creation interface
│   │   ├── ProfileCover.tsx      # Profile cover image
│   │   ├── ProfileHeader.tsx     # Profile header with info
│   │   ├── ProfileNav.tsx        # Profile navigation tabs
│   │   └── Sidebar.tsx           # Sidebar with personal info
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx            # Main navigation bar
│   │   └── Footer.tsx            # Footer component
│   └── ui/                       # Reusable UI components
│       ├── Button.tsx            # Button component
│       ├── Card.tsx              # Card component
│       └── Container.tsx         # Container component
│
├── types/                        # TypeScript type definitions
│   └── index.ts                  # Centralized types (Post, Profile, NavItem)
│
├── constants/                    # Application constants
│   └── data.ts                   # Hardcoded data (PROFILE_DATA, MOCK_POSTS)
│
├── public/                       # Static assets
│   ├── raphael-profile.png       # Profile picture
│   ├── raphael-cover.png         # Cover image
│   └── ...
│
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── README.md                     # Project README
```

## 🗂️ Organization Principles

### Types (`/types`)
All TypeScript interfaces and types are centralized here for:
- Consistency across components
- Easy maintenance
- Clear contracts between components

**Current types:**
- `Post` - Post data structure
- `Profile` - Profile information
- `NavItem` - Navigation items

### Constants (`/constants`)
Application data and configuration constants:
- Mock/hardcoded data
- Configuration values
- Default values

**Current files:**
- `data.ts` - Profile and post data

### Components (`/components`)
Organized by functionality/domain:
- **facebook/** - Profile/social-related components
- **layout/** - Page layout components
- **ui/** - Reusable UI utilities

#### Component Best Practices:
- Use TypeScript interfaces for props
- Import types from `/types`
- Import data from `/constants`
- Use Tailwind CSS for styling
- Add clear comments for sections

## 🏗️ Architectural Decisions

### 1. **Type Safety**
- All components use TypeScript
- Centralized type definitions prevent duplication
- Props typed with interfaces

### 2. **Data Management**
- Mock data extracted to `/constants/data.ts`
- Single source of truth for mock data
- Easy to replace with API calls later

### 3. **Consistent Styling**
- Uses Tailwind CSS for all components
- Components accept `className` prop for customization
- Hover states and transitions defined

### 4. **Code Consistency**
- Proper import organization (React first, then libs, then local)
- Clear component comments
- Consistent formatting and spacing

## 🔄 Data Flow

```
app/page.tsx (HomePage)
├── ProfileCover (static)
├── ProfileHeader (uses PROFILE_DATA)
├── ProfileNav (hardcoded tabs)
└── Content Layout
    ├── Sidebar (static content)
    └── Feed (uses MOCK_POSTS)
        ├── PostCreator (static)
        └── Post[] (renders from MOCK_POSTS using Post type)
```

## 📝 Adding New Features

### Adding a New Page
1. Create a new folder under `/app`
2. Add a `page.tsx` file
3. Import components from `/components`

### Adding a New Component
1. Create file in appropriate `/components` subfolder
2. Define props interface in component or import from `/types`
3. Use Tailwind CSS for styling
4. Add JSDoc comments for clarity

### Adding New Types
1. Add to `/types/index.ts`
2. Export the type
3. Import where needed

### Adding New Data
1. Add to `/constants/data.ts`
2. Export as constant
3. Import in component

## 🛠️ Development Workflow

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📦 Key Dependencies
- **Next.js 16.1.6** - React framework
- **React 19.2.3** - UI library
- **Tailwind CSS 4.1.18** - Styling
- **Lucide React 0.564.0** - Icons
- **TypeScript 5** - Type safety

## ✨ Future Improvements
- [ ] Add state management (Zustand/Context API)
- [ ] Extract API endpoints to `/api`
- [ ] Add error boundaries
- [ ] Add loading states
- [ ] Convert mock data to real API calls
- [ ] Add form validation utilities
- [ ] Add reusable hooks in `/hooks`
