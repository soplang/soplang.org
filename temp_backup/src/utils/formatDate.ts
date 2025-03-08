/**
 * Format a date in a consistent way between server and client
 * to avoid hydration mismatches
 */
export function formatDate(date: Date): string {
  // Use UTC methods to ensure consistent output regardless of timezone
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  
  // Array of month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Return formatted date string
  return `${monthNames[month]} ${day}, ${year}`;
}

/**
 * Get the current year in a consistent way between server and client
 */
export function getCurrentYear(): number {
  return new Date().getUTCFullYear();
} 