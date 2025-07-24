function calculateTax(income: number, year: number): number {
   if (year > 2025) return income * 1.4;
   return income * 1;
}
calculateTax(49_000, 2025);