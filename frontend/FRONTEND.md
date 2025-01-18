# Frontend Architecture Guide

## Project Structure

```
frontend/
├── app/                    # App router directory (Next.js 14)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── (routes)/         # Route groups
├── components/            # Reusable UI components
│   ├── ui/               # Basic UI components
│   └── features/         # Feature-specific components
├── lib/                   # Shared utilities and configurations
├── hooks/                # Custom React hooks
├── styles/               # Global styles and theme
└── types/                # TypeScript type definitions
```

## Architecture Principles

### 1. Component Organization

We follow a three-tier component hierarchy:
1. **Page Components** (`app/(routes)/**/page.tsx`)
   - Handle routing and data fetching
   - Compose feature components
   - Keep minimal logic

2. **Feature Components** (`components/features/`)
   - Implement specific business features
   - Handle complex state management
   - Example: `UserDashboard`, `AuthForms`

3. **UI Components** (`components/ui/`)
   - Reusable, presentational components
   - Stateless when possible
   - Example: `Button`, `Card`, `Input`

### 2. State Management

- Use React's built-in hooks for local state
- Leverage Next.js Server Components for data fetching
- Keep state as close to where it's used as possible
- Use Context API for theme/auth state only

### 3. Data Fetching

- Prefer Server Components for initial data loading
- Use Supabase client for real-time updates
- Handle loading and error states consistently
- Cache data appropriately using Next.js caching

## Best Practices

### Component Design

1. **Single Responsibility**
   - Each component should do one thing well
   - Split complex components into smaller ones
   - Keep files under 200 lines when possible

2. **Props Interface**
   ```typescript
   interface ButtonProps {
     variant: 'primary' | 'secondary';
     size?: 'sm' | 'md' | 'lg';
     children: React.ReactNode;
   }
   ```

3. **Composition Over Props**
   ```typescript
   // Good
   <Card>
     <Card.Header>Title</Card.Header>
     <Card.Body>Content</Card.Body>
   </Card>

   // Avoid
   <Card header="Title" body="Content" />
   ```

### Styling

1. **Tailwind CSS Usage**
   - Use utility classes for one-off styles
   - Create component classes for repeated patterns
   - Follow our ocean-inspired theme

2. **CSS Modules** (when needed)
   - Use for complex animations
   - Keep styles colocated with components
   - Follow BEM naming convention

### Performance

1. **Code Splitting**
   - Use dynamic imports for large components
   - Lazy load below-the-fold content
   - Optimize images using Next.js Image component

2. **Rendering Strategy**
   - Use Server Components by default
   - Client Components only when needed (interactivity)
   - Implement streaming where beneficial

## Feature Development Guide

1. **Planning**
   - Create component diagram
   - Define data requirements
   - Identify reusable components

2. **Implementation**
   ```typescript
   // components/features/Dashboard/ActivityFeed.tsx
   import { useEffect } from 'react';
   import { supabase } from '@/lib/supabase';
   
   export function ActivityFeed() {
     // Implementation...
   }
   ```

3. **Testing**
   - Write unit tests for complex logic
   - Add integration tests for features
   - Test responsive design

## Common Patterns

### Error Handling

```typescript
async function fetchData() {
  try {
    const data = await supabase.from('table').select('*');
    return { data, error: null };
  } catch (error) {
    return { data: null, error: 'Failed to fetch data' };
  }
}
```

### Loading States

```typescript
function LoadingWrapper({ children, isLoading }) {
  if (isLoading) return <LoadingSkeleton />;
  return children;
}
```

### Form Handling

```typescript
function LoginForm() {
  const [formData, setFormData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle submission
  };
}
```

## Maintenance Guidelines

1. **Code Review Checklist**
   - Component follows single responsibility
   - Proper error handling
   - Responsive design
   - Performance considerations
   - Type safety

2. **Documentation**
   - Update component documentation
   - Add JSDoc comments for complex functions
   - Keep README up to date

3. **Refactoring Triggers**
   - Component exceeds 200 lines
   - Duplicate code appears
   - Performance issues identified
   - New patterns emerge

## Ocean Theme Implementation

Our ocean-inspired design system uses:

1. **Colors**
   ```typescript
   // tailwind.config.ts
   colors: {
     ocean: {
       shallow: '#8BD8BD',
       deep: '#243B55',
       foam: '#F8F9FA',
     }
   }
   ```

2. **Animations**
   - Smooth transitions
   - Wave-like effects
   - Floating elements

3. **Components**
   - Rounded corners
   - Gradient backgrounds
   - Translucent overlays

## Getting Help

1. Check the component documentation
2. Review existing implementations
3. Discuss in team code reviews
4. Reference Next.js documentation 