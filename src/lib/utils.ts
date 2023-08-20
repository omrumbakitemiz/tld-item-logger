import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function debounce(f: any, delay: any) {
  let timer = 0;
  return function (...args: any) {
    clearTimeout(timer);
    // @ts-ignore
    timer = setTimeout(() => f.apply(this, args), delay);
  };
}
