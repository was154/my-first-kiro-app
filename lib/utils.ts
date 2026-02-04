/**
 * ユーティリティ関数
 * Utility Functions
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * クラス名を結合するユーティリティ関数
 * Utility function to combine class names
 * 
 * @param inputs - 結合するクラス名
 * @returns 結合されたクラス名文字列
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}