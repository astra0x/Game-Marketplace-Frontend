# Icon Component

A reusable, responsive icon component that can be used throughout the project for consistent icon styling and behavior.

## Features

- **Multiple Sizes**: `small`, `medium`, `large`
- **Color Variants**: `default`, `primary`, `secondary`, `success`, `warning`, `danger`
- **Clickable**: Optional onClick handler for interactive icons
- **Responsive**: Automatically adjusts for different screen sizes
- **Accessible**: Proper focus states and disabled handling
- **Flexible**: Supports both emoji strings and React components

## Usage

### Basic Usage

```tsx
import Icon from './components/Icon';

// Simple emoji icon
<Icon icon="🛒" />

// With size and variant
<Icon icon="🔍" size="medium" variant="primary" />
```

### With React Icons

```tsx
import { FaShoppingCart } from 'react-icons/fa';
import Icon from './components/Icon';

<Icon icon={<FaShoppingCart />} variant="primary" />
```

### Clickable Icons

```tsx
<Icon 
  icon="⚙️" 
  variant="secondary" 
  onClick={() => console.log('Settings clicked!')} 
/>
```

### Different Sizes

```tsx
<Icon icon="💰" size="small" />
<Icon icon="💰" size="medium" />
<Icon icon="💰" size="large" />
```

### Color Variants

```tsx
<Icon icon="✅" variant="success" />
<Icon icon="⚠️" variant="warning" />
<Icon icon="❌" variant="danger" />
<Icon icon="💰" variant="primary" />
<Icon icon="👤" variant="secondary" />
<Icon icon="🔧" variant="default" />
```

### Custom Styling

```tsx
<Icon 
  icon="🎮" 
  variant="primary" 
  className="custom-game-icon"
  style={{ border: '2px solid #4ade80' }}
/>

// More CSS editing examples
<Icon 
  icon="⭐" 
  variant="warning" 
  style={{ 
    borderRadius: '50%',
    boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)',
    transform: 'rotate(45deg)'
  }} 
/>

<Icon 
  icon="💎" 
  variant="primary" 
  style={{ 
    background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
    border: '2px solid #4ade80',
    fontSize: '1.2rem'
  }} 
/>
```

### Disabled State

```tsx
<Icon 
  icon="🚫" 
  variant="danger" 
  disabled={true}
  onClick={() => console.log('This should not work')} 
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `string \| React.ReactNode` | Required | The icon content (emoji string or React component) |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the icon |
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Color variant |
| `className` | `string` | `''` | Additional CSS classes |
| `onClick` | `() => void` | `undefined` | Click handler (makes icon clickable) |
| `disabled` | `boolean` | `false` | Disabled state |
| `style` | `React.CSSProperties` | `{}` | Inline CSS styles for custom styling |

## Examples in the Project

### ProductCard Component
```tsx
<Icon 
  icon={<FaShoppingCart />} 
  size="small" 
  variant="primary" 
  className="cart-icon"
/>
```

### Header Component
```tsx
<Icon icon="🛒" size="small" variant="default" className="cart-icon" />
<Icon icon="👤" size="small" variant="default" className="person-icon" />
```

## Styling

The component includes:
- Responsive design for all screen sizes
- Smooth hover transitions
- Focus states for accessibility
- Disabled state styling
- Consistent spacing and sizing

## Migration from Old Icon Usage

Replace old icon implementations:

**Before:**
```tsx
<span className="cart-icon">🛒</span>
<div className="button-icon"><Icon /></div>
```

**After:**
```tsx
<Icon icon="🛒" size="small" variant="default" className="cart-icon" />
<Icon icon={<FaIcon />} size="medium" variant="primary" />
```

## Best Practices

1. **Use consistent sizing** within the same UI section
2. **Choose appropriate variants** for semantic meaning
3. **Add onClick handlers** for interactive icons
4. **Use className** for custom styling when needed
5. **Consider accessibility** by using descriptive icons
6. **Maintain consistency** across the application
