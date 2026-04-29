# Dynamic Multi-Category Catalog

A responsive web application that displays a multi-category product catalog with dynamic item details based on category-specific properties.

## Features

✅ **Category Overview** - Clean display of all product categories (Cars, Bikes, Phones, Computers)
✅ **Dynamic Item Rendering** - Different categories display different properties automatically
✅ **Item Detail Page** - Comprehensive product view with all specifications
✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
✅ **Category Filtering** - Filter products by category
✅ **Related Items** - See other products in the same category
✅ **Fast Navigation** - React Router for smooth page transitions
✅ **Modern UI** - Clean, professional design with hover effects

## Project Structure

```
Dynamic Multi-Category Catalog/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── ItemDetail.js
│   │   └── ItemDetail.css
│   ├── data/
│   │   └── catalogData.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## Installation

1. **Clone or download the project**
   ```bash
   cd "Dynamic Multi-Category Catalog"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

The app will open at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Technologies Used

- **React 18.2.0** - Modern JavaScript library for building user interfaces
- **React Router DOM 6.14.0** - Client-side routing for seamless navigation
- **CSS3** - Custom styling with responsive design patterns
- **JavaScript ES6+** - Modern JavaScript features

## Key Implementation Details

### Home Page
- Displays all categories with item previews
- Category filter buttons for easy navigation
- Shows up to 4 items per category with "View All" option
- Responsive grid layout that adapts to screen size

### Item Detail Page
- Dynamic property rendering based on `itemprops` array
- Product image with zoom effect on hover
- Related items carousel showing similar products
- Breadcrumb navigation for context
- Call-to-action buttons (Wishlist, Share)

### Responsive Design
- **Desktop** (1024px+): 4-column grid, full details
- **Tablet** (768px-1023px): 2-3 column grid, optimized spacing
- **Mobile** (480px-767px): Responsive single/dual column
- **Small Mobile** (<480px): Single column, optimized for touch

## Dynamic Property Handling

The application intelligently handles different product categories by:
1. Iterating through the `itemprops` array for each product
2. Displaying label-value pairs without hardcoding property names
3. Automatically adapting the layout for different numbers of properties
4. Supporting any new categories or properties added to the data

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Efficient data grouping using `useMemo`
- CSS transitions for smooth animations
- Optimized images with proper sizing
- Minimal re-renders through React best practices

## Future Enhancements

- Search functionality
- Product comparison tool
- Shopping cart feature
- User reviews and ratings
- Advanced filtering options
- Database integration
- User authentication

## License

This project is open source and available under the MIT License.

---

For questions or support, please refer to the WRITEUP.md file for implementation details.
