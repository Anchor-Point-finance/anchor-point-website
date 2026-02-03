/**
 * Navigation link type for navbar and routing
 */
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
  anchor?: string;
}

/**
 * Calculator types
 */
export type CalculatorType = 'repayment' | 'refinance' | 'amortization';

export interface CalculatorOption {
  id: CalculatorType;
  label: string;
  icon: string;
  description: string;
}

/**
 * Form input types
 */
export interface FormInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

/**
 * API Response types (for future use)
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
