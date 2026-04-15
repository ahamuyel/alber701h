export function calculateTotalExperience(experiences: { startDate: string; endDate?: string }[]): string {
  let totalMonths = 0;
  const now = new Date();

  for (const exp of experiences) {
    const start = parseDate(exp.startDate);
    const end = exp.endDate ? parseDate(exp.endDate) : now;
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                   (end.getMonth() - start.getMonth());
    
    totalMonths += Math.max(0, months);
  }

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  if (years === 0) return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  if (remainingMonths === 0) return `${years} year${years !== 1 ? 's' : ''}`;
  return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
}

function parseDate(dateStr: string): Date {
  const [year, month] = dateStr.split('-').map(Number);
  return new Date(year, (month || 1) - 1);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}
